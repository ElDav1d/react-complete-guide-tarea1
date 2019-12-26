import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        display: 'block',
        margin: '0 auto 1rem',
        color: 'blue',
        fontWeight: 'bold'
    }

    return <input 
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />;
};

export default userInput;