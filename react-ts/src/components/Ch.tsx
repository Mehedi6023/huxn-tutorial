import { ReactNode } from 'react'
interface ChInfo {
    children: ReactNode
}
const Ch = ({children}: ChInfo) => {
  return (
    <div>
        <h2>I am Ch parent</h2>
        {children}
    </div>
    
  )
}

export default Ch