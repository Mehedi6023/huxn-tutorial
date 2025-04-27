import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(() => count + 1)

    }
    useEffect(() => {
        if( count > 0 ) {
            document.title = `Count is : ${count}`
        }
    }, [count])
    return (
        <div>
            <h1>UseEffect:</h1>
            <p>See the page title</p>
            <h3>count : {count}</h3>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};

export default UseEffect;