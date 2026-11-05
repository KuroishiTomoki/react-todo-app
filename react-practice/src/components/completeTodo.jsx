export const CompleteTodo = (props) =>{
    const { completeTodos, onClickBackTodo } = props;

    return (
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
            ))}
        </ul>
    </div>  
    )
}