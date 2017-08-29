import React from 'react';
import ReactDOM from 'react-dom';

import AddItem from './AddItemForm';
import ItemsList from './ItemsList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    this.add = this.add.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }
  add(link) {
    const obj = {id: this.state.items.length+1, votes: 0, link: link};
    let items = this.state.items;
    items.push(obj);
    this.setState({items: items}, () => console.log(this.state));
  }
  upVote(id) {
    const items = this.state.items;
    const updatedItems = items.map((item) => {
      if(item.id == id) {
        item.votes = item.votes+1;
        return item;
      } else {
        return item;
      }
    })
    this.setState({items: updatedItems});
  }
  downVote(id) {
    const items = this.state.items;
    const updatedItems = items.map((item) => {
      if(item.id == id) {
        item.votes = item.votes-1;
        return item;
      } else {
        return item;
      }
    })
    this.setState({items: updatedItems});
  }
  render() {
    return (<div className="container">
        <AddItem onAddItem={this.add} />
        <br/>
        <ItemsList items={this.state.items} up={this.upVote} down={this.downVote} />
      </div>);
  }
}

ReactDOM.render( < App / > , document.getElementById('app'));