import { createHash, generateToken, isValidPassword } from "../utils/utils.js";
import * as usersDbManager from '../dao/managers/users.manager.js'
import LoginUserDto from "../dto/loginUser.dto.js";
import UserDto from '../dto/user.dto.js'

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
    const userDto = new LoginUserDto(user);
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

const getUserById = async (uid) =>
{
    const user = await usersDbManager.findById(uid);
    if (!user) throw new Error('User not found')
    return user
}

const findByIdAndUpdate = async (uid, params) =>
{
    await getUserById(uid);
    const updatedUser = await usersDbManager.findByIdAndUpdate(uid, params);
    const userDto = new UserDto(updatedUser)
    return userDto
}

export { createUser, getUserByEmailRegister, login, getUserByEmail, getUserById, findByIdAndUpdate }