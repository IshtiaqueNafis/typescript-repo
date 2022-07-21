import React from 'react';
import AuthBox from "../../common/AuthBox";
import LogInPageHeader from "./LogInPageHeader";
import LogInPageInputs from "./LogInPageInputs";

const LogInPage = () => {

    return (
        <AuthBox>
            <LogInPageHeader/>
            <LogInPageInputs/>

        </AuthBox>
    );
};

export default LogInPage;
