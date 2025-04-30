import { useRef } from "react"

const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleFocus = () => {
        inputRef.current?.focus()
    }
  return (
    <div>
        <input type="text" ref={inputRef} placeholder="click to focus" />
        <button onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default FocusInput