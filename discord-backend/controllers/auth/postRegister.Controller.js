import {User} from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postRegister = async (req, res) => {
    try {
        const {username, mail, password} = req.body;
        // check if user exist
        const userExists = await User.exists({mail: mail.toLowerCase()})
        if (userExists) {
            return res.status(409).send('email already in use');
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            mail,
            password: encryptedPassword
        })
        // create jwt token and send it to client


        const token = jwt.sign({
            userId: user.id,
            mail
        }, process.env.TOKEN_KEY, {
            expiresIn: '24h'
        })
        res.status(201).json({
            userDetails: {
                mail: user.mail,
                username: user.username,
                token: token
            }
        })
    } catch (e) {
        return res.status(500).send('error occoured')
    }
}
