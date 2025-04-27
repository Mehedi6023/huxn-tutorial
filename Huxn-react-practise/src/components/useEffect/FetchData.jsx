import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersObj = await response.json();
      setData(usersObj);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetch data</h1>
      <h2>Users: {data.length > 0 ? `${data.length}` : `data loading ...`}</h2>
    </div>
  );
};

export default FetchData;
