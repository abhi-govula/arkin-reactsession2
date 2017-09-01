import React from 'react';
import ChildOne from './ChildOne';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            hero: "Super man"
        }
        this.changeHero = this.changeHero.bind(this);
    }
    changeHero(hero) {
        this.setState({hero: hero});
    }
    render() {
        return (<div>
            <h1>Category: {this.props.params.item}</h1>
            <hr />
            {this.state.hero}
            <hr />
            <ChildOne name={this.state.hero} changeHero={this.changeHero} />
        </div>);
    }
}

export default About;