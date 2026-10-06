"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Clock,
  CheckSquare,
  CalendarDays,
  Megaphone,
  UserCheck,
  Users,
  Search,
  Bell,
  Menu,
  X,
  LogOut,
  Building2,
} from "lucide-react";

interface AppShellProps {
  role: "EMPLOYEE" | "MANAGER";
  userName?: string;
  userEmail?: string;
  departmentName?: string;
  children: React.ReactNode;
}

export function AppShell({
  role,
  userName = "Emmanuel C. Gaspar",
  departmentName = "IT Department",
  children,
}: AppShellProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const employeeNavItems = [
    { label: "Dashboard", href: "/employee/dashboard", icon: LayoutDashboard },
    { label: "Attendance Record", href: "/employee/attendance", icon: Clock },
    { label: "Task Status", href: "/employee/tasks", icon: CheckSquare },
    { label: "Leave Requests", href: "/employee/leave", icon: CalendarDays },
    { label: "Announcements", href: "/employee/announcements", icon: Megaphone },
    { label: "My Profile", href: "/employee/profile", icon: UserCheck },
  ];

  const managerNavItems = [
    { label: "Dashboard", href: "/manager/dashboard", icon: LayoutDashboard },
    { label: "Employee Directory", href: "/manager/employees", icon: Users },
    { label: "Task Management", href: "/manager/tasks", icon: CheckSquare },
    { label: "Leave Approvals", href: "/manager/leave", icon: CalendarDays },
    { label: "Announcements", href: "/manager/announcements", icon: Megaphone },
    { label: "My Profile", href: "/manager/profile", icon: UserCheck },
  ];

  const navItems = role === "MANAGER" ? managerNavItems : employeeNavItems;

  return (
    <div className="app-container">
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(32, 21, 17, 0.5)",
            zIndex: 35,
          }}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="brand-badge">B</div>
          <div style={{ flex: 1 }}>
            <div className="brand-title">Business Pro</div>
            <div className="brand-sub">Suite • EMS</div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="icon-button"
            style={{
              display: "flex",
              width: "28px",
              height: "28px",
              color: "#fff",
              background: "transparent",
              border: "none",
            }}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-label">
            {role === "MANAGER" ? "Manager Administration" : "Employee Self-Service"}
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                <Icon className="icon" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="avatar" style={{ width: "34px", height: "34px", fontSize: "0.8rem" }}>
            {userName.charAt(0)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#ffffff",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {userName}
            </div>
            <div style={{ fontSize: "0.72rem", color: "var(--brown-400)" }}>
              {departmentName}
            </div>
          </div>
          <Link
            href="/login"
            style={{ color: "var(--brown-400)", padding: "4px" }}
            title="Logout"
          >
            <LogOut size={16} />
          </Link>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="main-wrapper">
        {/* Sticky Topbar */}
        <header className="topbar">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="icon-button"
              style={{ display: "flex" }}
              aria-label="Toggle navigation"
            >
              <Menu size={18} />
            </button>

            <div className="topbar-search">
              <Search size={16} color="var(--brown-500)" />
              <input
                type="text"
                placeholder="Search employees, tasks, requests..."
                aria-label="Global Search"
              />
            </div>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Notifications">
              <Bell size={18} />
              <span className="notification-badge" />
            </button>

            <div style={{ position: "relative" }}>
              <div
                className="user-profile-menu"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="avatar">{userName.charAt(0)}</div>
                <div className="user-info">
                  <span className="user-name">{userName}</span>
                  <span className="user-role-tag">{role}</span>
                </div>
              </div>

              {userDropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "100%",
                    marginTop: "8px",
                    width: "200px",
                    backgroundColor: "#ffffff",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-subtle)",
                    boxShadow: "var(--shadow-lg)",
                    zIndex: 50,
                    padding: "0.5rem",
                  }}
                >
                  <div style={{ padding: "0.5rem 0.75rem", borderBottom: "1px solid var(--border-subtle)" }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--brown-950)" }}>
                      {userName}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                      Role: {role}
                    </div>
                  </div>
                  <Link
                    href={role === "MANAGER" ? "/manager/profile" : "/employee/profile"}
                    onClick={() => setUserDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 0.75rem",
                      fontSize: "0.84rem",
                      color: "var(--brown-900)",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <UserCheck size={14} /> View Profile
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setUserDropdownOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 0.75rem",
                      fontSize: "0.84rem",
                      color: "#bf2626",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <LogOut size={14} /> Sign Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content View */}
        <main className="page-container">{children}</main>
      </div>
    </div>
  );
}
