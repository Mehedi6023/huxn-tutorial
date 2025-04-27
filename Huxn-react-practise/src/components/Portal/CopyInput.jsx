import React, { useState } from "react";
import Popup from "./Popup";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");
  const [pasted, setPasted] = useState(false);
  const handleCopy = () => {
    if (inputValue) {
      navigator.clipboard.writeText(inputValue);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } else return;
  };
  const handlePaste = async () => {
    try {
      const pastAbleText = await navigator.clipboard.readText();
      if (pastAbleText) {
        setText(pastAbleText);
        setPasted(true);
        setTimeout(() => {
          setPasted(false);
        }, 2000);
      } else return;
    } catch (error) {
      console.log("failed to read clipboard", error);
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="write to copy"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleCopy}>{copied ? "Copied" : "Copy"}</button>
        <Popup copied={copied} pasted={pasted} />
        {copied && <p>text copied successfully</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Paste here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handlePaste}>{pasted ? "Pasted" : "Paste"}</button>
        {pasted && <p>text pasted successfully</p>}
      </div>
    </div>
  );
};

export default CopyInput;
