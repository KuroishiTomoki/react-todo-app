import { useState } from 'react'
import './App.css'

export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["todo1", "todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["todo3", "todo4"]);

  return (
    <>
      <div className="input-area"> 
        <input placeholder="Todoを入力"></input>
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p>未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo) => (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
        
      <div className="complete-area">
        <p>完了のTodo</p>
          <ul>
            {completeTodos.map((todo) => (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
              )
            )}
          </ul>
      </div>  
    </>
  )
}

