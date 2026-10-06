import React from "react";

export type BadgeVariant =
  | "present"
  | "late"
  | "absent"
  | "leave"
  | "pending"
  | "approved"
  | "rejected"
  | "todo"
  | "in-progress"
  | "in-review"
  | "completed"
  | "high"
  | "medium"
  | "low";

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({ variant, children, icon, className = "" }: BadgeProps) {
  // Normalize custom variants to CSS class mappings
  let badgeClass = `badge badge-${variant}`;
  let customStyle: React.CSSProperties = {};

  if (variant === "high") {
    badgeClass = "badge badge-absent";
  } else if (variant === "medium") {
    badgeClass = "badge badge-late";
  } else if (variant === "low") {
    badgeClass = "badge badge-present";
  } else if (variant === "in-progress" || variant === "in-review") {
    badgeClass = "badge badge-leave";
  } else if (variant === "completed") {
    badgeClass = "badge badge-approved";
  } else if (variant === "todo") {
    customStyle = {
      backgroundColor: "#f4f0eb",
      color: "#5c4033",
      borderColor: "#d7c5ae",
    };
  }

  return (
    <span className={`${badgeClass} ${className}`} style={customStyle}>
      {icon && <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>}
      {children}
    </span>
  );
}
