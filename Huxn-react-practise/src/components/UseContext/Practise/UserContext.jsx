// import { Children, createContext, useState } from "react";
// import UserProfile from "./UserProfile";

// const UserContext = createContext();

// const UserProvider = ({children}) => {
//   const [user, setUser] = useState({ name: "John Doe" });
//   const updateUser = (newName) => {
//     setUser({ name: newName });
//   };
//   return (
//     <UserContext.Provider value={{ user, updateUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
// export {UserContext, UserProvider}

import { createContext, useState } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({name: "ovi"})
    const updateUser = (newName) => {
        setUser({name: newName})
    }
    return(
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}