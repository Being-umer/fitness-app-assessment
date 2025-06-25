import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition"
    {...props}
  >
    {children}
  </button>
);

export default Button; 