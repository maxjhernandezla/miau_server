import Router from './router.js'
import * as userController from '../controllers/user.controller.js'

class UserRouter extends Router
{
    init()
    {
        this.router.post('/login', userController.login)
        this.router.post('/register', userController.register)
    }
}

export default UserRouter;