// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '#models/user'
import { UserValidator } from '#validators/user'
import { loginUserValidator } from '#validators/loginuser'
import { dd } from '@adonisjs/core/services/dumper'

export default class UsersController {
  public async register({ request, session, response }: HttpContextContract) {
    //const data = request.only(['full_name', 'email', 'password'])
    dd(request.all())
    const payload = await request.validateUsing(UserValidator)

    const user = await User.create({
      full_name: payload.full_name,
      email: payload.email,
      password: payload.password,
    })

    // Stocker un message flash pour succès
    session.flash('success', 'Utilisateur créé avec succès !')
    return response.redirect().toRoute('accueil') // Redirige vers le formulaire
    //const data = request.only(['email', 'password', 'full_name'])

    /*if (!data.email || !data.password || !data.full_name) {
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
      
    }*/
  }
  public async login({ request, session, response }: HttpContextContract) {
    //dd(request.all())
    await request.validateUsing(loginUserValidator)
    dd(request.all())
    return response.redirect().toRoute('accueil')
  }

  public async getUsers({ response }: HttpContextContract) {
    const users = await User.all()
    return response.ok(users)
  }
}
