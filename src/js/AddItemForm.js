import React from 'react';

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      link: ''
    }
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    if(this.state.link) {
      this.props.onAddItem(this.state.link);
      this.setState({link: ''});
    }
  }
  render() {
    return (<form>
        <div className="form-group">
          <label for="link">Link</label>
          <input type="text" className="form-control" id="link" value={this.state.link} onChange={(e) => this.setState({link: e.target.value})} placeholder="Link" />
        </div>
        <button type="button" className="btn btn-default btn-block" onClick={this.addItem}>Submit</button>
      </form>);
  }
}

export default AddItem;
