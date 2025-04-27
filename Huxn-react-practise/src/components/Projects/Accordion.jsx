import React, { useState } from 'react'
import accordionData from './accordionData'
const Accordion = () => {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }
  return (
    <div>
        {
            accordionData.map(({title, content}) => (
                <section  onClick={handleClick} style={{backgroundColor: 'teal', padding: '1rem', margin: '1rem 0rem', borderRadius: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                    <h1>{title}</h1>
                    <p>{isActive ? "-":"+"}</p>
                    </div>
                    <div>
                    {
                        isActive ? (<p>{content}</p>):''
                    }
                    </div>
                </section>
            ))
        }
    </div>
  )
}

export default Accordion