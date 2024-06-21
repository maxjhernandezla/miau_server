import { Router as expressRouter } from "express";
import authentication from "../middlewares/authentication.js";

export default class Router
{
    constructor()
    {
        this.router = expressRouter();
        this.init();
    }

    getRouter()
    {
        return this.router;
    }
    // get(path, policies, ...callbacks)
    // {
    //     this.router.get(
    //         path,
    //         this.handlePolicies(policies),
    //         this.applyCallbacks(callbacks)

    //     )
    // }

    // post(path, policies, ...callbacks)
    // {
    //     this.router.get(
    //         path,
    //         this.handlePolicies(policies),
    //         this.applyCallbacks(callbacks)

    //     )
    // }

    // put(path, policies, ...callbacks)
    // {
    //     this.router.get(
    //         path,
    //         this.handlePolicies(policies),
    //         this.applyCallbacks(callbacks)

    //     )
    // }

    // delete(path, policies, ...callbacks)
    // {
    //     this.router.get(
    //         path,
    //         this.handlePolicies(policies),
    //         this.applyCallbacks(callbacks)

    //     )
    // }
    // handlePolicies = (policies) => async (req, res, next) =>
    // {
    //     if (policies[0] === "PUBLIC") return next();
    //     try 
    //     {
    //         // Aplica la autenticación
    //         await authentication(req, res, next);

    //         // Verificar políticas después de la autenticación
    //         const user = req.user;
    //         if (!policies.includes(user.role.toUpperCase()))
    //         {
    //             return res.status(403).json({ message: "Forbidden" });
    //         }
    //         next();
    //     } catch (error)
    //     {
    //         if (error.message === "The token has expired, please generate a new one.")
    //         {
    //             return res.status(401).json({ message: error.message });
    //         } else
    //         {
    //             return res.status(403).json({ message: "Token verification failed." });
    //         }
    //     }
    // };

    // applyCallbacks(callbacks)
    // {
    //     return callbacks.map((callback) => async (...params) =>
    //     {
    //         try
    //         {
    //             await callback.apply(this, params); //req, res, next
    //         } catch (error)
    //         {
    //             params[1].status(500).json({ error: error.message });
    //         }
    //     });
    // }



    init() { }
}