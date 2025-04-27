import React, { useState } from 'react'

const ToggleBackground = () => {
    const [backgroundColor, setBackGroundColor] = useState('teal')
    const [textColor, setTextColor] = useState('yellow')
    const [buttonBg, setButtonBg] = useState('red')
    const handleToggle = () => {
        setBackGroundColor(backgroundColor === 'teal' ? 'red' : 'teal')
        setTextColor( textColor === 'yellow' ? 'white' : 'yellow' )
        setButtonBg( buttonBg === 'red' ? 'teal' : 'red')
    }
  return (
    <div>
        <div style={{backgroundColor, color: textColor, padding: '2rem', textAlign: 'center'}}>
            <h1>Toggle background</h1>
            <button onClick={handleToggle} style={{backgroundColor: buttonBg, padding: '1rem', border: `2px solid ${textColor}`}}>Toggle color</button>
        </div>
    </div>
  )
}

export default ToggleBackground