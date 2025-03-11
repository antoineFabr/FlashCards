import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CartesController {
    public async create({ view, params}: HttpContextContract){

        const deckId = params.id
        return view.render('pages/cartes/create',{title: "ajout d'un nouveau deck",deckId: deckId})
    }

    public async store({ request, session, response ,auth}: HttpContextContract){
   
        const { name, description } = await request.validateUsing(deckValidator)
        
        const user_id = auth.user.id
    
       
        session.flash('success', 'Le nouveau deck a été ajouté avec succès !')
        return response.redirect().toRoute('accueil')
    
      }
}