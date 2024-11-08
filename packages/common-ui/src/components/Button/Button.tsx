import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

export const Button = (props: ButtonProps) => {
  return <button style={{ background: "red" }}>{props.children}</button>;
};
