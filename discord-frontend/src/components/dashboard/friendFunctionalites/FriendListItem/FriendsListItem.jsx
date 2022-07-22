import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OnlineIndicator from "../../OnlineIndicator";
import Avatar from "../../../common/Avatar";
import "./FriendListItem.scss"

const FriendsListItem = ({id, username, isOnline}) => {
    return (
        <Button
            className={'friend-list-item'}>
            <Avatar username={username}/>
            <Typography
                style={{
                    marginLeft: "7px",
                    fontWeight: 700,
                    color: "#8e9297",
                }}
                variant="subtitle1"
                align="left"
            >
                {username}
            </Typography>
            {isOnline && <OnlineIndicator/>}
        </Button>
    );
};

export default FriendsListItem;