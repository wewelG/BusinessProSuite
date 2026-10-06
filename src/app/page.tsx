"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  Clock,
  CheckSquare,
  CalendarDays,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Building2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-app)" }}>
      {/* Top Banner / Navigation */}
      <nav
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "1rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <div className="brand-badge">B</div>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--brown-950)" }}>
              Business Pro Suite
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--primary-600)", fontWeight: 700, letterSpacing: "0.05em" }}>
              EMPLOYEE MANAGEMENT SYSTEM
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link href="/activate">
            <Button variant="outline" size="sm">
              Activate Account
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="primary" size="sm">
              System Login
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Presentation */}
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
          <Badge variant="medium" icon={<Sparkles size={13} />}>
            Midterm Exam System Specification • Business Pro Suite
          </Badge>
        </div>

        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "var(--brown-950)",
            marginBottom: "1.25rem",
          }}
        >
          Next-Generation HR Operations & <br />
          <span style={{ color: "var(--primary-600)" }}>Workforce Management</span>
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            maxWidth: "760px",
            margin: "0 auto 2.5rem",
            color: "var(--text-secondary)",
          }}
        >
          Streamlined attendance monitoring, task assignment with proof verification, automated
          leave approval workflows, and centralized employee directories.
        </p>

        {/* Quick Role Portal Selectors */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
            textAlign: "left",
            marginTop: "3rem",
          }}
        >
          {/* Employee Role Box */}
          <Card
            variant="white"
            style={{
              padding: "2rem",
              borderTop: "4px solid var(--primary-500)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--primary-100)",
                  color: "var(--primary-600)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Users size={24} />
              </div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "0.5rem" }}>Employee Self-Service</h2>
              <p style={{ fontSize: "0.92rem", marginBottom: "1.5rem" }}>
                Access personal dashboard, real-time check-in/out attendance logs, submit task
                deliverables with proof attachments, and submit leave requests.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  fontSize: "0.86rem",
                  color: "var(--brown-800)",
                  marginBottom: "2rem",
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Clock size={16} color="var(--primary-600)" /> Shift log & automated late calculation
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckSquare size={16} color="var(--primary-600)" /> Task status tracking & file submissions
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CalendarDays size={16} color="var(--primary-600)" /> Leave entitlement balance & history
                </li>
              </ul>
            </div>

            <Link href="/employee/dashboard">
              <Button variant="primary" style={{ width: "100%" }}>
                Enter Employee Portal <ArrowRight size={16} />
              </Button>
            </Link>
          </Card>

          {/* Manager Role Box */}
          <Card
            variant="tan"
            style={{
              padding: "2rem",
              borderTop: "4px solid var(--brown-700)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--brown-200)",
                  color: "var(--brown-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Building2 size={24} />
              </div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "0.5rem" }}>Manager Administration</h2>
              <p style={{ fontSize: "0.92rem", marginBottom: "1.5rem" }}>
                Oversee department workforce, monitor live attendance rates, assign priority tasks,
                review task deliverables, and approve/reject leave applications.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  fontSize: "0.86rem",
                  color: "var(--brown-800)",
                  marginBottom: "2rem",
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Users size={16} color="var(--brown-800)" /> Consolidated employee roster & attendance log
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <ShieldCheck size={16} color="var(--brown-800)" /> Leave request approval & audit trail
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FileText size={16} color="var(--brown-800)" /> Company-wide broadcast announcements
                </li>
              </ul>
            </div>

            <Link href="/manager/dashboard">
              <Button variant="secondary" style={{ width: "100%", backgroundColor: "var(--brown-900)", color: "#fff" }}>
                Enter Manager Portal <ArrowRight size={16} />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Phase 0 System Verification Matrix */}
        <div style={{ marginTop: "4rem", textAlign: "left" }}>
          <Card variant="white">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.1rem" }}>Phase 0 Foundation Checklist & Architecture</h3>
              <Badge variant="present">Phase 0 Complete</Badge>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                fontSize: "0.85rem",
              }}
            >
              <div style={{ padding: "0.75rem", backgroundColor: "var(--bg-card-subtle)", borderRadius: "var(--radius-md)" }}>
                <strong>Data Layer:</strong>
                <p style={{ marginTop: "4px" }}>Prisma relational schema + Supabase configuration ready</p>
              </div>
              <div style={{ padding: "0.75rem", backgroundColor: "var(--bg-card-subtle)", borderRadius: "var(--radius-md)" }}>
                <strong>Visual Tokens:</strong>
                <p style={{ marginTop: "4px" }}>Warm terracotta, rich brown, and tan card styling applied</p>
              </div>
              <div style={{ padding: "0.75rem", backgroundColor: "var(--bg-card-subtle)", borderRadius: "var(--radius-md)" }}>
                <strong>Component Kit:</strong>
                <p style={{ marginTop: "4px" }}>Buttons, Badges, Modals, Cards, Tabs, FormFields, Toasts</p>
              </div>
              <div style={{ padding: "0.75rem", backgroundColor: "var(--bg-card-subtle)", borderRadius: "var(--radius-md)" }}>
                <strong>App Shell:</strong>
                <p style={{ marginTop: "4px" }}>Sidebar, top bar, responsive drawer & role-based routing</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
