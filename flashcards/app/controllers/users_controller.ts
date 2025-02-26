// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '#models/user'

export default class UsersController {
  public async register({ request, session, response }: HttpContextContract) {
    const data = request.only(['email', 'password', 'full_name'])
    if (!data.email || !data.password || !data.full_name) {
      session.flash({ error: 'Tous les champs sont obligatoires !' })
      return response.redirect('back') // Redirige vers le formulaire
    }
    const existUser = await User.findBy('full_name', data.full_name)
    if (existUser) {
      await User.create(data)
      session.flash({ success: 'Compte créé avec succès !' })
      return response.redirect('http://localhost:3333/login')
    } else {
      session.flash({ error: 'ce nom existe deja !' })
      return response.redirect('back') // Redirige vers le formulaire
    }
  }

  public async getUsers({ response }: HttpContextContract) {
    const users = await User.all()
    return response.ok(users)
  }
}
