export const InputTodo = (props) => {
  const {todoText, onChange, onClickAdd} = props;
    
  return (
    <div className="input-area"> 
        <input placeholder="Todoを入力" value={todoText} onChange={onChange}></input>
        <button onClick={onClickAdd}>追加</button>
    </div>
  );
}