import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="rgdt1-UserOutput_Container">
            <h2>Hello app!</h2>
            <p>My username is <b>{props.username}</b></p>
        </div>
    );
};

export default userOutput;