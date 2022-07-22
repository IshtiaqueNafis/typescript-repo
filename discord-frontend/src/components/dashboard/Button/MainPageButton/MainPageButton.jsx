import React from "react";
import Button from "@mui/material/Button";
import GroupsIcon from "@mui/icons-material/Groups";
import "./MainPageButton.scss"

const MainPageButton = () => {
    return (
        <Button className={'main-page-button'}>
            <GroupsIcon/>
        </Button>
    );
};

export default MainPageButton;
