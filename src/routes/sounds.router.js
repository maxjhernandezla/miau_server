import authentication from '../middlewares/authentication.js';
import Router from './router.js'
import * as soundsController from '../controllers/sounds.controller.js'
class SoundsRouter extends Router
{
    init()
    {
        this.router.get('/', authentication, soundsController.getSounds)
        this.router.get('/:sid', authentication, soundsController.getSoundById)
        this.router.get('/reproduce/:sid', soundsController.reproduce)
        this.router.post('/create', authentication, soundsController.createSound)
        this.router.put('/update/:sid', authentication, soundsController.updateSound)
        this.router.delete('/delete/:sid', authentication, soundsController.deleteSound)
    }

}

export default SoundsRouter;