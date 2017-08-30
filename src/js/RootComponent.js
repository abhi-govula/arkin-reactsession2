import React from 'react';
import { Link } from 'react-router';

class RootComponent extends React.Component {
    render() {
        return (<div>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Brand</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/categories">categories</Link></li>        
        <li><Link to="/categories/books">categories books`</Link></li>
        <li><Link to="/categories/pens">categories pens</Link></li>
        <li><Link to="/categories/stationary">categories stationary</Link></li>
      </ul>
    </div>
  </div>
</nav>
            {this.props.children}
        </div>);
    }
}

export default RootComponent;