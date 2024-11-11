export type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <button style={{ background: "red" }}>{children}</button>;
};

export default Button;
