# Business Pro Suite - Employee Management System (EMS)

## Final Documentation

**Student:** Emmanuel C. Gaspar
**Project:** Employee Management System (Midterm Exam)
**System Name:** Business Pro Suite
**Date:** October 4, 2026

---

## 1. System Overview

Business Pro Suite is a comprehensive Employee Management System designed to streamline HR operations and employee management for organizations. The system provides two distinct user roles with specialized features:

- **Employee Role:** Self-service portal for managing personal information, tasks, leave requests, and attendance records
- **Manager Role:** Administrative dashboard for monitoring team performance, managing personnel, approving requests, and assigning work

### Key Features

- Centralized attendance tracking and monitoring
- Task management and progress tracking
- Leave request submission and approval workflow
- Employee directory with consolidated attendance data
- Announcements and company-wide communications
- User profile management and authentication

---

## 2. System Architecture

### Navigation Structure

**Shared Components:**

- Top navigation bar with search and user profile
- Left sidebar navigation with role-specific menu items
- Logo and branding (Business Pro Suite)
- Global search functionality
- User settings and logout

**Authentication Flow:**

1. Account Activation (Employee ID + Email)
2. Login (Email + Password with role auto-detection)
3. Password Management (Forgot Password / Change Password)

---

## 3. Employee Side Features

### 3.1 Authentication Screens

**Activate Account**

- Requires Employee ID and Employee Email
- Verification email sent upon activation
- Pre-created accounts managed by admin

**Login**

- Email and password authentication
- Password requirements displayed (minimum 8 characters with letters, numbers & symbols)
- "Remember this device" checkbox
- Auto-detection of user role (Employee/Manager)
- Link to account activation for new users

**Forgot Password**

- Email-based password reset
- Verification link sent to registered email
- Password reset link confirmation screen
- Error handling for undelivered emails

**Change Password**

- Current password verification
- New password with strength requirements
- Confirm password field
- Password visibility toggle

### 3.2 Dashboard

**Welcome Section**

- Personalized greeting with employee name
- Quick access banner with action items

**Quick Profile Card**

- Employee profile photo
- Name and job title
- Employee ID and department
- Contact email
- Last login timestamp
- View Full Profile link

**Time & Attendance Card**

- Today's attendance status
- Check-in time (e.g., 8:03 AM)
- Check-out time (if available)
- Total worked hours
- Working hours calculation
- Monthly attendance summary (Present, Late, Absent, On Leave)
- Last updated timestamp

**Task Progress Card**

- Task completion statistics (Completed, In Progress, Pending, Overdue)
- Overall progress percentage (visual bar)
- Next task with due date
- View All Tasks link

**Latest Announcements Card**

- Recent announcements with priority badges
- Department attribution
- Announcement date
- See All Announcements link

**Leave Requests Card**

- Leave request status summary (Pending, Approved, Rejected)
- Current month statistics
- Recent leave request display
- Review Requests link

**Daily Inspiration**

- Motivational quote with background image
- Scripture reference
- Inspirational message

### 3.3 Attendance Record

**Attendance History Table**

- Date of attendance entry
- Time In and Time Out
- Total hours worked
- Attendance status badge (Present, Late, Absent, On Leave)
- Remarks column for notes
- Action menu for each entry
- Pagination support (showing 1 to 6 of 40 entries)

**Attendance Summary**

- Donut chart showing attendance distribution
  - Present: percentage and count
  - Late: percentage and count
  - Absent: percentage and count
  - On Leave: percentage and count

**Today's Attendance Card**

- Current date
- Time In (e.g., 8:00 AM)
- Time Out (if checked out)
- Total Hours worked
- Current status (Present/Late/Absent)

### 3.4 Task Status (My Tasks)

**Task Filter Tabs**

- All Tasks (total count)
- To Do (tasks not started)
- In Progress (active tasks)
- In Review (pending manager approval)
- Completed (finished tasks)

**Task List View**

- Task title and description
- Due date with relative time (e.g., 3 days left)
- Priority badge (High, Medium, Low)
- Status dropdown (To Do, In Progress, In Review, Completed)
- Proof/attachment column (downloadable files)
- Progress indicator
- Action menu
- Search functionality
- Pagination

**Submit Task Modal**

- Task title and description (display only)
- File upload section (drag-and-drop or browse)
- Supported formats: PDF, DOCX, XLSX, JPG, PNG
- Max file size: 10MB
- Optional comments field (max 500 characters)
- Character counter for comments
- Cancel and Submit buttons

### 3.5 Leave Requests

**Leave Request Tabs**

- All Requests (total leave requests)
- Pending (awaiting approval)
- Approved (accepted requests)
- Rejected (denied requests)

**Leave Request List**

- Leave type icon and name (Vacation, Sick, Personal, Emergency)
- Reason/description
- Date range (start to end date)
- Total days requested
- Status badge with color coding:
  - Pending (orange)
  - Approved (green)
  - Rejected (red)
- Submission date
- View Details link
- Action menu

**Create Leave Request Modal**

- Leave Type dropdown (required)
- Start Date picker (required)
- End Date picker (required)
- Total Days (auto-calculated)
- Reason textarea (required, max 500 characters)
- Employee name (read-only auto-fill)
- Department (read-only auto-fill)
- Attachment upload (PDF, JPG, PNG, max 5MB)
- Available leave balance display
- Cancel and Submit Request buttons

**Leave Request Details Modal**

- Employee information and ID
- Leave type with icon
- Date range
- Total duration
- Reason description
- Attached documentation with download link
- File size information
- Backup/reliever officer assignment
- Authorized approvers list
- Review progress & audit trail (workflow steps)
- Action buttons: Cancel Request, Close, Edit Request, Download Summary

**Leave Request Submitted Confirmation**

- Success checkmark icon
- Confirmation message
- Application ID for reference
- Leave details summary
- Pending Approval status badge
- Department Supervisor & HR Manager notification
- Submission date and time
- Email notification confirmation
- View All Requests and Back to Dashboard buttons

### 3.6 Announcements

**Announcements Feed**

- Search bar (by announcement content)
- Category filter dropdown (All Categories)
- Sort options (Newest First, etc.)
- Unread badge counter
- Announcement cards with:
  - Department icon
  - Announcement title
  - Priority badge (High Priority, Upcoming Event, Medium Priority)
  - Preview text
  - Department name and date
  - Navigation arrow

**Announcement Detail Panel**

- Full announcement title
- Department and date
- Complete message body
- Priority indicator
- Close button
- Right-side panel with:
  - "Click announcements to view here" placeholder when no selection
  - Full announcement details when selected

**Sample Announcements**

- Payroll announcements
- Company events
- System maintenance notices
- Performance evaluation reminders

### 3.7 View/Edit Profile

**View Profile Screen**

- Profile photo with online status indicator
- Full name and job title
- Online/offline status
- Employee ID
- Department
- Email
- Phone number

**Personal Information Section**

- First Name and Last Name
- Email address
- Phone number
- Address
- Gender
- Birthday
- Civil Status

**Employment Details Section**

- Employee ID
- Department
- Position/Role
- Employment Type
- Date Hired

**Account Information Section**

- Username
- Role
- Account Status
- Last Login
- Password (masked)

**Edit Profile (Profile Details)**

- Full Name field
- Username field
- Email Address field
- Phone Number field
- Department (read-only)
- Position/Role (read-only)

**Profile Picture Upload**

- Current photo display
- Upload area with drag-and-drop
- Supported formats: SVG, JPG, PNG
- Max file size: 10MB
- Browse file button

**Account Security Section**

- Current Password field
- New Password field
- Confirm Password field
- Password requirements displayed
- Password strength indicator

**Profile Update Actions**

- Cancel button
- Save Changes button
- Confirmation dialog before saving
- Success notification: "Profile updated successfully!"
- Changes saved timestamp
- View Profile link after update

---

## 4. Manager Side Features

### 4.1 Dashboard

**Welcome Section**

- Personalized greeting with manager name
- Motivational banner text

**Department Overview Card**

- Department name and manager attribution
- Department statistics:
  - Total Staff count
  - Active employees count
  - On Leave employees count
  - Absent/Late employees count
- View All Employees link

**Today's Attendance Card**

- Live real-time status
- Present count
- Late count
- Absent count
- On Leave count
- Overall Punctual Rate percentage
- Color-coded progress bar

**Employee Directory Preview**

- Department filter showing IT Department
- List of 4 employees (out of total)
- Employee name with avatar
- Job title
- Online/On Leave status
- View Full Team link

**Attendance Distribution Chart**

- Donut chart visualization
- Monthly average percentages
  - Present percentage (highest)
  - Late percentage
  - Absent percentage
  - On Leave percentage
- Legend with percentages

**Attendance Alerts & Exceptions**

- Alert banner with warning icon
- Number of pending actions
- List of employees with issues:
  - Name and status
  - Reason (Absent today - No notice filed, Late check-in time)
  - Time entry
  - Timestamp

**Daily Inspiration**

- Same motivational content as employee view
- Quote with background image

### 4.2 Employee Directory & Attendance

**Statistics Cards**

- Total Employees (e.g., 24)
- Present Today (e.g., 22)
- On Leave (e.g., 1)
- Late/Absent (e.g., 1)

**Employee List Table**

- Search by name, position, or email
- Columns:
  - Employee avatar and name (with ID)
  - Position & Department
  - Check-In time
  - Check-Out time
  - Work Hours total
  - Status badge (Present, Late, Absent, On Leave)
  - Contact number
  - Action menu
- Color-coded status indicators
- Pagination (1 to 5 of 30 employees)

**Employee Detail Modal (Two Tabs)**

*Tab 1: Attendance & Log History*

- Employee name, ID, and status
- Line manager information
- Employment type (Full-Time, etc.)
- Date hired
- Monthly attendance percentage
- Today's shift log:
  - Scheduled hours
  - Check-in time
  - Check-out time
  - Total worked hours
- Recent attendance history table:
  - Date
  - Time In
  - Time Out
  - Total Duration
  - Status
  - Remarks
- Filter: Last 5 Working Days dropdown
- Download Attendance Log (PDF) button

*Tab 2: Profile Overview*

- Employment & Organizational Info:
  - Job Title/Position
  - Department
  - Reporting Manager
  - Employment Status
  - Date Hired & Tenure
  - Work Location (HQ/Hybrid info)
- Personal & Contact Information:
  - Full Legal Name
  - Date of Birth
  - Emergency Contact
  - Residential Address
  - Work Email
  - Direct Contact Phone
- Skills, Roles & Active Assignments:
  - Core Technical Competencies (tags)
  - Current Active Tasks
  - Active Projects Count
  - Task status and due dates

### 4.3 Task Management

**Task Statistics**

- All Tasks (total count)
- To Do (not started)
- In Progress (active)
- Completed (finished)

**Create New Task Button**

- Prominent action button
- Opens task creation modal

**Task List Table**

- Search by task name or employee ID
- Columns:
  - Task icon and title
  - Description
  - Assigned to (employee name with avatar)
  - Due date
  - Priority (High, Medium, Low)
  - Status dropdown
  - Progress percentage bar
  - Action menu
- Color-coded priorities
- Pagination support

**Create New Task Modal**

- Task Title (required)
- Category/Department dropdown
- Due Date picker (required)
- Description & Key Deliverables textarea
- Assign to Employee:
  - Current assignee with "Lead" label
  - Change link to reassign
  - Quick assign buttons for other employees
- Priority Level buttons (Low, Medium, High)
- Estimated Hours input
- Save as Draft option
- Create & Assign Task button

### 4.4 Leave Request Approval

**Leave Request Statistics**

- Pending Requests (5 - Needs Attention)
- Approved (12 - This month)
- Rejected (3 - This month)
- Total Requests (20 - This month)

**Leave Request List**

- Search by name or employee ID
- Filter dropdowns:
  - All Status
  - All Leave Type
  - Date range (e.g., May 1 - May 31, 2025)
- Columns:
  - Employee avatar and name
  - Leave type icon and name
  - Date range
  - Total days
  - Reason
  - Status badge
  - Action buttons (Approve/Reject)
- Inline approval/rejection buttons
- View Details link
- Action menu
- Pagination

**Leave Request Details Modal**

- Employee information and ID
- Current status badge
- Leave category icon and type
- Date range with calendar icon
- Total duration
- Submission timestamp
- Reason for leave
- Attached documentation (with download)
- File information (size, upload date)
- Action buttons:
  - Close
  - Approve
  - Reject

### 4.5 Post Announcements

**Announcements Feed**

- Search by name or employee ID
- Notification count badge
- Announcement cards:
  - Icon and category
  - Title
  - Priority badge (Urgent, Event, Medium, Draft)
  - Preview text
  - Department and date
  - Navigation arrow

**Edit Announcement Panel**

- Announcement title with draft/status badge
- Last saved indicator
- Category dropdown
- Priority level buttons (Low, Medium, High)
- Target Audience selection:
  - Entire Company
  - IT & Technical Staff
  - Add Department/Group option
- Message Body editor:
  - Rich text formatting (Bold, Italic, Underline, Lists, Code, Links)
  - Markdown support indicator
  - Full text display area
- View Archived Link
- Access to previous announcements

**Create Announcement Modal**

- Modal title with "BROADCAST" label
- Announcement Title (required)
- Category dropdown (required)
- Priority Level buttons (Low, Medium, High - required)
- Target Audience/Distribution Scope:
  - Entire Company tag
  - IT & Technical Staff tag
  - Add Department/Group option
- Announcement Content editor:
  - Rich text toolbar (B, I, U, Lists, Code, Link)
  - Markdown & Rich text support note
  - Full message composition area
- Attachments Section:
  - File upload area (PDF, PNG, DOCX, up to 10MB)
  - Supported file types display
  - Browse File button
  - File attachment display with size
- Notification & Publishing Options:
  - Instant Notification toggle (Send alert to tagged users)
  - Pin Announcement toggle (Stick to top of feed)
  - Both toggles enabled by default
- Action Buttons:
  - Save as Draft
  - Publish Announcement

---

## 5. Requirements Alignment

### Employee Features Coverage

| Requirement | Status | Implementation |
|---|---|---|
| User authentication | ✅ Complete | Activate, Login, Forgot Password, Change Password |
| Dashboard overview | ✅ Complete | Profile, Attendance, Tasks, Announcements, Leave, Inspiration |
| Attendance tracking | ✅ Complete | Real-time check-in/out, History, Summary chart |
| Task management | ✅ Complete | View tasks, Submit proofs, Filter by status, Search |
| Leave request submission | ✅ Complete | Create, Submit, Track status (Pending/Approved/Rejected) |
| Leave tracking | ✅ Complete | View all requests, Filter by status, Attachment support |
| Announcements | ✅ Complete | View feed, Search, Filter, Detail view, Priority badges |
| Profile management | ✅ Complete | View profile, Edit information, Change photo, Account security |

### Manager Features Coverage

| Requirement | Status | Implementation |
|---|---|---|
| Department dashboard | ✅ Complete | Overview, Attendance, Employee Directory, Alerts |
| Employee directory | ✅ Complete | View all employees, Attendance data, Contact info |
| Monitor attendance | ✅ Complete | Real-time status, Distribution chart, History logs |
| Task management | ✅ Complete | Create tasks, Assign to employees, Track progress |
| Task assignment | ✅ Complete | Quick assign, Priority setting, Due dates, Estimated hours |
| Leave request approval | ✅ Complete | Review requests, Approve/Reject, View details, Attachments |
| Announcements | ✅ Complete | Create & publish, Category & priority, Target audience |
| Employee profile access | ✅ Complete | View detailed information, Employment details, Skills |

---

## 6. Key Workflows

### Employee Workflow: Submitting a Task

1. Navigate to Task Status from sidebar
2. View assigned tasks with filter tabs (All, To Do, In Progress, In Review, Completed)
3. Click task to see details
4. Click Submit button to open Submit Task modal
5. Upload proof/attachment (supports PDF, DOCX, XLSX, JPG, PNG, max 10MB)
6. Add optional comments (max 500 characters)
7. Click Submit to send proof to manager
8. Task status updates to "In Review" pending manager approval

### Employee Workflow: Requesting Leave

1. Navigate to Leave Request from sidebar
2. View all previous requests with status filters
3. Click Create New Leave Request
4. Select Leave Type (Vacation, Sick, Personal, Emergency)
5. Choose Start Date and End Date
6. System auto-calculates Total Days
7. Enter Reason for leave
8. Optionally attach supporting document
9. Review available leave balance
10. Click Submit Request
11. Confirmation screen shows Application ID and Pending Approval status
12. Manager notified for review and approval

### Manager Workflow: Assigning a Task

1. Navigate to Task Management from sidebar
2. Click Create New Task button
3. Enter Task Title and Description/Key Deliverables
4. Select Category/Department
5. Set Due Date
6. Choose primary assignee or use Quick Assign
7. Select Priority Level (Low, Medium, High)
8. Enter Estimated Hours
9. Click Create & Assign Task
10. Task appears in team's task list with "To Do" status
11. Employee notified and can begin work

### Manager Workflow: Approving Leave Request

1. Navigate to Leave Requests from sidebar
2. View requests with status filters (Pending, Approved, Rejected)
3. Pending requests show "Needs Attention" count
4. Click View Details to open Leave Request Details modal
5. Review:
   - Leave type and duration
   - Reason for leave
   - Attached documentation
   - Backup officer assignment
   - Approval chain
6. Click Approve (green button) or Reject (red button)
7. Request status updates immediately
8. Employee notified of decision
9. Approved requests reflected in attendance tracking

### Manager Workflow: Broadcasting Announcement

1. Navigate to Post Announcements from sidebar
2. Click Create New Announcement
3. Enter Announcement Title
4. Select Category (HR, IT, Operations, etc.)
5. Set Priority Level (Low, Medium, High Priority)
6. Choose Target Audience (Entire Company, specific department, multiple groups)
7. Compose message using rich text editor (supports Bold, Italic, Lists, Links, Code)
8. Optionally attach files (PDF, PNG, DOCX, max 10MB)
9. Enable Instant Notification to alert employees
10. Enable Pin Announcement to keep at top of feed
11. Click Publish Announcement
12. Announcement broadcasts to target audience immediately
13. Employees see notification and announcement in feed

---

## 7. System Design Features

### Visual Design

- **Color Scheme:** Orange and brown tones with beige/tan cards
- **Layout:** Left sidebar navigation + main content area
- **Cards:** Rounded corners with consistent spacing
- **Status Indicators:** Color-coded badges (Green = Approved, Orange = Pending, Red = Rejected)
- **Icons:** Consistent icons for categories, status, and actions

### User Experience

- **Search Functionality:** Global search in top bar, local search in each module
- **Pagination:** All list views support pagination with entry counts
- **Modals:** Clean modal overlays for detailed views and actions
- **Tooltips:** Hover information for status indicators and actions
- **Notifications:** Toast messages for successful actions
- **Responsive Tables:** Sortable, filterable data tables with action menus

### Data Security

- **Authentication:** Email/Password with role auto-detection
- **Authorization:** Role-based access (Employee vs Manager)
- **Password Security:** Requirements enforced (8+ characters, letters, numbers, symbols)
- **Session Management:** Last login tracking, remember device option
- **File Handling:** Secure file upload with size/type restrictions

### Accessibility

- **Status Badges:** Color + text labels for clarity
- **Form Fields:** Clear labels and placeholders
- **Keyboard Navigation:** Menu and button navigation support
- **Mobile Responsive:** Adaptable layouts for different screen sizes

---

## 8. System Statistics & Data

### Sample Data Sets

**Employee Counts:**

- Total Employees: 24
- Active/Present Today: 22
- On Leave: 1
- Late/Absent: 1

**Task Metrics:**

- All Tasks: 18
- To Do: 5
- In Progress: 7
- Completed: 6

**Leave Request Volume:**

- Pending: 5
- Approved (This Month): 12
- Rejected (This Month): 3
- Total (This Month): 20

**Attendance Metrics:**

- Present: 21 (72%)
- Late: 3 (10%)
- Absent: 1 (3%)
- On Leave: 4 (15%)
- Overall Punctuality Rate: 79%

---

## 9. Technical Specifications

### Supported File Types

| Upload Type | Formats | Max Size |
|---|---|---|
| Task Proofs | PDF, DOCX, XLSX, JPG, PNG | 10MB |
| Leave Attachments | PDF, JPG, PNG | 5MB |
| Announcement Attachments | PDF, PNG, DOCX | 10MB |
| Profile Photos | SVG, JPG, PNG | 10MB |

### Password Requirements

- Minimum 8 characters
- At least one letter
- At least one number
- At least one symbol

### Date & Time Features

- Calendar date pickers with visual selectors
- Relative time displays (e.g., "3 days left", "Today")
- Timestamp tracking for submissions
- Date range support for filtering

### Filtering & Sorting

- Status-based filters (All, Pending, Approved, Rejected, etc.)
- Category/Department filters
- Date range filters
- Sort options (Newest First, etc.)
- Search functionality across all modules

---

## 10. Conclusion

The Employee Management System successfully implements all core requirements for both Employee and Manager roles. The system provides:

- ✅ Comprehensive employee self-service capabilities
- ✅ Efficient manager administrative tools
- ✅ Real-time attendance monitoring
- ✅ Task assignment and tracking
- ✅ Leave request workflow with approval process
- ✅ Company-wide announcements and communications
- ✅ Secure authentication and role-based access

The system is fully functional, user-friendly, and ready for deployment in a production environment.

---

**Documentation Complete**
**Project Status:** Ready for Submission
