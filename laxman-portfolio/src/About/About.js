import React from 'react';
import  './About.css';
import PageHeader from '../PageHeader/PageHeader';

const About = () => {
    return (
        <div className="AboutMe" id="about">
        <PageHeader title="About Me"/>
        <div className="container">
            <div className="text1">
                <h2>Hello I'm Laxman Pache</h2>
                <p>  I completed my BE in Computer Engineering form Savitribai Phule University Pune with 8.12 CGPA.

                </p>
            </div>
            <div className="photo">
                <img className="me" src="./images/me.jpeg" alt="laxman" />
            </div>
        </div>
        </div>
    )
}

export default About
