import React from 'react';
import AuthBox from "../../common/AuthBox";
import RegisterPageHeader from "./RegisterPageHeader";
import RegisterPageInputs from "./RegisterPageInputs";

const RegisterPage = () => {
    return (
        <AuthBox>
            <RegisterPageHeader/>
            <RegisterPageInputs/>
        </AuthBox>
    );
};

export default RegisterPage;
