import Router from './router.js'
import * as catsController from '../controllers/cats.controller.js'
import authentication from '../middlewares/authentication.js';

class CatsRouter extends Router
{
    init()
    {
        this.router.get('/', authentication, catsController.getCats)
        this.router.get('/:cid', authentication, catsController.getCatById)
        this.router.post('/create', authentication, catsController.createCat)
        this.router.put('/update/:cid', authentication, catsController.updateCat)
        this.router.delete('/delete/:cid', authentication, catsController.deleteCat)
        this.router.get('/:cid/vaccines', authentication, catsController.getCatVaccinations)
        this.router.post('/:cid/vaccines/:vid', authentication, catsController.addVaccineToCat)
        this.router.delete('/:cid/vaccines/:vid', authentication, catsController.deleteVaccineFromCat)
        this.router.put('/:cid/vaccines/:vid', authentication, catsController.updateVaccineFromCat)
    }
}

export default CatsRouter;