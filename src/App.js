import React,{Component} from 'react';
import './App.css';
import Todos from '../src/components/Todos';
import AddTodo from '../src/components/AddTodo';
import Navbar from './components/Navbar';



class App extends Component
{

  state={
       Todos:[
         { id:1,content:'learn'},
         {id:2, content:'code'},
         {id:3,content:'practice'}
       ]
  }

  deleteTodo=(id)=>{
    console.log(id);

    const updateTodos=this.state.Todos.filter(todos=>{
      return todos.id!== id;
    });

    this.setState({
      Todos:updateTodos
    })
  }

  addTodo =(todo)=>{

    console.log('addTodo');
    todo.id = Math.random();
    let todos=[...this.state.Todos,todo];

    this.setState({
      Todos:todos
    })
  }
  render()
  {
    return (
      <div className="todo-app container">
      <Navbar></Navbar>
         <h1 className="center blue-text">Todo's App</h1>
         <Todos todos={this.state.Todos} deleteTodo={this.deleteTodo}></Todos>
         <AddTodo addTodo ={this.addTodo}></AddTodo>
         
      </div>
    );

  }

 
}

export default App;
