import React from 'react';

const ChildOne = (props) => {
    // props.name ="Batman";    
    return <div><p>Hi there {props.name}</p><button onClick={() => props.changeHero("Batman")}>Change to Batman</button></div>
}

export default ChildOne;