//import { dd } from '@adonisjs/core/services/dumper'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ view }: HttpContextContract) {
    return view.render('pages/login')
  }

  public async register({ view }: HttpContextContract) {
    return view.render('pages/register')
  }

  public async redirectToLogin({ response }: HttpContextContract) {
    return response.redirect('http://localhost:3333/login')
  }
}
