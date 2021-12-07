import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import "./Skill.css";
const listtitlestyle={fontWeight:900, color:'#9B1FE8' ,marginBottom:'4px'};
const backendskill=
               <ul>
                   <li style={listtitlestyle}>backEnd</li>
                   <li>Express MongoDB</li>
                   
               </ul>

const frontendskill=
               <ul>
                   <li style={listtitlestyle}>FrontEnd</li>
                   <li>React Js , HTML ,CSS</li>
                   
               </ul>

const OtherSkill=
               <ul>
                      <li style={listtitlestyle}>Otherskill</li>
                   <li>Time management</li>
               </ul>



 const totalskill=[backendskill,frontendskill,OtherSkill];

const Skill = () => {
    return (
        <div className="myskill  row" id="skill">
            <PageHeader title="what about the Skills and projects ?" />
            <p>i I have problem solving ability,also i got 3 star on hackerrank .
               I attended National level hardware workshop ,also i am Runner in the event Blind C/C++ which conducted on Oct 2019.</p>
            <img src="images/codeThinking.svg" alt="code thinking"  width="60%" paddingLeft="40%"/>
            <div className="skillContainer col-10">
                {
                    totalskill.map((skill)=>{
                        return(
                            
                                <div className="listskil">
                                   {skill}
                                </div>

                        )
                    })
                }
            </div>

            <div className="project col-12">

               <h1> Projects</h1>
               <h2> 1 . Resturant view item</h2>
                <p> this project created using React js in this show different category of food like snack , lunch , dinner.</p>
                 <p> bulding this project use of  react hooks  javascript method like map.</p>

                <h2>2. ToDo List</h2>
                <p>this project created using react in this we can add item in list delete and edit item.</p>
                <p>in this project ue use react hooks like useState, useffect, LocalStorage.</p>
            </div>
           

            
        </div>
    )
}

export default Skill;
