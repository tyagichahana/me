import React from "react";
import './index.scss';
import {Link} from "react-router-dom"

const ColoredButtons=(props)=>{
    if (props.as==="link"){
        return (
            <Link to={props.to} className={`primary${props.className ? ' ' + props.className : ''}`}>{props.children}</Link>
        )
    }
    return(
        <button
            className={`primary${props.className ? ' ' + props.className : ''}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.children}</button>
    );
}

const TransparentButtons=(props)=>{
    if (props.as==="link"){
        return (
            <Link to={props.to} className={`secondary${props.className ? ' ' + props.className : ''}`}>{props.children}</Link>
        )
    }
    return(
        <button
            className={`secondary${props.className ? ' ' + props.className : ''}`}
            onClick={props.onClick}
        >{props.children}</button>
    );
}

export {ColoredButtons,TransparentButtons}