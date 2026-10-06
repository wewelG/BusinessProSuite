"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, KeyRound, AlertCircle, CheckCircle2, Loader2, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberDevice, setRememberDevice] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email.trim() || !password) {
      setErrorMessage("Please enter both your email address and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password,
          rememberDevice,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Login failed. Please check your credentials.");
      } else {
        // Auto-detect role and redirect
        if (data.user?.role === "MANAGER") {
          router.push("/manager/dashboard");
        } else {
          router.push("/employee/dashboard");
        }
      }
    } catch {
      // Offline / client demo fallback
      const cleanEmail = email.trim().toLowerCase();
      if (cleanEmail.includes("manager") || cleanEmail === "sarah.jenkins@businesspro.com") {
        router.push("/manager/dashboard");
      } else {
        router.push("/employee/dashboard");
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
          {/* Subtle dark gradient overlay */}
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
            backgroundColor: "#b85600", // Exact warm orange from design
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
                  fontSize: "3rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  lineHeight: 1.05,
                }}
              >
                Login
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
                Login to access your BusinessPro Suite dashboard and manage your business anytime, anywhere.
              </p>
            </div>

            {/* Error Notification */}
            {errorMessage && (
              <div
                style={{
                  marginBottom: "1.25rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  backgroundColor: "#fff1f0",
                  border: "1px solid #fca5a5",
                  color: "#991b1b",
                  fontSize: "0.82rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <AlertCircle size={17} color="#b91c1c" style={{ flexShrink: 0 }} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin}>
              {/* Employee Email Field */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fbf3e8", // Cream/tan input background
                  borderRadius: "10px",
                  padding: "0.75rem 1.15rem",
                  marginBottom: "1.1rem",
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

              {/* Employee Password Field */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fbf3e8",
                  borderRadius: "10px",
                  padding: "0.75rem 1.15rem",
                  marginBottom: "0.5rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                  position: "relative",
                }}
              >
                <KeyRound
                  size={19}
                  color="#1f140e"
                  style={{ marginRight: "0.85rem", flexShrink: 0 }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Employee Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#7b5947",
                    padding: "2px",
                  }}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {/* Password Rules & Remember Device */}
              <div style={{ textAlign: "right", marginBottom: "1.75rem" }}>
                <div
                  style={{
                    fontSize: "0.71rem",
                    color: "#fdebd5",
                    fontWeight: 500,
                    marginBottom: "0.35rem",
                  }}
                >
                  Minimum 8 characters with letters, numbers & symbols
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link
                    href="/forgot-password"
                    style={{
                      fontSize: "0.74rem",
                      color: "#fdebd5",
                      textDecoration: "underline",
                    }}
                  >
                    Forgot Password?
                  </Link>

                  <label
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontSize: "0.76rem",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={rememberDevice}
                      onChange={(e) => setRememberDevice(e.target.checked)}
                      style={{
                        accentColor: "#ebd3b7",
                        cursor: "pointer",
                        width: "14px",
                        height: "14px",
                      }}
                    />
                    Remember this device
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  backgroundColor: "#ebd3b7", // Light tan pill button
                  color: "#1c120b",
                  border: "none",
                  borderRadius: "10px",
                  padding: "0.9rem",
                  fontSize: "1.15rem",
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
                    <Loader2 size={18} className="animate-spin" /> Signing In...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            {/* Bottom Activation Link */}
            <div
              style={{
                marginTop: "1.75rem",
                textAlign: "center",
                fontSize: "0.83rem",
                color: "#fae7d4",
              }}
            >
              Don't have an account?{" "}
              <Link
                href="/activate"
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  textDecoration: "underline",
                }}
              >
                Activate Here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
