"use client";

import React from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Clock, CheckSquare, CalendarDays, Megaphone, ArrowRight } from "lucide-react";
import { EMPLOYEES, TASKS, LEAVE_REQUESTS, ANNOUNCEMENTS } from "@/lib/mockData";
import Link from "next/link";

export default function EmployeeDashboard() {
  const currentEmployee = EMPLOYEES[0]; // Emmanuel C. Gaspar
  const myTasks = TASKS.filter((t) => t.assignedToId === currentEmployee.id);
  const myLeaves = LEAVE_REQUESTS.filter((l) => l.employeeId === currentEmployee.employeeId);

  return (
    <AppShell
      role="EMPLOYEE"
      userName={currentEmployee.name}
      userEmail={currentEmployee.email}
      departmentName={currentEmployee.department}
    >
      <div className="page-header">
        <div>
          <h1 className="page-title">Welcome back, {currentEmployee.name.split(" ")[0]}!</h1>
          <p className="page-description">
            Here is your daily overview for {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}.
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <Button variant="primary" icon={<Clock size={16} />}>
            Check Out (05:00 PM)
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {/* Quick Profile Card */}
        <Card title="Quick Profile">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div
              className="avatar"
              style={{
                width: "56px",
                height: "56px",
                fontSize: "1.25rem",
                background: "linear-gradient(135deg, var(--primary-600), var(--brown-900))",
              }}
            >
              EG
            </div>
            <div>
              <h4 style={{ fontSize: "1.05rem", color: "var(--brown-950)" }}>{currentEmployee.name}</h4>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>{currentEmployee.position}</p>
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "4px" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--primary-700)", fontWeight: 700 }}>
                  {currentEmployee.employeeId}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>•</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                  {currentEmployee.department}
                </span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", borderTop: "1px solid var(--border-subtle)", paddingTop: "0.75rem" }}>
            Last Login: Today at 08:02 AM
          </div>
        </Card>

        {/* Time & Attendance Card */}
        <Card
          title="Today's Attendance"
          action={<Badge variant="present">Present</Badge>}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ padding: "0.75rem", backgroundColor: "var(--bg-card-subtle)", borderRadius: "var(--radius-md)" }}>
              <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Check-In Time</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brown-950)", marginTop: "2px" }}>
                {currentEmployee.checkIn}
              </div>
            </div>
            <div style={{ padding: "0.75rem", backgroundColor: "var(--bg-card-subtle)", borderRadius: "var(--radius-md)" }}>
              <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Worked Hours</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--brown-950)", marginTop: "2px" }}>
                {currentEmployee.workHours}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
            <span>Shift Target: 8h 00m</span>
            <span style={{ color: "var(--status-present-text)", fontWeight: 700 }}>On Schedule</span>
          </div>
        </Card>

        {/* Leave Requests Card */}
        <Card
          title="Leave Requests"
          action={
            <Link href="/employee/leave">
              <span style={{ fontSize: "0.8rem", color: "var(--primary-600)", fontWeight: 700 }}>
                Review &rarr;
              </span>
            </Link>
          }
        >
          <div style={{ marginBottom: "0.75rem" }}>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
              Upcoming Request:
            </div>
            {myLeaves[0] ? (
              <div
                style={{
                  padding: "0.75rem",
                  backgroundColor: "var(--bg-card-tan)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--brown-950)" }}>
                    {myLeaves[0].leaveType} Leave ({myLeaves[0].totalDays} Days)
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {myLeaves[0].dateRange}
                  </div>
                </div>
                <Badge variant={myLeaves[0].status === "Pending" ? "pending" : "approved"}>
                  {myLeaves[0].status}
                </Badge>
              </div>
            ) : (
              <p style={{ fontSize: "0.82rem" }}>No active leave requests.</p>
            )}
          </div>
          <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            Available Balances: Vacation (15), Sick (10), Personal (5)
          </div>
        </Card>
      </div>

      {/* Tasks and Announcements Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
        {/* Task Progress Section */}
        <Card
          title="Assigned Tasks & Progress"
          action={
            <Link href="/employee/tasks">
              <span style={{ fontSize: "0.8rem", color: "var(--primary-600)", fontWeight: 700 }}>
                View All &rarr;
              </span>
            </Link>
          }
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {myTasks.map((task) => (
              <div
                key={task.id}
                style={{
                  padding: "1rem",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.92rem", color: "var(--brown-950)" }}>
                      {task.title}
                    </span>
                    <Badge variant={task.priority.toLowerCase() as any}>{task.priority}</Badge>
                  </div>
                  <p style={{ fontSize: "0.82rem", marginTop: "3px" }}>{task.description}</p>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                    Due: {task.dueDate} • Est. Hours: {task.estimatedHours}h
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--primary-600)" }}>
                    {task.progress}%
                  </div>
                  <Badge variant={task.status === "In Progress" ? "in-progress" : "todo"}>
                    {task.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Latest Announcements */}
        <Card title="Announcements">
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {ANNOUNCEMENTS.slice(0, 2).map((ann) => (
              <div
                key={ann.id}
                style={{
                  padding: "0.85rem",
                  backgroundColor: "var(--bg-card-subtle)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--primary-600)", fontWeight: 700 }}>
                    {ann.category}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{ann.date}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--brown-950)", marginBottom: "4px" }}>
                  {ann.title}
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                  {ann.preview}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Daily Inspiration Box per Spec */}
      <div style={{ marginTop: "1.5rem" }}>
        <Card variant="tan" style={{ borderLeft: "4px solid var(--primary-500)" }}>
          <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--primary-700)", textTransform: "uppercase" }}>
            Daily Inspiration
          </div>
          <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "var(--brown-950)", marginTop: "4px" }}>
            &ldquo;Commit your work to the Lord, and your plans will be established.&rdquo; — Proverbs 16:3
          </p>
        </Card>
      </div>
    </AppShell>
  );
}
