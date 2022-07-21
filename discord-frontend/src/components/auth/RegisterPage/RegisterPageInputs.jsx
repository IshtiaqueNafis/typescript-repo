import React from 'react';
import {useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {registerUserAsync} from "../../../app/redux/slice/authsliceReducer";

const RegisterPageInputs = () => {
    const dispatch = useDispatch()

    const {register, handleSubmit, formState: {isDirty, isSubmitting, isValid, errors}, reset} = useForm({
        mode: "onTouched"
    });

    const onSubmitHandler = data => {
        try {
            dispatch(registerUserAsync({data}));
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <TextField
                margin={"normal"}
                color={'success'}
                fullWidth
                label="Email"
                autoFocus
                {...register('mail', {required: 'email is required'})}
                error={!!errors.mail}
                helperText={errors?.mail?.message}
            />

            <TextField
                margin={"normal"}
                color={'success'}
                fullWidth
                label="username"
                autoFocus
              error=  {!!errors.username}
                helperText={errors?.username?.message}
                {...register('username', {required: 'username is required'})}
            />

            <TextField
                margin={"normal"}
                fullWidth
                label="password"
                type={"password"}
                color={'success'}
                error=   {!!errors.password}
                autoFocus
                helperText={errors?.password?.message}
                {...register('password', {required: 'password is required',})}
            />
            <Button disabled={!isValid} type={"submit"}>register</Button>

        </form>
    );
};

export default RegisterPageInputs;
