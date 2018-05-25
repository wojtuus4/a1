var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('./css/index.css');
import {Router, Route, browserHistory} from 'react-router';



//Module requiredExtensions
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

var App = createReactClass({
  render: function(){
    return(
    <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
    </Router>
    );
  }
});
//Create component

var TodoComponent = createReactClass({
    getInitialState: function(){
      return{
        todos: ['Obudzić się', 'Otworzyć oczy', 'Zjeść śniadanie'],
      }
    },

    render: function(){

      var todos =this.state.todos;
      todos = todos.map(function(item, index){
        return(
          <TodoItem item={item} key={index} onDelete={this.onDelete}/>
        )
      }.bind(this));

      return(
        <div id="todo-list">
            <p onClick={this.clicked}>Zadania na dzisiaj...</p>
            <ul>{todos}</ul>
            <AddItem onAdd={this.onAdd} />
        </div>
    );
},
// render


  //custom Functions
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },


  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  },

  // Lifecycle Functions
  componentWillMount: function(){
    console.log('componentWillMount');
  },

  componentDidMount: function(){
    console.log('componentDidMount');
  },

  // any grabbing of external data

  componentWillUpdate: function(){
console.log('componentWillUpdate');

  }
});


var myCheese = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50'};

//put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
