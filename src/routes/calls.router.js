import Router from "./router.js";
import * as callsController from '../controllers/calls.controller.js'
import authentication from "../middlewares/authentication.js";

class CallsRouter extends Router
{
    init()
    {
        this.router.get('/', authentication, callsController.getCalls)
        this.router.get('/:cid', authentication, callsController.getCallById)
        this.router.get('/reproduce/:cid', callsController.reproduce)
        this.router.post('/create', authentication, callsController.createCall)
        this.router.put('/update/:cid', authentication, callsController.updateCall)
        this.router.delete('/delete/:cid', authentication, callsController.deleteCall)
    }

}

export default CallsRouter;