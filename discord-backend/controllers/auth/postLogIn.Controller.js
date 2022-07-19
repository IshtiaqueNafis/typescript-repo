import {User} from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postLogin = async (req, res) => {

    try {
        const {mail, password} = req.body;
        const user = await User.findOne({mail: mail.toLowerCase()});
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({
                userId: user.id,
                mail
            }, process.env.TOKEN_KEY, {
                expiresIn: '24h'
            })
            return res.status(200).json({
                userDetails: {
                    mail: user.mail,
                    token: token,
                    userName: user.username
                }
            })
        }
        return res.status(400).send('invalid credentials please try again');
    } catch (e) {
        return res.status(500).send("please try again");
    }

}
