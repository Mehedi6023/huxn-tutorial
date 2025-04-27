import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ComOne = () => {

  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name')
    return savedName ? JSON.parse(savedName) : "User"
  })

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name)),
    [name]
  })

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>Your name is : {name}</h1>
      <input type="text" placeholder='Enter Your name' onChange={handleChange} />
    </div>
  )
}

export default ComOne
