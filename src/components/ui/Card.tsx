import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "tan";
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export function Card({
  variant = "white",
  title,
  action,
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div className={`card ${variant === "tan" ? "card-tan" : ""} ${className}`} {...props}>
      {(title || action) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
