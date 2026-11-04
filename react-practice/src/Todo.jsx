import { useState } from 'react'
import './App.css'
import { InputTodo } from './components/inputTodo';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["todo1", "todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["todo3", "todo4"]);

  const onChangeSetTodoText = (event) => {
    setTodoText(event.target.value);
  }

  const onClickAddTodo = () =>{
    if(todoText === "")return;
    
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickCompleteTodo = (index) =>{
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickDeleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickBackTodo = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(completeTodos);
    setIncompleteTodos(incompleteTodos);
  }

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeSetTodoText} 
        onClickAdd={onClickAddTodo}
      />
      <div className="incomplete-area">
        <p>未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickCompleteTodo(index)}>完了</button>
                  <button onClick={() => onClickDeleteTodo(index)}>削除</button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
        
      <div className="complete-area">
        <p>完了のTodo</p>
          <ul>
            {completeTodos.map((todo, index) => (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBackTodo(index)}>戻す</button>
                </div>
              </li>
              )
            )}
          </ul>
      </div>  
    </>
  )
}

