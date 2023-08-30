import React from 'react';
import { CgLogOut } from "react-icons/cg";

const LogoutButton = ({ logout, className }) => {
    return (
        <button className={className} onClick={logout}><CgLogOut /></button>
    );
}

export default LogoutButton;
