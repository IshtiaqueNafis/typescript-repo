import React from 'react';
import {Typography} from "@mui/material";

const RegisterPageHeader = () => {
    return (
        <>
            <Typography variant="h5" sx={{ color: "white" }}>
                Sign up to discord
            </Typography>
            <Typography sx={{ color: "#b9bbbe" }}>
                create an account and start chatting
            </Typography>
        </>
    );
};

export default RegisterPageHeader;
