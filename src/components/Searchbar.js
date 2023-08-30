import React from "react";
import Avvvatars from 'avvvatars-react'
import { BiSearchAlt } from "react-icons/bi";
import { useAuthContext } from '../hooks/useAuthContext';

const Searchbar = ({ keyword, keywordChange }) => {

  const { user } = useAuthContext();

  return (
    <div className="containerHeader">
      <div className="userProfile">
        <div className="profile-img">
          <Avvvatars value={user.email} />
        </div>
        <p>{user.email}</p>
      </div>
      <div className="searchBar">
        <BiSearchAlt className="iconSearch" />
        <input placeholder="Search by title..."
          type="text"
          value={keyword}
          onChange={(event) => keywordChange(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchbar;
