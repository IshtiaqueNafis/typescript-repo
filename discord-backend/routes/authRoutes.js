import express from "express";
import {AuthControllers} from "../controllers/auth/auth.Controllers";
import {createValidator} from "express-joi-validation";
import joi from "joi";

const validator = createValidator({})
const registerSchema = joi.object({
    username: joi.string().min(3).max(12).required(),
    password: joi.string().min(6).max(12).required(),
    mail: joi.string().email().required()
});

const loginSchema = joi.object({
    password: joi.string().min(6).max(12).required(),
    mail: joi.string().email().required()
})


const authRoutes = express.Router()

authRoutes.post('/register', validator.body(registerSchema), AuthControllers.postRegister);

authRoutes.post('/login', validator.body(loginSchema), AuthControllers.postLogin);

export {authRoutes};