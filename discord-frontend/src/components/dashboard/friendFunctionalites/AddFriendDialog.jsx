import React from 'react';
import {Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";

const AddFriendDialog = ({isDialogOpen, closeDialogHandler}) => {
    const {register, handleSubmit, formState: {isDirty, isSubmitting, isValid, errors}, reset} = useForm({
        mode: "onTouched"
    });

    const handleSendInvitation = (data) => {
        console.log({data});
        // send friend request to server
    };
    return (
        <div>
            <Dialog open={isDialogOpen} onClose={closeDialogHandler}>
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            Enter e-mail address of friend which you would like to invite
                        </Typography>
                        <form onSubmit={handleSubmit(handleSendInvitation)}>
                            <TextField
                                margin={"normal"}
                                color={'success'}
                                fullWidth
                                label="Enter mail address"
                                autoFocus
                                {...register('mail', {required: 'email is required'})}
                                error={!!errors.mail}
                                helperText={errors?.mail?.message}
                            />
                            <Button disabled={!isValid} type={"submit"}>Send</Button>
                        </form>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddFriendDialog;
