import React from 'react';

class About extends React.Component {
    render() {
        console.log(this.props.params);
        return (<div>
            <h1>Category: {this.props.params.item}</h1>
        </div>);
    }
}

export default About;