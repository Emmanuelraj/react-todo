import React from 'react';


const Todos =({todos,deleteTodo})=>{
   //if todos.length is zero show msg else show list of todos
   const todoList = todos.length?(
       todos.map(todo =>
         {
           return(
              <div className="collection-item" key={todo.id}>
              <span onClick={()=>deleteTodo(todo.id)}>{todo.content}</span>
              </div>
           )
         })):(
            <p className="center">No Todo List yay! </p>
         )
      return (
         <div className="todos collection">
              {todoList}
         </div>
   )
}


export default Todos;