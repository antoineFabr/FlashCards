// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '#models/user'
import { UserValidator } from '#validators/user'
import { loginUserValidator } from '#validators/loginuser'
import { dd } from '@adonisjs/core/services/dumper'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
  public async register({ request, session, response }: HttpContextContract) {
    //const data = request.only(['full_name', 'email', 'password'])
    try {
      const payload = await request.validateUsing(UserValidator)
      const user = await User.create({
        full_name: payload.full_name,
        email: payload.email,
        password: payload.password,
      })
      session.flash('success', 'Utilisateur créé avec succès !')
      return response.redirect().toRoute('accueil')
    } catch (error) {
      session.flash({ error: 'votre nom d utilisateur ou votre mail est deja pris !' })
      return response.redirect('back')
    }

    // Stocker un message flash pour succès

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
    try {
      const payload = await request.validateUsing(loginUserValidator)
      const user = await User.findBy('email', payload.email)
      if (!user) {
        session.flash({ error: 'votre mot de passe ou votre mail est incorect' })
        return response.redirect('back')
      }
      const passwordValid = await hash.verify(user.password, payload.password)
      if (!passwordValid) {
        session.flash({ errors: [{ message: "L'email ou le mot de passe est incorrect." }] })
        return response.redirect('back')
      }

      return response.redirect().toRoute('accueil')
    } catch (error) {
      session.flash({ error: 'votre mot de passe ou votre mail est incorect' })
      return response.redirect('back')
    }

    dd(request.all())
  }

  public async getUsers({ response }: HttpContextContract) {
    const users = await User.all()
    return response.ok(users)
  }
}
