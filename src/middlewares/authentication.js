import { verifyToken } from "../utils/utils.js";

const authentication = (req, res, next) =>
{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401); // No token found in the request
    try
    {
        const decoded = verifyToken(token);
        req.user = decoded.user;
        next();
    } catch (error)
    {
        if (error.message === "The token has expired, please generate a new one.")
        {
            return res.status(401).json({ message: error.message });
        } else
        {
            return res.status(403).json({ message: "Token verification failed." });
        }
    }
};

export default authentication;