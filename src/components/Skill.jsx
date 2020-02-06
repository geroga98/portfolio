import React, { Component } from 'react'

class Skill extends Component{
    

    render(){
        return(
            <div>
                <p className="Skills">Skill: {this.props.skillname}, Level: {this.props.level} </p>
            </div>
        )
    }

}


export default Skill