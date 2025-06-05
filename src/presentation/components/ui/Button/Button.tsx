import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outline";
}

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "default",
  className = "",
  active = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant} ${active ? "active" : ""} ${className}`}
    >
      {children}
    </button>
  );
};
