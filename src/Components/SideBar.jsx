import React from "react";

const SideBar = ({ id }) => {
  return (
    <div style={{width:'250px'}} className="d-flex flex-column">
      <ul class="nav nav-tabs justify-content=center">
        <li class="nav-item">
          <a class="nav-link " href="#" onKeyDown="conversation" >
            Conversation
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onKeyDown="contacts" href="#">
            Contacts
          </a>
        </li>
   
      </ul>
    </div>
  );
};

export default SideBar;
