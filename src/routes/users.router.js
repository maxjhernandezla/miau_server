import Router from './router.js'
import * as usersController from '../controllers/users.controller.js'

class UserRouter extends Router
{
    init()
    {
        this.router.post('/login', usersController.login)
        this.router.post('/register', usersController.register)
    }
}

export default UserRouter;