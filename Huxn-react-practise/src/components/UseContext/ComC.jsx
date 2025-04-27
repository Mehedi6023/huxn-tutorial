import React from 'react'
import { useContext } from 'react'
import { nameContext } from '../../App'
import { ageContext } from '../../App'
const ComC = () => {
const name = useContext(nameContext)
const age = useContext(ageContext)
  return (
    <div>
      My name is {name} and i am {age} years old
    </div>
  )
}

export default ComC



// without useContext


// const ComC = () => {
//     return (
//       <nameContext.Consumer>
//         {name => {
//           return(
//             <ageContext.Consumer>
//               {age => {
//                 return (
//                   <div>
//                     My name is {name} and i am {age} years old.
//                   </div>
//                 )
//               }}
//             </ageContext.Consumer>
//           )
//         }}
//       </nameContext.Consumer>
//     )
//   }
  
//   export default ComC