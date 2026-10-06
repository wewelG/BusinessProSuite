export interface MockDepartment {
  id: string;
  name: string;
  managerName: string;
}

export interface MockEmployee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  role: "EMPLOYEE" | "MANAGER";
  department: string;
  position: string;
  status: "Present" | "Late" | "Absent" | "On Leave";
  checkIn: string;
  checkOut: string;
  workHours: string;
  phone: string;
  avatarUrl?: string;
  employmentType: string;
  dateHired: string;
  location: string;
}

export interface MockTask {
  id: string;
  title: string;
  description: string;
  category: string;
  assignedTo: string;
  assignedToId: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  status: "To Do" | "In Progress" | "In Review" | "Completed";
  progress: number;
  estimatedHours: number;
}

export interface MockLeaveRequest {
  id: string;
  applicationId: string;
  employeeName: string;
  employeeId: string;
  department: string;
  leaveType: "Vacation" | "Sick" | "Personal" | "Emergency";
  dateRange: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
  submittedAt: string;
}

export interface MockAnnouncement {
  id: string;
  title: string;
  category: string;
  priority: "High" | "Medium" | "Low";
  department: string;
  date: string;
  preview: string;
  body: string;
  pinned?: boolean;
}

export const DEPARTMENTS: MockDepartment[] = [
  { id: "dept-1", name: "IT Department", managerName: "Sarah Jenkins" },
  { id: "dept-2", name: "Human Resources", managerName: "David Vance" },
  { id: "dept-3", name: "Operations", managerName: "Elena Rostova" },
];

export const EMPLOYEES: MockEmployee[] = [
  {
    id: "emp-1",
    employeeId: "EMP-1001",
    name: "Emmanuel C. Gaspar",
    email: "emmanuel.gaspar@businesspro.com",
    role: "EMPLOYEE",
    department: "IT Department",
    position: "Senior Systems Engineer",
    status: "Present",
    checkIn: "08:03 AM",
    checkOut: "05:00 PM",
    workHours: "8h 57m",
    phone: "+1 (555) 234-5678",
    employmentType: "Full-Time",
    dateHired: "2023-03-15",
    location: "Headquarters (Hybrid)",
  },
  {
    id: "emp-2",
    employeeId: "EMP-1002",
    name: "Sarah Jenkins",
    email: "sarah.jenkins@businesspro.com",
    role: "MANAGER",
    department: "IT Department",
    position: "IT Director & Manager",
    status: "Present",
    checkIn: "07:55 AM",
    checkOut: "05:10 PM",
    workHours: "9h 15m",
    phone: "+1 (555) 234-5601",
    employmentType: "Full-Time",
    dateHired: "2021-01-10",
    location: "Headquarters",
  },
  {
    id: "emp-3",
    employeeId: "EMP-1003",
    name: "Alex Rivera",
    email: "alex.rivera@businesspro.com",
    role: "EMPLOYEE",
    department: "IT Department",
    position: "Frontend Architect",
    status: "Present",
    checkIn: "08:00 AM",
    checkOut: "--",
    workHours: "8h 00m",
    phone: "+1 (555) 234-5603",
    employmentType: "Full-Time",
    dateHired: "2023-06-01",
    location: "Headquarters",
  },
  {
    id: "emp-4",
    employeeId: "EMP-1004",
    name: "Maya Lin",
    email: "maya.lin@businesspro.com",
    role: "EMPLOYEE",
    department: "IT Department",
    position: "Database Administrator",
    status: "Late",
    checkIn: "08:24 AM",
    checkOut: "--",
    workHours: "7h 36m",
    phone: "+1 (555) 234-5604",
    employmentType: "Full-Time",
    dateHired: "2022-11-15",
    location: "Headquarters",
  },
  {
    id: "emp-5",
    employeeId: "EMP-1005",
    name: "Marcus Vance",
    email: "marcus.vance@businesspro.com",
    role: "EMPLOYEE",
    department: "IT Department",
    position: "Cloud DevOps Specialist",
    status: "On Leave",
    checkIn: "--",
    checkOut: "--",
    workHours: "0h 00m",
    phone: "+1 (555) 234-5605",
    employmentType: "Full-Time",
    dateHired: "2024-02-01",
    location: "Headquarters",
  },
  {
    id: "emp-6",
    employeeId: "EMP-1006",
    name: "Jessica Ramos",
    email: "jessica.ramos@businesspro.com",
    role: "EMPLOYEE",
    department: "IT Department",
    position: "QA Automation Engineer",
    status: "Present",
    checkIn: "07:50 AM",
    checkOut: "04:55 PM",
    workHours: "9h 05m",
    phone: "+1 (555) 234-5606",
    employmentType: "Full-Time",
    dateHired: "2023-08-20",
    location: "Headquarters",
  },
  {
    id: "emp-7",
    employeeId: "EMP-1007",
    name: "David Vance",
    email: "david.vance@businesspro.com",
    role: "MANAGER",
    department: "Human Resources",
    position: "HR Director",
    status: "Present",
    checkIn: "08:05 AM",
    checkOut: "--",
    workHours: "7h 55m",
    phone: "+1 (555) 345-6701",
    employmentType: "Full-Time",
    dateHired: "2020-05-12",
    location: "Headquarters",
  },
  {
    id: "emp-8",
    employeeId: "EMP-1008",
    name: "Chloe Bennett",
    email: "chloe.bennett@businesspro.com",
    role: "EMPLOYEE",
    department: "Human Resources",
    position: "Recruitment Specialist",
    status: "Present",
    checkIn: "08:01 AM",
    checkOut: "--",
    workHours: "7h 59m",
    phone: "+1 (555) 345-6702",
    employmentType: "Full-Time",
    dateHired: "2023-01-18",
    location: "Headquarters",
  },
  {
    id: "emp-9",
    employeeId: "EMP-1009",
    name: "Brandon Cole",
    email: "brandon.cole@businesspro.com",
    role: "EMPLOYEE",
    department: "Human Resources",
    position: "Employee Relations Officer",
    status: "Absent",
    checkIn: "--",
    checkOut: "--",
    workHours: "0h 00m",
    phone: "+1 (555) 345-6703",
    employmentType: "Full-Time",
    dateHired: "2024-04-10",
    location: "Headquarters",
  },
  {
    id: "emp-10",
    employeeId: "EMP-1010",
    name: "Elena Rostova",
    email: "elena.rostova@businesspro.com",
    role: "MANAGER",
    department: "Operations",
    position: "Operations Director",
    status: "Present",
    checkIn: "07:45 AM",
    checkOut: "--",
    workHours: "8h 15m",
    phone: "+1 (555) 456-7801",
    employmentType: "Full-Time",
    dateHired: "2019-09-01",
    location: "Headquarters",
  },
  // Additional staff to meet 24 total
  ...Array.from({ length: 14 }).map((_, idx) => ({
    id: `emp-${idx + 11}`,
    employeeId: `EMP-${1011 + idx}`,
    name: `Team Member ${idx + 1}`,
    email: `member${idx + 1}@businesspro.com`,
    role: "EMPLOYEE" as const,
    department: idx % 2 === 0 ? "Operations" : "IT Department",
    position: idx % 2 === 0 ? "Operations Analyst" : "Software Associate",
    status: "Present" as const,
    checkIn: "08:00 AM",
    checkOut: "05:00 PM",
    workHours: "8h 00m",
    phone: `+1 (555) 500-00${idx < 10 ? "0" + idx : idx}`,
    employmentType: "Full-Time",
    dateHired: "2024-01-15",
    location: "Headquarters",
  })),
];

export const TASKS: MockTask[] = [
  {
    id: "task-1",
    title: "Database Migration & Schema Audit",
    description: "Verify relational integrity and foreign keys for Postgres tables.",
    category: "IT Infrastructure",
    assignedTo: "Emmanuel C. Gaspar",
    assignedToId: "emp-1",
    dueDate: "2026-10-10",
    priority: "High",
    status: "In Progress",
    progress: 65,
    estimatedHours: 12,
  },
  {
    id: "task-2",
    title: "Security Patch Rollout for Internal Endpoints",
    description: "Deploy updated authorization tokens and rotate secrets.",
    category: "Security",
    assignedTo: "Alex Rivera",
    assignedToId: "emp-3",
    dueDate: "2026-10-12",
    priority: "High",
    status: "In Review",
    progress: 90,
    estimatedHours: 8,
  },
  {
    id: "task-3",
    title: "Implement Biometric Attendance Sync Service",
    description: "Integrate automatic check-in calculation with 10-minute grace window.",
    category: "Development",
    assignedTo: "Emmanuel C. Gaspar",
    assignedToId: "emp-1",
    dueDate: "2026-10-15",
    priority: "Medium",
    status: "To Do",
    progress: 20,
    estimatedHours: 16,
  },
  {
    id: "task-4",
    title: "Quarterly Performance Report Generation",
    description: "Export consolidated attendance and delivery charts for review.",
    category: "HR Operations",
    assignedTo: "Chloe Bennett",
    assignedToId: "emp-8",
    dueDate: "2026-10-08",
    priority: "Low",
    status: "Completed",
    progress: 100,
    estimatedHours: 6,
  },
  {
    id: "task-5",
    title: "Onboarding Documentation Revision",
    description: "Update developer welcome handbook with Next.js architecture guidelines.",
    category: "Human Resources",
    assignedTo: "Chloe Bennett",
    assignedToId: "emp-8",
    dueDate: "2026-10-20",
    priority: "Low",
    status: "To Do",
    progress: 0,
    estimatedHours: 5,
  },
  {
    id: "task-6",
    title: "Server Backup & Disaster Recovery Test",
    description: "Execute automated restore verification on test cluster.",
    category: "IT Operations",
    assignedTo: "Maya Lin",
    assignedToId: "emp-4",
    dueDate: "2026-10-05",
    priority: "High",
    status: "Completed",
    progress: 100,
    estimatedHours: 10,
  },
];

export const LEAVE_REQUESTS: MockLeaveRequest[] = [
  {
    id: "leave-1",
    applicationId: "LR-2026-001",
    employeeName: "Emmanuel C. Gaspar",
    employeeId: "EMP-1001",
    department: "IT Department",
    leaveType: "Vacation",
    dateRange: "Oct 20, 2026 - Oct 23, 2026",
    startDate: "2026-10-20",
    endDate: "2026-10-23",
    totalDays: 4,
    reason: "Annual family trip and rest.",
    status: "Pending",
    submittedAt: "2026-10-04 09:30 AM",
  },
  {
    id: "leave-2",
    applicationId: "LR-2026-002",
    employeeName: "Marcus Vance",
    employeeId: "EMP-1005",
    department: "IT Department",
    leaveType: "Personal",
    dateRange: "Oct 06, 2026 - Oct 07, 2026",
    startDate: "2026-10-06",
    endDate: "2026-10-07",
    totalDays: 2,
    reason: "Family emergency matters.",
    status: "Approved",
    submittedAt: "2026-10-02 02:15 PM",
  },
  {
    id: "leave-3",
    applicationId: "LR-2026-003",
    employeeName: "Maya Lin",
    employeeId: "EMP-1004",
    department: "IT Department",
    leaveType: "Sick",
    dateRange: "Oct 01, 2026 - Oct 02, 2026",
    startDate: "2026-10-01",
    endDate: "2026-10-02",
    totalDays: 2,
    reason: "Medical appointment and recovery.",
    status: "Approved",
    submittedAt: "2026-09-30 08:00 AM",
  },
  {
    id: "leave-4",
    applicationId: "LR-2026-004",
    employeeName: "Brandon Cole",
    employeeId: "EMP-1009",
    department: "Human Resources",
    leaveType: "Personal",
    dateRange: "Sep 28, 2026 - Sep 28, 2026",
    startDate: "2026-09-28",
    endDate: "2026-09-28",
    totalDays: 1,
    reason: "Personal urgent business.",
    status: "Rejected",
    submittedAt: "2026-09-26 11:45 AM",
  },
];

export const ANNOUNCEMENTS: MockAnnouncement[] = [
  {
    id: "ann-1",
    title: "Mid-Month Payroll Release Schedule & Bank Cutoff",
    category: "Payroll",
    priority: "High",
    department: "Human Resources",
    date: "Oct 05, 2026",
    preview: "Important guidelines regarding payroll processing and timesheet submission cutoffs.",
    body: "Please ensure all pending overtime logs and attendance corrections are finalized by Thursday 5:00 PM to avoid salary computation delays.",
    pinned: true,
  },
  {
    id: "ann-2",
    title: "Scheduled Cloud Infrastructure Maintenance",
    category: "IT Operations",
    priority: "Medium",
    department: "IT Department",
    date: "Oct 04, 2026",
    preview: "Database maintenance and security indexing will take place this Saturday from 11 PM to 3 AM.",
    body: "During the maintenance window, internal portals may experience brief latency. External services will remain online.",
    pinned: false,
  },
  {
    id: "ann-3",
    title: "Annual Health & Wellness Checkup Enrollment",
    category: "Company Event",
    priority: "Low",
    department: "Human Resources",
    date: "Oct 02, 2026",
    preview: "Health insurance provider partners will be onsite for routine annual health checkups.",
    body: "Employees may book slots through the HR portal. Attendance is excused and credited as regular work time.",
    pinned: false,
  },
];
