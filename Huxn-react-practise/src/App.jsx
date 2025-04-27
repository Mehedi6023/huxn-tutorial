import Com1 from "./components/ComOne";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Profile from "./components/Profile";
import Shopping from "./components/Shopping";
import CopyInput from "./components/Portal/CopyInput";
import UseEffect from "./components/useEffect/UseEffect";
import FetchData from "./components/useEffect/FetchData";
import { createContext } from "react";
import ComA from "./components/UseContext/ComA";
import { UserProvider } from "./components/UseContext/Practise/UserContext";
import UserProfile from "./components/UseContext/Practise/UserProfile";
import UpdateUser from "./components/UseContext/Practise/UpdateUser";
import UseReducer from "./components/UseReducer/UseReducer";
import Counter2 from "./components/UseReducer/Practise/Counter2";
import ToggleBackground from "./components/Projects/ToggleBackground";
import Accordion from "./components/Projects/Accordion";





export const nameContext = createContext();
export const ageContext = createContext();

function App() {
  const name = "Ovi";
  const age = 14;
  return (
    <div>
      {/* <Com1 />
      <Counter />
      <Todos />
      <Profile />
      <Shopping />
      <h1>React Portal</h1> */}
      {/* <CopyInput />
      <UseEffect />
      <FetchData /> */}
      <nameContext.Provider value={name}>
        <ageContext.Provider value={age}>
          <ComA />
        </ageContext.Provider>
      </nameContext.Provider>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
     <UseReducer />
     {/* <Counter2 />
     <ToggleBackground /> */}
     <Accordion />
    </div>
  );
}
export default App;
