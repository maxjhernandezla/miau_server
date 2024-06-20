import { createHash, generateToken, isValidPassword } from "../utils/utils.js";
import * as usersDbManager from '../dao/managers/users.manager.js'
import UserDto from "../dto/user.dto.js";

const createUser = async (email, password) =>
{
    if (!email || !password) throw new Error('Incomplete credentials');
    await getUserByEmailRegister(email);
    const hashedPassword = createHash(password);
    const newUser = { email, password: hashedPassword }
    const result = await usersDbManager.create(newUser);
    const userDto = new UserDto(result);
    return userDto;
}

const login = async (email, password) =>
{
    if (!email || !password) throw new Error('Incomplete credentials');
    const user = await getUserByEmail(email);
    isValidPassword(password, user)
    const userDto = new UserDto(user);
    const accessToken = generateToken(userDto);
    return { accessToken, user: userDto };
}

const getUserByEmailRegister = async (email) =>
{
    const user = await usersDbManager.findByEmail(email);
    if (user)
    {
        throw new Error("User already exists");
    }
};

const getUserByEmail = async (email) =>
{
    const user = await usersDbManager.findByEmail(email);
    if (!user) throw new Error('User not found')
    return user
}

const getUserById = async (id) =>
{
    const user = await usersDbManager.findById(id);
    if (!user) throw new Error('User not found')
    return user
}

const findByIdAndUpdate = async (id, params) =>
{
    const user = await usersDbManager.findByIdAndUpdate(id, params);
    if (!user) throw new Error('User not found');
    return user
}


export { createUser, getUserByEmailRegister, login, getUserByEmail, getUserById, findByIdAndUpdate }