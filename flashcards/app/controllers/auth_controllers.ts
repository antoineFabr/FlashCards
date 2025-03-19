//import { dd } from '@adonisjs/core/services/dumper'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async login({ view }: HttpContext) {
    return view.render('pages/login')
  }

  public async register({ view }: HttpContext) {
    return view.render('pages/register')
  }

  public async redirectToLogin({ response }: HttpContext) {
    return response.redirect('http://localhost:3333/login')
  }
}
