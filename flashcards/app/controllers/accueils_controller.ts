import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Deck from '#models/deck'
export default class AccueilsController {
  /**
   * Display a list of resource
   */

  public async accueil({ view, auth }: HttpContextContract) {
    const userId = auth.user.id
    const decks = await Deck.query().where('user_id', userId).orderBy('name', 'asc')

    return view.render('pages/home', { decks })
  }
  /**
   * Display form to create a new record
   */
  user_id = 123
  /**
   * Handle form submission for the create action
   */
  public async store({ request, session, response }: HttpContextContract) {
    const { name, description } = await request.validateUsing()

    await Deck.create({ name, description, user_id })
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
