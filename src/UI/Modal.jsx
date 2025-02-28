import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, ref }) => {
  return createPortal(
    <dialog ref={ref}>
      {children}
      <form method="dialog"><button>Close</button></form>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
