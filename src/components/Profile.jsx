import React, { Component } from 'react'
import Skill from './Skill'
import PersonalData from './PersonalData'



class Profile extends Component{
    render(){
        return(
            <div>
                <PersonalData/>
                <Skill skillname={"HTML5"} level={"3"}/>
                <Skill skillname={"CSS3"} level={"3"}/>
                <Skill skillname={"Javascript"} level={"3"}/>
                <Skill skillname={"English"} level={"Intermediate"}/>
            </div>

        )
    }
}

export default Profile