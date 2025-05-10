import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeContext from "./context/ThemeContext";


const Header = () => {
    
    const {themeName, btnClass,   themeChanger , todos} = useContext(ThemeContext) ;
    

    return (
        <div className="header" style={{
            backgroundColor: themeName === "Dark" ? "#6200EE" : "#3700B3",  
        }}>
        <div className="container" >
            <h3>Todo list</h3>
            <button type="button" className= {btnClass} onClick={themeChanger}>
            {themeName}
            </button>
        </div>
        </div>
    );
};

export default Header;
