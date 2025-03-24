FROM node:20.12.2-alpine3.18 AS base

# All deps stage
FROM base AS deps
WORKDIR /flashcards
ADD flashcards/package.json flashcards/package-lock.json ./
RUN npm ci

# Production only deps stage
FROM base AS production-deps
WORKDIR /flashcards
ADD flashcards/package.json flashcards/package-lock.json ./
RUN npm ci --omit=dev

# Build stage
FROM base AS build
WORKDIR /flashcards
COPY --from=deps /flashcards/node_modules /flashcards/node_modules
ADD . .
RUN node ace build

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /flashcards
COPY --from=production-deps /flashcards/node_modules /flashcards/node_modules
COPY --from=build /flashcards/build /flashcards
EXPOSE 3333
CMD ["node", "./bin/server.js"]
