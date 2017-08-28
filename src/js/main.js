import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';

class FirstComponent extends React.Component {
    constructor() {
        super();
        this.name = "Ab";
        this.state = {
            name: "Kool guy 2007"
        }
        this.changeName = this.changeName.bind(this);
    }
    displayName(name) {
        return <h1>Hello {name} </h1>;
    }
    changeName() {
        this.setState({name: "name"});
    }
    render() {
        console.log("rendering");
        return (<div>
            <Header username={this.state.name} />
            <button onClick={this.changeName}>Change Name</button>
            <p>Hi again {this.name}</p> 
            <Footer />
        </div>);
    }
}

ReactDOM.render(<FirstComponent />, document.getElementById('app'));

const set = new Set(['books', 'pens', 'paper', 'books']);
set.forEach((val) => {
    console.log(val);
})