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

router.get('/accueil', [AuthController, 'accueil'])

router.get('/', [AuthController, 'redirectToLogin'])

router.get('/login', [AuthController, 'login'])

router.get('/register', [AuthController, 'register']).as('showregister')

router.post('/register', [UsersController, 'register']).as('postregister')

router.get('/users', [UsersController, 'getUsers'])
