export const InCompleteTodo = (props) => {
    const { incompleteTodos, onClickCompleteTodo, onClickDeleteTodo } = props;

    return (
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
    )
}