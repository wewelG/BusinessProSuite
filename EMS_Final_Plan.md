# Business Pro Suite EMS: Final Implementation Plan

Source spec: [EMS_Final_Documentation.md](EMS_Final_Documentation.md). Decisions below come from the grilling interview.

## 1. Locked decisions

| Area | Decision |
|---|---|
| Framework | Next.js (App Router, TypeScript) in `nextjs-app`, Vanilla CSS (no Tailwind) |
| Database | Supabase hosted PostgreSQL, accessed through **Prisma** |
| File storage | Supabase Storage (private buckets, signed URLs) |
| Auth | **Auth.js** credentials provider + bcrypt. Supabase is used only as DB and Storage, not for auth |
| Email | Resend or SMTP: activation, password reset, leave decisions, instant announcements |
| Roles | `EMPLOYEE`, `MANAGER`. Role is auto-detected at login. An admin **seed script** creates departments, managers, employees, and accounts |
| Manager scope | One manager per department. They see and approve only their own department |
| Attendance | Employee clicks Check-in/Check-out. Late = check-in after shift start + grace (default 8:00 + 10 min, configurable) |
| Leave rules | Yearly balance per type: Vacation 15, Sick 10, Personal 5, Emergency 3. Deducted on approval. Overlap and over-balance requests blocked |
| Task review | Added manager "Review submission": Approve → Completed, Reject → In Progress (with comment) |
| Notifications | In-app bell plus email for leave decisions and instant announcements |
| Design | Orange/brown tones with beige/tan cards, left sidebar, rounded cards (per the doc). Replaces the indigo landing page |
| Deployment | None. Local testing only (`npm run dev`) |

## 2. Spec gaps and how this plan resolves them

| Gap in the doc | Resolution |
|---|---|
| "Pre-created by admin" but no admin role | Seed script (`prisma/seed.ts`) with demo data |
| "In Review" status with no manager screen | Review action in Manager Task Management |
| Leave balance shown, rules undefined | Entitlements above, stored per employee per year |
| "Backup/reliever officer" and "approval chain" in leave details | Optional reliever field; single-step approval by the department manager. The audit trail shows submitted, then approved/rejected |
| "Save as Draft" for tasks and announcements | `DRAFT` status on both |
| "Real-time" attendance | Server-rendered data with periodic refresh (30s polling). No websockets |
| Daily inspiration | Static list of quotes with a daily rotation. No backend |
| Doc says "Mobile responsive" | Sidebar collapses to a drawer below 900px |
| Sample metrics (24 employees, etc.) | Seed data only. All dashboard numbers are computed live |
| Profile photos allow SVG | Accept SVG but serve it only as `<img>`, never inline, to avoid XSS |
| Activation "Employee ID + Email" | Matches a seeded, inactive account, then emails a set-password link |

## 3. Data model (Prisma)

- **Department**: id, name, managerId
- **User**: id, employeeId (unique), email (unique), username, passwordHash, role, status (`PENDING`/`ACTIVE`), lastLoginAt, photoUrl
- **EmployeeProfile**: userId, firstName, lastName, phone, address, gender, birthday, civilStatus, emergencyContact, position, employmentType, dateHired, workLocation, skills[], departmentId, reportingManagerId
- **AttendanceRecord**: userId, date, timeIn, timeOut, totalMinutes, status (`PRESENT`/`LATE`/`ABSENT`/`ON_LEAVE`), remarks. Unique on (userId, date)
- **Task**: title, description, category, dueDate, priority, status (`DRAFT`/`TODO`/`IN_PROGRESS`/`IN_REVIEW`/`COMPLETED`), progress, estimatedHours, assigneeId, createdById
- **TaskSubmission**: taskId, fileUrl, comment (≤500), reviewStatus, reviewComment, submittedAt
- **LeaveType / LeaveBalance**: type, yearlyAllowance, userId, year, used
- **LeaveRequest**: applicationId, userId, type, startDate, endDate, totalDays, reason (≤500), attachmentUrl, relieverId, status, decidedById, decidedAt
- **Announcement**: title, category, priority, body (sanitized HTML), audience (company or department ids), pinned, notifyInstantly, status, attachmentUrl
- **AnnouncementRead**: announcementId, userId (drives the unread counter)
- **Notification**: userId, type, message, link, readAt
- **PasswordToken**: userId, tokenHash, purpose (`ACTIVATE`/`RESET`), expiresAt

## 4. Routes

```
/activate  /login  /forgot-password  /reset-password
/employee  dashboard · attendance · tasks · leave · announcements · profile
/manager   dashboard · employees · tasks · leave · announcements · profile
```

Shared layout: top bar (global search, notification bell, profile menu) + role-specific sidebar. Route protection through middleware and server-side role checks on every action.

## 5. Phases

### Phase 0: Foundation
- [x] Supabase project, `DATABASE_URL`/`DIRECT_URL`, Prisma schema and migration
- [x] Design tokens in `globals.css` (orange/brown/beige), base components: Button, Card, Badge, Modal, Table, Pagination, Tabs, Toast, FormField
- [x] App shell: sidebar, top bar, responsive drawer
- [x] Seed script: 3 departments, 3 managers, ~24 employees, sample attendance, tasks, leave, announcements

### Phase 1: Authentication
- [x] Activate account (Employee ID + email, then a set-password link)
- [x] Login with role redirect, "remember this device" (longer session), password rules (8+, letter, number, symbol)
- [ ] Forgot/reset password (hashed, expiring tokens, error state for undelivered mail)
- [ ] Change password (current-password check, strength meter, visibility toggle)

### Phase 2: Employee portal
- [ ] Dashboard: profile card, today's attendance, task progress, latest announcements, leave summary, daily inspiration
- [ ] Attendance: check-in/out, history table with pagination, donut summary, today's card
- [ ] Tasks: filter tabs, search, status change, Submit Task modal (10MB, PDF/DOCX/XLSX/JPG/PNG)
- [ ] Leave: tabs, list, create modal (auto days, balance, 5MB PDF/JPG/PNG), details modal, confirmation screen with Application ID
- [ ] Announcements: feed, search, category filter, sort, unread count, detail panel
- [ ] Profile: view, edit, photo upload, security section, save confirmation

### Phase 3: Manager portal
- [ ] Dashboard: department overview, live attendance and punctual rate, directory preview, distribution chart, alerts and exceptions
- [ ] Employee directory: stats cards, searchable table, two-tab detail modal, attendance PDF download
- [ ] Task management: stats, table, Create & Assign modal, Save as Draft, **review submissions**
- [ ] Leave approval: stats, filters, inline Approve/Reject, details modal, balance deduction, attendance marked `ON_LEAVE`
- [ ] Announcements: create/edit with rich text, audience targeting, attachments, pin, instant notify, draft, archive

### Phase 4: Cross-cutting and polish
- [ ] Notifications (bell, mark-read) and email templates
- [ ] Global search (scoped by role)
- [ ] Server-side validation (zod) for every form and upload (type and size, magic-byte check)
- [ ] HTML sanitization for announcement bodies
- [ ] Accessibility: keyboard focus, labelled fields, badges with text plus color, reduced motion
- [ ] Empty, loading, and error states on every list

## 6. Verification

- Unit tests: late-status calculation, leave-day and overlap calculation, balance deduction, password rules
- Authorization tests: an employee cannot reach `/manager/*`. A manager cannot read another department's data
- Manual walkthrough of the five key workflows in the doc (submit task, request leave, assign task, approve leave, broadcast announcement)
- `npm run build` and `npm run lint` pass before sign-off

## 7. Open items to confirm during build

- Shift start time and grace period (default 8:00 / 10 min)
- Whether leave balances reset on Jan 1 (assumed yes, no carry-over)
- Working days: Mon–Fri, with weekends excluded from leave day counts (assumed)
- Email provider credentials (Resend or SMTP)
