// import { useContext } from "react";
// import { UserContext } from "./UserContext";

// import React from 'react'

// const UserProfile = () => {
//     const {user} = useContext(UserContext)
//   return (
//     <div>UserProfile {user.name}</div>
//   )
// }

// export default UserProfile

import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'
const UserProfile = () => {
    const {user} = useContext(UserContext)
  return (
    <h2>UserProfile: {user.name}</h2>
  )
}

export default UserProfile