
import { NavLink } from "react-router-dom";
import "../css/main.css";
import React, { Component } from 'react';
class Header extends React.Component {
    
    render() {
        


        return (
            <nav className="header">
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink> &nbsp;
              <NavLink activeClassName="active" to="/users">
               Add Users
              </NavLink>&nbsp;
              
              <NavLink activeClassName="active" to="/show">
               Show users
              </NavLink>&nbsp;
        
              <NavLink activeClassName="active" to="/update">
               update Users
              </NavLink>&nbsp;
        
        
        
        
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </nav>
          );
    }
  }




export default Header;