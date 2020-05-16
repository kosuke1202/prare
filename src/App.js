import React from 'react';
import './App.css';

function TodoItem(props){
  return(
  <li>
    <input type = "checkbox"
      checked = {props.todo.isDone}
      onChange = {()=>{props.checkTodo(props.todo)}}
   />
    {props.todo.title}
    <span onClick = {()=>{props.deleteTodo(props.todo)}}> [×]</span>
  </li>
  )
}

function Todolist(props){
  const todos = props.todos.map(todo => {
    return(
      <TodoItem
       key = {todo.id}
       todo = {todo}
       checkTodo = {props.checkTodo}
       deleteTodo = {props.deleteTodo}
      />
    )
  })

  return(
    <ul>
      {todos}
    </ul>
  );
}


const todos = [
  { id:1, title: "title A", isDone: true },
  { id:2, title: "title B", isDone: true },
  { id:3, title: "title C", isDone: false }
]


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos
    }
    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  checkTodo(todo){
    const todos = this.state.todos.map(todo =>{
      return{ id: todo.id, title: todo.title, isDone: todo.isDone}
    })

    const pos = this.state.todos.map(todo =>{
      return todo.id;
    }).indexOf(todo.id)

    todos[pos].isDone = !todos[pos].isDone;
    this.setState({
      todos: todos
    })
  }

  deleteTodo(todo){
    if (!window.confirm("削除しますか？")){
      return;
    }

    const todos = this.state.todos.map(todo =>{
      return{ id: todo.id, title: todo.title, isDone: todo.isDone}
    })

   const pos = this.state.todos.indexOf(todo)
   todos.splice(pos, 1)
   this.setState({
     todos: todos
   })


  }


  render(){
    return (
      <div className="container">
        <p>Tdo list </p>
        <ul>
         <Todolist
          todos = {this.state.todos}
          checkTodo = {this.checkTodo}
          deleteTodo = {this.deleteTodo}
         />
        </ul>
      </div>
    );
  }
}

export default App;


// 練習です