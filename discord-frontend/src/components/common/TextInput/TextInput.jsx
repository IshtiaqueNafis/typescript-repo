import React from 'react';
import {styled} from "@mui/system";
import {Input, TextField} from "@mui/material";
import   './TextInput.scss';
const Wrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
});


const Label = styled("p")({
    color: "#b9bbbe",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "16px",
});


const TextInput = ({props, label,type}) => {

    return (
        <Wrapper>
            <Label>{label}</Label>
            <TextField className={'text-input'} {...props} type={type}/>
        </Wrapper>
    );
};

export default TextInput;
