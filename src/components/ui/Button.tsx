import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { padding: "0.45rem 0.85rem", fontSize: "0.8rem" },
    md: { padding: "0.65rem 1.25rem", fontSize: "0.88rem" },
    lg: { padding: "0.85rem 1.65rem", fontSize: "1rem" },
  };

  return (
    <button
      className={`btn btn-${variant} ${className}`}
      style={sizeStyles[size]}
      {...props}
    >
      {icon && <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>}
      {children}
    </button>
  );
}
