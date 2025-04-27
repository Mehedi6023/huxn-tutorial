import React from "react";
import { createPortal } from "react-dom";
const Popup = ({ copied, pasted }) => {
  return createPortal(
    <div>
      {copied && (
        <div
          style={{
            position: "absolute",
            top: "3rem",
            right: "3rem",
            backgroundColor: "teal",
            padding: "1rem",
            borderRadius: "1rem",
          }}
        >
          Copied to clipboard
        </div>
      )}

      {pasted && (
        <div
          style={{
            position: "absolute",
            top: "3rem",
            right: "3rem",
            backgroundColor: "teal",
            padding: "1rem",
            borderRadius: "1rem",
          }}
        >
          Text pasted successfully
        </div>
      )}
    </div>,
    document.getElementById("portal-root")
  );
};

export default Popup;
