"use client";

import React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Users, Clock, AlertTriangle, ShieldCheck, Plus, CheckCircle, ArrowRight } from "lucide-react";
import { EMPLOYEES, TASKS, LEAVE_REQUESTS, DEPARTMENTS } from "@/lib/mockData";
import Link from "next/link";

export default function ManagerDashboard() {
  const currentManager = EMPLOYEES[1]; // Sarah Jenkins
  const itEmployees = EMPLOYEES.filter((e) => e.department === "IT Department");
  const pendingLeaves = LEAVE_REQUESTS.filter((l) => l.status === "Pending");
  const activeTasks = TASKS.filter((t) => t.status !== "Completed");

  return (
    <AppShell
      role="MANAGER"
      userName={currentManager.name}
      userEmail={currentManager.email}
      departmentName="IT Department"
    >
      <div className="page-header">
        <div>
          <h1 className="page-title">Manager Administration Dashboard</h1>
          <p className="page-description">
            Overseeing IT Department • {itEmployees.length} Team Members
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <Link href="/manager/tasks">
            <Button variant="primary" icon={<Plus size={16} />}>
              Create & Assign Task
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Header Overview */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.25rem",
          marginBottom: "2rem",
        }}
      >
        <Card variant="white">
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Total Staff</div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--brown-950)", marginTop: "4px" }}>
            {itEmployees.length}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--status-present-text)", marginTop: "4px" }}>
            24 Total Org-Wide
          </div>
        </Card>

        <Card variant="white">
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Present Today</div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--status-present-text)", marginTop: "4px" }}>
            {itEmployees.filter((e) => e.status === "Present").length}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
            Punctual Rate: 79%
          </div>
        </Card>

        <Card variant="white">
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Late / Exceptions</div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--status-late-text)", marginTop: "4px" }}>
            {itEmployees.filter((e) => e.status === "Late").length}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--status-late-text)", marginTop: "4px" }}>
            Grace Window Exceeded
          </div>
        </Card>

        <Card variant="white">
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Pending Leave Requests</div>
          <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary-600)", marginTop: "4px" }}>
            {pendingLeaves.length}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
            Requires Your Review
          </div>
        </Card>
      </div>

      {/* Main Grid: Live Team Attendance & Exceptions */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
        {/* Live Attendance Table */}
        <Card
          title="Live Team Attendance Record"
          action={
            <Link href="/manager/employees">
              <span style={{ fontSize: "0.8rem", color: "var(--primary-600)", fontWeight: 700 }}>
                View Directory &rarr;
              </span>
            </Link>
          }
        >
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Position</th>
                  <th>Time In</th>
                  <th>Hours</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {itEmployees.slice(0, 5).map((emp) => (
                  <tr key={emp.id}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <div className="avatar" style={{ width: "30px", height: "30px", fontSize: "0.75rem" }}>
                          {emp.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: "0.86rem", color: "var(--brown-950)" }}>
                            {emp.name}
                          </div>
                          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{emp.employeeId}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ fontSize: "0.82rem" }}>{emp.position}</td>
                    <td style={{ fontSize: "0.82rem", fontWeight: 600 }}>{emp.checkIn}</td>
                    <td style={{ fontSize: "0.82rem" }}>{emp.workHours}</td>
                    <td>
                      <Badge variant={emp.status.toLowerCase().replace(" ", "-") as any}>
                        {emp.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Attendance Alerts & Exceptions */}
        <Card
          title="Attendance Alerts"
          action={<AlertTriangle size={16} color="var(--primary-600)" />}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <div
              style={{
                padding: "0.85rem",
                backgroundColor: "var(--status-late-bg)",
                border: "1px solid var(--status-late-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--status-late-text)" }}>
                  Late Check-in
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Today</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--brown-900)", marginTop: "4px" }}>
                Maya Lin checked in at 08:24 AM (+14 min over grace period).
              </p>
            </div>

            <div
              style={{
                padding: "0.85rem",
                backgroundColor: "var(--status-absent-bg)",
                border: "1px solid var(--status-absent-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--status-absent-text)" }}>
                  Unexcused Absence
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Today</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--brown-900)", marginTop: "4px" }}>
                Brandon Cole (HR Dept) — No check-in log and no leave request filed.
              </p>
            </div>

            <div
              style={{
                padding: "0.85rem",
                backgroundColor: "var(--status-leave-bg)",
                border: "1px solid var(--status-leave-border)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--status-leave-text)" }}>
                  Scheduled Leave
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>Oct 6 - Oct 7</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--brown-900)", marginTop: "4px" }}>
                Marcus Vance is currently on approved Personal Leave.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Pending Leave Approvals Section */}
      <Card
        title="Pending Leave Applications"
        action={
          <Link href="/manager/leave">
            <span style={{ fontSize: "0.8rem", color: "var(--primary-600)", fontWeight: 700 }}>
              All Requests &rarr;
            </span>
          </Link>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {pendingLeaves.map((req) => (
            <div
              key={req.id}
              style={{
                padding: "1rem",
                backgroundColor: "var(--bg-card-subtle)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--brown-950)" }}>
                    {req.employeeName}
                  </span>
                  <Badge variant="pending">Pending Review</Badge>
                  <span style={{ fontSize: "0.78rem", color: "var(--primary-700)", fontWeight: 600 }}>
                    {req.leaveType} Leave ({req.totalDays} days)
                  </span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "3px" }}>
                  &ldquo;{req.reason}&rdquo; • Dates: {req.dateRange}
                </p>
              </div>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button variant="outline" size="sm">
                  Review Details
                </Button>
                <Button variant="success" size="sm">
                  Approve
                </Button>
                <Button variant="danger" size="sm">
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
