import React from 'react';
import styled from "@emotion/styled";
import SideBar from "./bar/SideBar/SideBar";
import FriendsSideBar from "./bar/FriendSideBar/FriendsSideBar";
import Messenger from "./Messenger";
import AppBar from "./bar/AppBar/AppBar";

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex'
})


const DashBoard = () => {
    return (
        <Wrapper>
            <SideBar/>
            <FriendsSideBar/>
            <Messenger/>
            <AppBar/>
        </Wrapper>
    );
};

export default DashBoard;
