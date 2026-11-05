export const InputTodo = (props) => {
  const {todoText, onChange, onClickAdd} = props;
  
  const style = {
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
  }

  return (
    <div style={style}> 
        <input placeholder="Todoを入力" value={todoText} onChange={onChange}></input>
        <button onClick={onClickAdd}>追加</button>
    </div>
  );
}