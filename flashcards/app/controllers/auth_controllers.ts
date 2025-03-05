import { dd } from '@adonisjs/core/services/dumper'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async accueil({ view }: HttpContextContract) {
    //const decks = await
    return view.render('pages/home')
  }

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
