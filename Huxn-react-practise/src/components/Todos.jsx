// import React, { useState } from "react";

// const Todos = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const handleChange = (e) => {
//     setInputValue(e.target.value)
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if(inputValue.trim()){
//       setTodos([...todos, inputValue])
//       setInputValue('')
//     }
//   }
//   return (
//     <div>
//       <h1>To do list</h1>
//       <form onSubmit={handleSubmit}>
//         <input onChange={handleChange} type="text" value={inputValue} placeholder="Add to do" />
//         <button type="submit">Add todo</button>
//       </form>

//     <ul>
//         {todos.map((todo, index) => (
//             <li key={index}>{todo}</li>
//         ))}
//     </ul>

//     </div>
//   );
// };

// export default Todos;

import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div>
      <h1>Todo app: </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter to do"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Add to do</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
