import Router from './router.js'
import * as catsController from '../controllers/cats.controller.js'

class CatsRouter extends Router
{
    init()
    {
        // this.router.get('/', catsController.getCats)
        this.router.post('/create', catsController.createCat)
    }
}

export default CatsRouter;