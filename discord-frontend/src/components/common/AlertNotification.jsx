import React from 'react';
import {Alert, Snackbar} from "@mui/material";

const AlertNotification = ({
                               showAlertMessage,
                               closeAlertMessage,
                               alertMessageContent
                           }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={showAlertMessage}
            onClose={closeAlertMessage}
            autoHideDuration={6000}
        >
            <Alert severity="info">{alertMessageContent}</Alert>
        </Snackbar>
    );
};

export default AlertNotification;
