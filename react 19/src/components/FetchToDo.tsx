// import { useEffect, useState } from "react";
// interface Todo {
//   title: string;
// }

import { use } from "react";

// const FetchToDo = () => {
//   const [toDo, setToDo] = useState<Todo | null>(null);
//   const [loading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data: Todo = await res.json();
//         setToDo(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//   if (loading) return <h1>Loading Data ...</h1>;
//   if (!toDo) return <h1>No data available</h1>;

//   return <div>{toDo.title}</div>;
// };

// export default FetchToDo;

// USING use
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};
const promise = fetchData()

const FetchToDo = () => {
  const data = use(promise)
  return <div>Title : {data.title}</div>;
};

export default FetchToDo;
