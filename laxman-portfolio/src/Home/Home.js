import React from 'react';
import '../Home/Home.css';

const Home = () => {
    return (
        <div className="home" id="home" >
            <div className="container">
                <h1 className="hello">Hello Everyone </h1>
                <h1>Welcome to my Portfolio website</h1>
                <h1 style={{color:'grey'}}>Objective : </h1>
                  <h2>To be part of Organization which give me opportunity to</h2>
                 <h2> enhance my knowledge and to achieve Organizational goals.</h2> 
            </div><br/>
            <img  className="code" src="./images/code.svg" alt="code" />
            <img className="binaryimg" src="./images/binary1.svg" alt="binary" />
        </div>
    )
}

export default Home;
