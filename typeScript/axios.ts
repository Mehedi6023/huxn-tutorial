import axios, { AxiosResponse } from "axios";
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const res: AxiosResponse<Todo[]> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(res.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error", error);
      if (error.message) {
        console.log("status: ", error.response?.status);
        console.log("data :", error.response?.data);
      }
    } else {
      console.log("error", error.message);
    }
  }
};

fetchData();
