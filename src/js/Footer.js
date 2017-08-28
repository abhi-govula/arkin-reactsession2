import React from 'react';

export default class Footer extends React.Component {
    render() {
        console.log("rendering footer");
        return (<div>
            <p className="text-center">&copy; copyright 2017</p>
        </div>);
    }
}

