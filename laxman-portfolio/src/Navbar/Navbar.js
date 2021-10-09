import React from 'react';
import "./NavBar.css";

const Navbar = () => {
    return (
        <div className="navbar">
             <nav >
             <ul>
                     <li> <a href="#home">Home</a></li>
                 </ul>
                 <ul>
                     <li> <a href="#about">About Me</a></li>
                 </ul>
                 <ul>
                     <li> <a href="#contact">Contact ME</a></li>
                 </ul>
              
                 <ul>
                     <li> <a href="#skill">Skill</a></li>
                 </ul>
                
             </nav>
        </div>
    )
}

export default Navbar
