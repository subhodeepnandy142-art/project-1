import React from 'react'

function Alert(props) {
    const capitalize = (words)=> {
        const lower = words.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.toggleAlert && 
        <div className={`alert alert-${props.toggleAlert.msgtype} alert-dismissible fade show`} role="alert">
            <strong>{capitalize (props.toggleAlert.msgtype)}: </strong>{props.toggleAlert.msg}
        </div>
    )
}

export default Alert;
