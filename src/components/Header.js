import React from "react";
import { AiOutlineHome, AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-brand__header">
        <h1>Todo App</h1>
      </div>
      <div className="navigation__header">
        <button className="icon home__navigation">
          <AiOutlineHome />
        </button>
        <button className="icon complete__navigation">
          <AiOutlineFileDone />
        </button>
        <button className="icon light__navigation">
          <BsTrash />
        </button>
        <button className="icon dark__navigation">
          <MdOutlineDarkMode />
        </button>
      </div>
      <Searchbar />
    </div>
  );
};

export default Header;
