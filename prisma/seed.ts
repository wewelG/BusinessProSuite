import { PrismaClient, Role, AccountStatus, AttendanceStatus, TaskPriority, TaskStatus, LeaveType, LeaveStatus, AnnouncementPriority, AnnouncementStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Business Pro Suite database...");

  const defaultPassword = await bcrypt.hash("Password123!", 10);

  // 1. Create Departments
  const itDept = await prisma.department.upsert({
    where: { name: "IT Department" },
    update: {},
    create: { name: "IT Department" },
  });

  const hrDept = await prisma.department.upsert({
    where: { name: "Human Resources" },
    update: {},
    create: { name: "Human Resources" },
  });

  const opsDept = await prisma.department.upsert({
    where: { name: "Operations" },
    update: {},
    create: { name: "Operations" },
  });

  // 2. Create Managers
  const itManagerUser = await prisma.user.upsert({
    where: { employeeId: "EMP-1002" },
    update: {},
    create: {
      employeeId: "EMP-1002",
      email: "sarah.jenkins@businesspro.com",
      username: "sarah.jenkins",
      passwordHash: defaultPassword,
      role: Role.MANAGER,
      status: AccountStatus.ACTIVE,
      profile: {
        create: {
          firstName: "Sarah",
          lastName: "Jenkins",
          position: "IT Director & Manager",
          departmentId: itDept.id,
          phone: "+1 (555) 234-5601",
          workLocation: "Headquarters",
        },
      },
    },
  });

  await prisma.department.update({
    where: { id: itDept.id },
    data: { managerId: itManagerUser.id },
  });

  const hrManagerUser = await prisma.user.upsert({
    where: { employeeId: "EMP-1007" },
    update: {},
    create: {
      employeeId: "EMP-1007",
      email: "david.vance@businesspro.com",
      username: "david.vance",
      passwordHash: defaultPassword,
      role: Role.MANAGER,
      status: AccountStatus.ACTIVE,
      profile: {
        create: {
          firstName: "David",
          lastName: "Vance",
          position: "HR Director",
          departmentId: hrDept.id,
          phone: "+1 (555) 345-6701",
          workLocation: "Headquarters",
        },
      },
    },
  });

  await prisma.department.update({
    where: { id: hrDept.id },
    data: { managerId: hrManagerUser.id },
  });

  // 3. Create Main Employee User (Student & Lead)
  const mainEmployee = await prisma.user.upsert({
    where: { employeeId: "EMP-1001" },
    update: {},
    create: {
      employeeId: "EMP-1001",
      email: "emmanuel.gaspar@businesspro.com",
      username: "emmanuel.gaspar",
      passwordHash: defaultPassword,
      role: Role.EMPLOYEE,
      status: AccountStatus.ACTIVE,
      profile: {
        create: {
          firstName: "Emmanuel",
          lastName: "Gaspar",
          position: "Senior Systems Engineer",
          departmentId: itDept.id,
          reportingManagerId: itManagerUser.id,
          phone: "+1 (555) 234-5678",
          skills: "React, Next.js, TypeScript, PostgreSQL, Cloud Security",
          workLocation: "Headquarters (Hybrid)",
        },
      },
    },
  });

  // 4. Leave Balances for Main Employee
  const leaveTypes = [
    { type: LeaveType.VACATION, allowance: 15 },
    { type: LeaveType.SICK, allowance: 10 },
    { type: LeaveType.PERSONAL, allowance: 5 },
    { type: LeaveType.EMERGENCY, allowance: 3 },
  ];

  for (const lt of leaveTypes) {
    await prisma.leaveBalance.upsert({
      where: {
        userId_type_year: {
          userId: mainEmployee.id,
          type: lt.type,
          year: 2026,
        },
      },
      update: {},
      create: {
        userId: mainEmployee.id,
        type: lt.type,
        yearlyAllowance: lt.allowance,
        used: 0,
        year: 2026,
      },
    });
  }

  // 5. Sample Announcements
  await prisma.announcement.create({
    data: {
      title: "Mid-Month Payroll Release Schedule & Bank Cutoff",
      category: "Payroll",
      priority: AnnouncementPriority.HIGH,
      department: "Human Resources",
      body: "Please ensure all pending overtime logs and attendance corrections are finalized by Thursday 5:00 PM to avoid salary computation delays.",
      pinned: true,
      audience: "Entire Company",
    },
  });

  await prisma.announcement.create({
    data: {
      title: "Scheduled Cloud Infrastructure Maintenance",
      category: "IT Operations",
      priority: AnnouncementPriority.MEDIUM,
      department: "IT Department",
      body: "Database maintenance and security indexing will take place this Saturday from 11 PM to 3 AM. Internal portals may experience brief latency.",
      pinned: false,
      audience: "IT Department",
    },
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
