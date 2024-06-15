import Router from "./router.js";
import * as soundController from '../controllers/sound.controller.js'
class SoundRouter extends Router
{
    init()
    {
        this.router.get('/', soundController.reproduce)
    }
}

export default SoundRouter;