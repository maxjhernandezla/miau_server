import * as userService from '../services/user.service.js';

const login = async (req, res) =>
{
    try
    {
        const { email, password } = req.body;
        const { user, accessToken } = await userService.login(email, password);
        res.send({ user, accessToken });
    } catch (error)
    {
        res.status(500).json({ message: error.message });
    }
}

const register = async (req, res) =>
{
    try
    {
        const { email, password } = req.body;
        const user = await userService.createUser(email, password);
        res.status(201).json(user);
    } catch (error)
    {
        res.status(500).json({ message: error.message });
    }


}

export { login, register }