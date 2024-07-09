import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { format } from 'date-fns'
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
    const token = jwt.sign({ user }, process.env.PRIVATE_KEY, { expiresIn: "1h" });
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

const ownerOwnsCat = (owner_id, user_id) =>
{
    if (owner_id !== user_id) throw new Error('You are not authorized to perform this')
}

const userIsAdmin = (user) =>
{
    if (user.role.toLowerCase() !== 'admin') throw new Error('Not authorized')
}

const nextDueDate = (date, months) =>
{
    const newDate = new Date(date);
    const dayOfMonth = newDate.getDate();
    newDate.setMonth(newDate.getMonth() + months);

    // Ajuste del día del mes si el nuevo mes no tiene suficientes días
    if (newDate.getDate() < dayOfMonth)
    {
        newDate.setDate(0); // Ajusta al último día del mes anterior
    }
    console.log(newDate);
    return formatDate(newDate);
};

const formatDate = (date) =>
{
    const formattedDate = format(new Date(date), 'yyyy-MM-dd');

    return new Date(formattedDate)
}

const catHasVaccine = (cat, vid) =>
{
    if (!cat.vaccinations.some(vac => vac._id.toString() === vid))
        throw new Error('The cat does not have this vaccine')
}

const removeVaccine = (cat, vid) =>
{
    cat.vaccinations = cat.vaccinations.filter(vac => vac._id.toString() !== vid)
    return cat
}

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

export { createHash, isValidPassword, generateToken, verifyToken, ownerOwnsCat, userIsAdmin, nextDueDate, formatDate, catHasVaccine, removeVaccine }