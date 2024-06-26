import * as usersService from '../services/users.service.js';

const login = async (req, res) =>
{
    try
    {
        const { email, password } = req.body;
        const { user, accessToken } = await usersService.login(email, password);
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
        const user = await usersService.createUser(email, password);
        res.status(201).json(user);
    } catch (error)
    {
        res.status(500).json({ message: error.message });
    }


}

const getUserById = async (req, res) =>
{
    try
    {
        const uid = req.params.uid;
        const user = await usersService.getUserById(uid);
        delete user.password;
        delete user.cats;
        res.status(200).json(user)
    } catch (error)
    {
        res.status(500).json({ message: error.message });

    }
}

const updateUser = async (req, res) =>
{
    try
    {
        const uid = req.params.uid;
        const user = req.body;
        const updatedUser = await usersService.findByIdAndUpdate(uid, user)
        res.status(200).json(updatedUser)
    } catch (error)
    {
        res.status(500).json({ message: error.message });

    }
}



export { login, register, getUserById, updateUser }