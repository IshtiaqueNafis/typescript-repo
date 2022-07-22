import React from 'react';
import {styled} from "@mui/material";
import MainPageButton from "../../Button/MainPageButton/MainPageButton";
import "./SideBar.scss"

const SideBar = () => {
    return (
        <div className={'side-bar'}>
            <MainPageButton />
        </div>
    );
};

export default SideBar;
