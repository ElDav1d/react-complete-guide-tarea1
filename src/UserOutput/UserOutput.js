import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hello app!</p>
            <p>My username is {props.username}</p>
        </div>
    );
};

export default userOutput;