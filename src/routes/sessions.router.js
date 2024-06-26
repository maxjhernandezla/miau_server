import Router from './router.js'
import * as sessionsController from '../controllers/sessions.controller.js'
import authentication from '../middlewares/authentication.js'

class SessionsRouter extends Router
{
    init()
    {
        this.router.get('/current', authentication, sessionsController.verifySession)
    }
}

export default SessionsRouter;