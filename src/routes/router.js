import { Router as expressRouter } from "express";

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

    init() { }
}