import React from "react";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className = "" }: TabsProps) {
  return (
    <div className={`tabs-container ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`tab-btn ${isActive ? "active" : ""}`}
            type="button"
          >
            {tab.icon && (
              <span style={{ marginRight: "6px", display: "inline-flex", verticalAlign: "middle" }}>
                {tab.icon}
              </span>
            )}
            {tab.label}
            {tab.count !== undefined && (
              <span
                style={{
                  marginLeft: "8px",
                  padding: "2px 7px",
                  borderRadius: "9999px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  backgroundColor: isActive ? "var(--primary-100)" : "var(--bg-card-tan)",
                  color: isActive ? "var(--primary-700)" : "var(--brown-600)",
                }}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
