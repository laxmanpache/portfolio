import React from 'react'
import './Contact.css'
import { FaInstagramSquare,FaGithub,FaLinkedinIn } from "react-icons/fa";
// import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {
    const handleurl=(url)=>{
        return ()=> window.open(url,'__blank');
    }
    return (
        <div className="contactus col-md-auto" id="contact">
          <div className="contacicon">
             <FaInstagramSquare className="logo" color='white' size="30px" style={{padding:'1%' ,  width: '10vmin'}}
               onClick={handleurl('https://www.instagram.com/laxman_pache/')} />
             <FaGithub  className="logo" color='white' size="30px" style={{padding:'1%',  width: '10vmin'}}
             onClick={handleurl('https://github.com/laxmanpache')} />
             <FaLinkedinIn className="logo" color='white' size="30px" style={{padding:'1%',  width: '10vmin'}} 
                 onClick={handleurl('https://www.linkedin.com/in/laxman-pache-9a99601a0/')}
             />
          
             </div>
        </div>
  )
}

export default Contact
