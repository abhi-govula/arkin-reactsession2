import React from 'react';

class Home extends React.Component {
    constructor() {
        super();
        console.log("Constructor called");
    }

    componentWillMount() {
        console.log("Component will mount called");
    }
    componentDidMount() {
        console.log("Component did mount called");
    }
    componentWillUnmount() {
        console.log("Component will unmount called");
    }
    render() {
        console.log("Render called");        
        return (<div>
            <h1>This is home</h1>
        </div>);
    }
}

export default Home;