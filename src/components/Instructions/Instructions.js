import React from "react";
import laugh from './laugh.png';
import "./Instructions.css";



function Instructions (){
        return (
            <div className="instructions">
            <img alt="laughing crying emoji" src={laugh} />
            <p>Click on an emoji to view the emoji short name.</p>
            </div>
        );
}

export default Instructions;