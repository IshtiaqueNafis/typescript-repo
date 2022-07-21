import React from 'react';
import {Button} from "@mui/material";

const CustomButton = ({  type,
                          label,
                          additionalStyles,
                          disabled,
                          onClick,
                      }) => {
    return (
        <Button
            type={type}
            variant="contained"
            sx={{
                bgColor: "#5865F2",
                color: "white",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                width: "100%",
                height: "40px",
            }}
            style={additionalStyles ? additionalStyles : {}}
            disabled={disabled}
        >

            {label}
        </Button>
    );
};

export default CustomButton
