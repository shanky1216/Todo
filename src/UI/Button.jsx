import React from "react";

const Button = ({ children, dark, ...props }) => {
  const classes = "px-4 py-1 rounded-lg  font-bold text-lg ";
  const lightBtn = "bg-stone-50  text-stone-900 hover:text-stone-700";
  const darkBtn =
    "bg-stone-600 text-stone-400 hover:bg-stone-700 hover:text-stone-200";

  return (
    <button {...props} className={`${classes} ${dark ? darkBtn : lightBtn}`}>
      {children}
    </button>
  );
};

export default Button;
