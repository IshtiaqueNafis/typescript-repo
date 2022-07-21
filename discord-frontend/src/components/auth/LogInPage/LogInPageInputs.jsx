import React from "react";
import {useForm} from "react-hook-form";
import RedirectInfo from "../../common/RedirectInfo";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logInUserAsync} from "../../../app/redux/slice/authsliceReducer";
import {Button, TextField} from "@mui/material";


const LogInPageInputs = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handlePushToRegisterPage = () => {
        history.push("/register");
    }
    const {register, handleSubmit, formState: {isDirty, isSubmitting, isValid, errors}, reset} = useForm({
        mode: "onTouched"
    });

    const onSubmitHandler = async data => {

        try {
            dispatch(logInUserAsync({data}));
            history.push("/dashboard");
            reset();
        } catch (e) {
            console.log(e.message)
        }


    }

    return (
        <>
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
                    fullWidth
                    label="password"
                    type={"password"}
                    color={'success'}
                    autoFocus
                    {...register('password', {required: 'password is required',})}
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                />
                <Button disabled={!isValid} type={"submit"}>Sign in</Button>

            </form>
            <RedirectInfo
                text="Need an account? "
                redirectText="Create an account"
                additionalStyles={{marginTop: "5px"}}
                redirectHandler={handlePushToRegisterPage}
            />
        </>
    );
};

export default LogInPageInputs;
