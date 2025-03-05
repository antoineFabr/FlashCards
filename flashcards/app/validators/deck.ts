import vine from '@vinejs/vine'

export const deckValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
  })
)
