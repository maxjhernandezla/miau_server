import Router from './router.js'
import * as usersController from '../controllers/users.controller.js'
import authentication from '../middlewares/authentication.js'

class UserRouter extends Router
{
    init()
    {
        this.router.post('/login', usersController.login)
        this.router.post('/register', usersController.register)
        this.router.get('/:uid', authentication, usersController.getUserById)
        this.router.put('/update/:uid', authentication, usersController.updateUser)

    }
}

export default UserRouter;