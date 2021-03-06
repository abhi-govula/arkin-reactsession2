import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
        
        }
        console.log("Constructor called");
        this.logData = this.logData.bind(this);
        this.setData = this.setData.bind(this);
        this.variables = ["name1", "name2"];
    }

    componentWillMount() {
        console.log("Component will mount called");
    }
    componentDidMount() {
        console.log("Component did mount called");
        this.props.actions.getJokes();
    }
    componentWillUnmount() {
        console.log("Component will unmount called");
    }
    logData() {
        // console.log(this.state);
        // this.setState({name: "kool"}, () => {
        //     console.log(this.state.name);
        // });
        // console.log(this);
        this.props.actions.addTodo(this.state.name);
    }
    formSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value, e.target.option.value);
    }
    setData(e) {
        let obj = this.state;
        obj[e.target.name] = e.target.value
        this.setState(obj);
    }
    render() {
        const todos = this.props.componentTodos.map((todo) => <div key={todo.id}><p>{todo.name}</p><p>{todo.completed}</p></div>)  
        return (<div>
            {this.variables}
            <h1 className="red">This is home</h1>
            <input type="text" name="name" value={this.state.name} onChange={this.setData} />
            <button onClick={this.logData}>Add Todo</button>

            
            {todos}
        </div>);
    }
}

const mapStateToProps = function(state) {
    return {
        componentTodos: state.todos
    }
}
const mapDispatchToProps = function(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);