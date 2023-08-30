import React from 'react';
import Logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { CgTimelapse } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import LogoutButton from '../LogoutButton';
import { useLogout } from '../../hooks/useLogout';


const NavBar = () => {
    const { logout } = useLogout();
    const navigate = useNavigate();
    const onClickToTrashPage = () => {
        navigate('/todos/trash');
    }

    const Logout = () => {
        logout();
    }


    return (
        <div className='NavBar'>
            <div className="brandContainer">
                <img src={Logo} alt="logo" />
            </div>
            <div className="navBarItems">
                <span title='Home'><Link to={"/"}><AiOutlineHome className="navBarItem" /></Link></span>
                <Link to={"/todos/due-date"}><span title='Expired Soon'><CgTimelapse className="navBarItem" /></span></Link>
                <Link to={"/todos/completed"}><span title='Completed'><AiOutlineFileDone className="navBarItem" /></span></Link>
                <span title='Trash' onClick={onClickToTrashPage}><BsTrash className="navBarItem" /></span>
            </div>
            <div className="profileWrapper">
                <span title='Settings'><FiSettings /></span>
                <LogoutButton className={'logoutButton'} logout={Logout} />
            </div>
        </div>
    );
}


export default NavBar;
