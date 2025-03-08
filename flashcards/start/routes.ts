/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from '../app/controllers/auth_controllers.js'
import UsersController from '#controllers/users_controller'
import AccueilsController from '#controllers/accueils_controller'
import { middleware } from './kernel.js'

router.get('/accueil', [AccueilsController, 'accueil']).as('accueil').use(middleware.auth())

router.get('/createDeck', [AccueilsController, 'create']).as('showcreateDeck')

router.get('/', [AuthController, 'redirectToLogin'])

router.get('/login', [AuthController, 'login']).as('getlogin')

router.post('/login', [UsersController, 'login']).as('postlogin')

router.get('/register', [AuthController, 'register']).as('showregister')

router.post('/register', [UsersController, 'register']).as('postregister')

router.get('/users', [UsersController, 'getUsers']).use(middleware.auth())

router.post('/accueil/store', [AccueilsController, 'store']).as('accueil.store').use(middleware.auth())
