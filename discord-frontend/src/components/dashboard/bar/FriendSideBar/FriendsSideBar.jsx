import React from 'react';
import AddFriendButton from "../../Button/AddFriendButton/AddFriendButton";
import FriendsTitle from "../../friendFunctionalites/FriendsTitle";
import FriendsList from "../../friendFunctionalites/FriendsList";
import PendingInvitationsList from "../../PendingInvitationsList";
import "./FriendSideBar.scss"

const FriendsSideBar = () => {
    return (
        <div className={'friend-side-bar'}>
            <AddFriendButton/>
            <FriendsTitle title="Private Messages"/>
            <FriendsList/>
            <FriendsTitle title="Invitations"/>
            <PendingInvitationsList/>
        </div>
    );
};

export default FriendsSideBar;
