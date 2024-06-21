import Router from './router.js'
import authentication from '../middlewares/authentication.js';
import * as vaccinesController from '../controllers/vaccines.controller.js'

class VaccinesRouter extends Router
{
    init()
    {
        this.router.get('/', vaccinesController.getVaccines)
        this.router.get('/:vid', vaccinesController.getVaccineById)
        this.router.post('/create', vaccinesController.createVaccine)
        this.router.put('/update/:vid', vaccinesController.updateVaccine)
        this.router.delete('/delete/:vid', vaccinesController.deleteVaccine)
    }
}

export default VaccinesRouter;