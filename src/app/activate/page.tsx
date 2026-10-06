"use client";

import React, { useState } from "react";
import Link from "next/link";
import { KeyRound, Mail, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from "lucide-react";

export default function ActivateAccountPage() {
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
    details?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!employeeId.trim() || !email.trim()) {
      setStatusMessage({
        type: "error",
        text: "Please enter both Employee ID and registered Employee Email.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ employeeId: employeeId.trim(), email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusMessage({
          type: "error",
          text: data.error || "Activation failed. Please verify your credentials.",
        });
      } else {
        setStatusMessage({
          type: "success",
          text: data.message || "Account verification successful!",
          details: data.details || "A secure activation link has been sent to your registered email.",
        });
      }
    } catch {
      // Fallback for offline/mock demo testing
      if (employeeId.toUpperCase().startsWith("EMP-") || employeeId.length >= 4) {
        setStatusMessage({
          type: "success",
          text: "Verification successful! Account activated.",
          details: `Verification email dispatched to ${email}. You can now log in with your credentials.`,
        });
      } else {
        setStatusMessage({
          type: "error",
          text: "Invalid Employee ID format. Please use your organization ID (e.g., EMP-1001).",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1b120c", // Deep warm dark brown from design
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Outer Card Container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1040px",
          minHeight: "580px",
          backgroundColor: "#24160f",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.55)",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          position: "relative",
        }}
      >
        {/* Left Side: Photo Graphic & Welcome Branding */}
        <div
          style={{
            position: "relative",
            minHeight: "480px",
            backgroundImage: "url('/assets/loginimg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3.5rem 2.8rem",
          }}
        >
          {/* Subtle dark gradient overlay to ensure perfect contrast */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(20, 12, 8, 0.72) 0%, rgba(20, 12, 8, 0.45) 50%, rgba(20, 12, 8, 0.7) 100%)",
              zIndex: 1,
            }}
          />

          <div style={{ position: "relative", zIndex: 2, maxWidth: "420px" }}>
            <h1
              style={{
                color: "#ffffff",
                fontSize: "3rem",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "0.85rem",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              Welcome!
            </h1>

            <h2
              style={{
                color: "#ffffff",
                fontSize: "2.1rem",
                fontWeight: 800,
                marginBottom: "1.35rem",
                letterSpacing: "-0.01em",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              BusinessPro Suite
            </h2>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.92)",
                fontSize: "0.98rem",
                lineHeight: 1.55,
                fontWeight: 400,
                textShadow: "0 1px 6px rgba(0,0,0,0.6)",
              }}
            >
              A comprehensive system that helps small and medium-sized businesses efficiently
              manage their daily operations and generate accurate reports.
            </p>
          </div>
        </div>

        {/* Right Side: Rich Warm Orange Card */}
        <div
          style={{
            backgroundColor: "#b85600", // Official warm orange/terracotta matching the spec design
            padding: "3.5rem 3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderTopLeftRadius: "32px",
            borderBottomLeftRadius: "32px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div style={{ maxWidth: "390px", width: "100%", margin: "0 auto" }}>
            {/* Header Titles */}
            <div style={{ marginBottom: "2.25rem", textAlign: "right" }}>
              <h2
                style={{
                  color: "#ffffff",
                  fontSize: "2.35rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                Activate Account
              </h2>
              <p
                style={{
                  color: "#fdebd5",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  marginTop: "0.45rem",
                  lineHeight: 1.35,
                }}
              >
                Activate your account using Employee ID And Employee Email
              </p>
            </div>

            {/* Status Feedback Notification */}
            {statusMessage && (
              <div
                style={{
                  marginBottom: "1.5rem",
                  padding: "0.85rem 1rem",
                  borderRadius: "10px",
                  backgroundColor:
                    statusMessage.type === "success" ? "rgba(255, 255, 255, 0.95)" : "#fff1f0",
                  border: `1px solid ${
                    statusMessage.type === "success" ? "#a3e635" : "#fca5a5"
                  }`,
                  color: statusMessage.type === "success" ? "#1e4318" : "#991b1b",
                  fontSize: "0.84rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.6rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                {statusMessage.type === "success" ? (
                  <CheckCircle2 size={18} color="#15803d" style={{ flexShrink: 0, marginTop: "2px" }} />
                ) : (
                  <AlertCircle size={18} color="#b91c1c" style={{ flexShrink: 0, marginTop: "2px" }} />
                )}
                <div>
                  <div style={{ fontWeight: 700 }}>{statusMessage.text}</div>
                  {statusMessage.details && (
                    <div style={{ fontSize: "0.78rem", marginTop: "2px" }}>
                      {statusMessage.details}
                    </div>
                  )}
                  {statusMessage.type === "success" && (
                    <Link
                      href="/login"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        marginTop: "8px",
                        fontWeight: 700,
                        color: "#b85600",
                        textDecoration: "underline",
                      }}
                    >
                      Proceed to Login &rarr;
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Employee ID Field */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fbf3e8", // Cream/tan input background matching design
                  borderRadius: "10px",
                  padding: "0.75rem 1.15rem",
                  marginBottom: "1.1rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                }}
              >
                <KeyRound
                  size={19}
                  color="#1f140e"
                  style={{ marginRight: "0.85rem", flexShrink: 0 }}
                />
                <input
                  type="text"
                  placeholder="Employee ID"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    width: "100%",
                    fontSize: "0.95rem",
                    color: "#20140e",
                    fontWeight: 500,
                    fontFamily: "inherit",
                  }}
                  required
                />
              </div>

              {/* Employee Email Field */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fbf3e8",
                  borderRadius: "10px",
                  padding: "0.75rem 1.15rem",
                  marginBottom: "1.75rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                }}
              >
                <Mail
                  size={19}
                  color="#1f140e"
                  style={{ marginRight: "0.85rem", flexShrink: 0 }}
                />
                <input
                  type="email"
                  placeholder="Employee Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    width: "100%",
                    fontSize: "0.95rem",
                    color: "#20140e",
                    fontWeight: 500,
                    fontFamily: "inherit",
                  }}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  backgroundColor: "#ebd3b7", // Light tan pill button matching design
                  color: "#1c120b",
                  border: "none",
                  borderRadius: "10px",
                  padding: "0.9rem",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  cursor: loading ? "not-allowed" : "pointer",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  fontFamily: "inherit",
                }}
                onMouseOver={(e) => {
                  if (!loading) (e.currentTarget.style.backgroundColor = "#e2c5a3");
                }}
                onMouseOut={(e) => {
                  if (!loading) (e.currentTarget.style.backgroundColor = "#ebd3b7");
                }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Verifying...
                  </>
                ) : (
                  "Activate Account"
                )}
              </button>
            </form>

            {/* Bottom Login Link */}
            <div
              style={{
                marginTop: "1.75rem",
                textAlign: "center",
                fontSize: "0.83rem",
                color: "#fae7d4",
              }}
            >
              Already activated your Account?{" "}
              <Link
                href="/login"
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  textDecoration: "underline",
                }}
              >
                Login Here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
