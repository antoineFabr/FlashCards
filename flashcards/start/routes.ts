/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AuthController from '../app/controllers/Pagecontrollers.ts'

router.get('/accueil', [AuthController, 'accueil'])
router.get('/', [AuthController, 'redirectToLogin'])
router.get('/login', [AuthController, 'login'])
router.get('/register', [AuthController, 'register'])
