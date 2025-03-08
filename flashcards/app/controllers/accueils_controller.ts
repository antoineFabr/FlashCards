import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { deckValidator} from '#validators/deck'
import Deck from '#models/deck'
import User from '#models/user'
export default class AccueilsController {
  /**
   * Display a list of resource
   */

  public async accueil({ view, auth,session }: HttpContextContract) {
    const userId = auth.user.id
    const decks = await Deck.query().where('user_id', userId).orderBy('name', 'asc')
  
   
    
    return view.render('pages/home', { decks })
  }
  /**
   * Display form to create a new record
   */
  public async create({ view}: HttpContextContract){
    return view.render('pages/decks/create',{title: "ajout d'un nouveau deck"})
  }
  /**
   * Handle form submission for the create action
   */
  public async store({ request, session, response ,auth}: HttpContextContract) {
   
    const { name, description } = await request.validateUsing(deckValidator)
    
    const user_id = auth.user.id

    await Deck.create({ name, description, user_id })
    session.flash('success', 'Le nouveau deck a été ajouté avec succès !')
    return response.redirect().toRoute('accueil')

  }
  /**
   * Show individual record
   */

  /**
   * Edit individual record
   */

  /**
   * Handle form submission for the edit action
   */

  /**
   * Delete record
   */
}
