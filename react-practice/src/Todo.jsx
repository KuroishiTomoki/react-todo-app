import { useState } from 'react'
import './App.css'
import { InputTodo } from './components/inputTodo';
import { InCompleteTodo } from './components/inCompleteTodo';
import { CompleteTodo } from './components/completeTodo';

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

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeSetTodoText} 
        onClickAdd={onClickAddTodo}
      />
     
     <InCompleteTodo 
      incompleteTodos={incompleteTodos}
      onClickCompleteTodo={onClickCompleteTodo}
      onClickDeleteTodo={onClickDeleteTodo}
     />

      <CompleteTodo
        completeTodos={completeTodos}
        onClickBackTodo={onClickBackTodo}
      />
    </>
  )
}

