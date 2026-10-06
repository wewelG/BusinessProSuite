import React from "react";

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  id?: string;
}

export function FormField({
  label,
  error,
  required,
  hint,
  children,
  id,
}: FormFieldProps) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span style={{ color: "var(--primary-600)", marginLeft: "4px" }}>*</span>}
      </label>
      {children}
      {hint && !error && (
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px", display: "block" }}>
          {hint}
        </span>
      )}
      {error && (
        <span style={{ fontSize: "0.75rem", color: "#bf2626", marginTop: "4px", display: "block", fontWeight: 600 }}>
          {error}
        </span>
      )}
    </div>
  );
}
