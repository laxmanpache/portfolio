import React from 'react';
import "./NavBar.css";

const Navbar = () => {

    return (
        <div className="navbar   "  >
          <div className="nav-container">
         <nav >
             <ul className="nav-menu">
                     <li className="nav-item"> <a href="#home">Home</a></li>
                 </ul>
                 <ul>
                     <li className="nav-item"> <a href="#about">About Me</a></li>
                 </ul>
                 <ul>
                     <li className="nav-item"> <a href="#contact">Contact ME</a></li>
                 </ul>
              
                 <ul>
                     <li className="nav-item"> <a href="#skill">Skill</a></li>
                 </ul>
                 <ul>
                 <div className="nav-icon" >
                 <i className="fa fa-bars" ></i>
                  </div>
                 </ul>
              
             </nav>
            
         </div>
                 
        </div>
       
    )
}

export default Navbar
