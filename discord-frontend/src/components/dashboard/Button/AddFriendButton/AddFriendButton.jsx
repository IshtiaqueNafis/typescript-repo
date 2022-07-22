import React, {useState} from 'react';
import {Button} from "@mui/material";
import './AddFriendButton.scss'

const AddFriendButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenAddFriendDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseAddFriendDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <>
            <Button className={'add-friend'} onClick={handleOpenAddFriendDialog}>Add Friend</Button>
        </>
    );
};

export default AddFriendButton;
