import React from "react";
import DropDownMenu from "../../DropDownMenu";
import "./AppBar.scss"


const AppBar = () => {
    return (
        <div className={'app-bar'}>
            <DropDownMenu/>
        </div>
    );
};

export default AppBar;
