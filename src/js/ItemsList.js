import React from 'react';

class ItemsList extends React.Component {

  render() {
    const itemdivs = this.props.items.map((item) => {
      return (<div className="row" key={item.id}>
          <div className="col-xs-4">
            <button className="btn btn-success" onClick={() => this.props.up(item.id)}>Up</button>
            <span>{item.votes}</span>
            <button className="btn btn-danger" onClick={() => this.props.down(item.id)}>Down</button>            
          </div>
          <div className="col-xs-8">{item.link}</div>
        </div>)
    })
    console.log(itemdivs);
    return (<div>{itemdivs}</div>);
  }
}

export default ItemsList;