import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { EmailNotMatchToken, ExpiredJWT } from "./custom-exceptions.js";

const createHash = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const isValidPassword = (password, user) =>
{
    const result = bcrypt.compareSync(password, user.password);
    if (!result) throw new Error('Invalid credentials')
    return result;
}

const generateToken = (user) =>
{
    const token = jwt.sign({ user }, process.env.PRIVATE_KEY, { expiresIn: "24h" });
    return token;
};

// const recoverPasswordToken = (user) => {
//   const token = jwt.sign({ user }, process.env.PRIVATE_KEY, { expiresIn: "1h" });
//   return token;
// };

const verifyToken = (token) =>
{
    try
    {
        const verifiedToken = jwt.verify(token, process.env.PRIVATE_KEY);
        return verifiedToken; // Retorna el token decodificado si es válido
    } catch (error)
    {
        if (error.name === "TokenExpiredError")
        {
            throw new Error("The token has expired, please generate a new one.");
        } else
        {
            throw new Error("Token verification failed.");
        }
    }
};

// const tokenExpired = (token) => {
//   const currentTime = Math.floor(Date.now() / 1000);
//   if (token.exp && currentTime >= token.exp) {
//     throw new ExpiredJWT("The token has expired, please generate a new one.");
//   }
// };

// const verifyEmail = (token, email) => {
//   if (token.user.email !== email) {
//     throw new EmailNotMatchToken(
//       "The requested email doesn't match the user's email"
//     );
//   }
// };

export { createHash, isValidPassword, generateToken, verifyToken }