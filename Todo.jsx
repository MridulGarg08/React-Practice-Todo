import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleRemove = (index) => {
    setTodos(todos.filter((element, i) => i !== index));
  };
  const handleUp = (index) => {
    if (index > 0) {
      const copytodos = [...todos];
      [copytodos[index], copytodos[index - 1]] = [
        copytodos[index - 1],
        copytodos[index],
      ];
      setTodos(copytodos);
    }
  };
  const handleDown = (index) => {
    if (index < todos.length - 1) {
      const copytodos = [...todos];
      [copytodos[index], copytodos[index + 1]] = [
        copytodos[index + 1],
        copytodos[index],
      ];
      setTodos(copytodos);
    }
  };

  return (
    <>
      <div className="p-2">
        {todos.map((tod, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-center p-2"
          >
            <h2>{tod.title}</h2>
            <p>{tod.desc}</p>
            <button
              className="bg-gray-500 p-2 rounded-md"
              onClick={(e) => handleRemove(index)}
            >
              Remove Todo
            </button>
            <button onClick={() => handleUp(index)}>☝</button>
            <button onClick={() => handleDown(index)}>👇</button>
          </div>
        ))}
        <div className="flex gap-2 items-center justify-center">
          <input
            type="text"
            placeholder="Enter Todo Title"
            value={todo.title}
            onChange={(e) => {
              setTodo({ ...todo, title: e.target.value });
            }}
          ></input>
          <input
            type="text"
            value={todo.desc}
            placeholder="Enter Todo Description"
            onChange={(e) => {
              setTodo({ ...todo, desc: e.target.value });
            }}
          ></input>
          <button
            className="bg-blue-500 p-1 rounded-lg"
            onClick={() => {
              setTodos([...todos, todo]);
              setTodo({ title: "", desc: "" });
            }}
          >
            Submit Todo
          </button>
        </div>
      </div>
    </>
  );
};
export default Todo;
