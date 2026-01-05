---
id: customer-portal-brd
title: BRD - Customer Portal Module
sidebar_label: BRD
sidebar_position: 1
description: Business Requirements Document for Customer Portal Module
---

# Business Requirements Document (BRD)
## Customer Portal Module - Tenant Self-Service Platform

---

## 1. Document Overview

### 1.1 Purpose
This document defines the business requirements for the Customer Portal module of the IDICO Industrial Park ERP system. The Customer Portal is a self-service web platform that enables tenants (customers) to manage their relationship with IDICO, access contract information, submit service requests, and communicate with park management.

### 1.2 Scope
The Customer Portal covers tenant-facing functionality including:
- User authentication and profile management
- Tenant dashboard with key information and quick actions
- Contract and document viewing and downloading
- Service request (ticket) creation and tracking
- Notification center for announcements and updates
- Industrial park contact directory

**Phase 01 Scope**: This document focuses on Phase 01 features, which establish the foundation for tenant self-service capabilities.

### 1.3 Stakeholders
- **Tenants (Customers)**: Primary users who lease space in industrial parks
- **Tenant Employees**: Staff members of tenant organizations who need portal access
- **IDICO Operations Team**: Respond to service requests and maintain park facilities
- **IDICO Customer Service**: Support tenant inquiries and portal usage
- **IDICO Management**: Monitor tenant satisfaction and service metrics
- **IT Team**: Maintain portal infrastructure and security

---

## 2. Business Context

### 2.1 Industrial Park Tenant Relationship Model
IDICO operates industrial parks with multiple tenant organizations. Each tenant has signed a lease contract and occupies specific land parcels or facilities. Tenants require ongoing support for facilities management, utilities, security, and other operational services.

### 2.2 Current Challenges
- **Manual service requests**: Tenants call or email for service requests, leading to delays and lost requests
- **Limited visibility**: Tenants cannot track status of their service requests
- **Document access**: Tenants must contact IDICO to obtain copies of contracts and documents
- **Communication gaps**: Important announcements may not reach all tenants effectively
- **Contact information**: Tenants don't have easy access to emergency contacts and key personnel
- **24/7 accessibility**: Tenants cannot submit requests or access information outside business hours
- **No centralized portal**: Tenants interact with IDICO through multiple channels (phone, email, in-person)

### 2.3 Business Objectives
- **Improve tenant satisfaction**: Provide convenient self-service capabilities
- **Increase operational efficiency**: Reduce manual processing of tenant requests
- **Enhance transparency**: Give tenants visibility into their contracts, requests, and communications
- **Reduce response time**: Streamline request submission and routing
- **Enable 24/7 access**: Allow tenants to access information and submit requests anytime
- **Reduce support calls**: Empower tenants to find information independently
- **Improve communication**: Ensure important announcements reach all tenants
- **Build stronger relationships**: Create a modern, professional tenant experience

---

## 3. Phase 01 Features Overview

Phase 01 establishes the core self-service functionality for tenants:

1. **Authentication & Profile Management**: Secure login and user profile management
2. **Tenant Dashboard**: Central hub displaying key information and quick actions
3. **Contract & Document Management**: View and download contracts and related documents
4. **Service Request/Ticket System**: Submit and track service requests
5. **Notification Center**: Receive and view announcements and updates
6. **Industrial Park Contact Directory**: Access contact information for IDICO staff and emergency services

---

## 4. Functional Requirements - Phase 01

### 4.1 Authentication & Profile Management

#### 4.1.1 Core Capabilities

**User Registration & Onboarding**:
- **Registration process**:
  - New tenant users register using invitation code provided by IDICO
  - Required fields: Email address, full name, phone number, password
  - Email verification required before account activation
  - Link to tenant organization (based on contract/invitation code)

- **Login methods**:
  - Email + password authentication
  - "Remember me" option
  - "Forgot password" self-service reset
  - Session timeout after 30 minutes of inactivity
  - Multi-device support (can login from multiple devices)

**User Profile Management**:
- **View and edit personal information**:
  - Full name
  - Job title/position
  - Phone number (primary and mobile)
  - Email address (verified)
  - Preferred language (English/Vietnamese)
  - Notification preferences
  - Profile photo (optional)

- **Password management**:
  - Change password functionality
  - Password requirements: minimum 8 characters, mix of letters and numbers
  - Password reset via email verification

- **Organization association**:
  - View organization details (read-only)
  - Organization name
  - Contract number
  - Leased area/facilities
  - Contract status

#### 4.1.2 Business Rules
- Each user account must be associated with an active tenant organization
- Email addresses must be unique across the system
- Users cannot change their organization association (must contact IDICO admin)
- Password reset links expire after 24 hours
- Account is locked after 5 failed login attempts (requires admin unlock or 30-minute cooldown)
- Users must verify email before accessing portal features

---

### 4.2 Tenant Dashboard

#### 4.2.1 Core Capabilities

**Dashboard Layout**:
The dashboard is the landing page after login, providing an at-a-glance view of key information and quick access to common actions.

**Information Widgets**:

1. **Organization Profile Summary**:
   - Organization name
   - Contract number and status (Active, Expiring Soon, Expired)
   - Leased area/facilities overview
   - Contract start and end dates
   - Days until contract expiration (if < 90 days)

2. **My Industrial Park**:
   - Industrial park name
   - Location/address
   - Leased parcel/unit number
   - Visual map showing tenant's location within the park
   - Key facilities available (parking, canteen, meeting rooms, etc.)

3. **Active Contracts Summary**:
   - Number of active contracts
   - Quick list of contract numbers with status
   - Link to full contract details

4. **Pending Service Requests**:
   - Count of open tickets by status:
     - Submitted (awaiting assignment)
     - In-Progress (being worked on)
   - List of 5 most recent pending tickets with:
     - Ticket number
     - Request type
     - Submission date
     - Current status
     - Assigned to (if available)
   - "View All Tickets" link

5. **Recent Notifications**:
   - 5 most recent notifications
   - Unread notification count (badge)
   - Notification preview (title and date)
   - "View All Notifications" link

**Quick Action Buttons**:
- **Create Service Request**: Opens service request creation form
- **View Contracts**: Navigates to contracts page
- **Contact Management**: Navigates to industrial park contact directory
- **View Notifications**: Navigates to notification center

**Welcome Message**:
- Personalized greeting with user name
- Current date and time

#### 4.2.2 Business Rules
- Dashboard data refreshes every 5 minutes
- Pending tickets widget only shows tickets in "Submitted" and "In-Progress" status
- Contract expiration warning appears when < 90 days remain
- Dashboard is accessible only to authenticated users
- Users can only view data related to their organization

---

### 4.3 Contract & Document Management

#### 4.3.1 Core Capabilities

**Contract Listing**:
- **View all contracts** associated with tenant organization:
  - Contract number (sortable, searchable)
  - Contract type (Lease Agreement, Amendment, Renewal, etc.)
  - Effective date
  - Expiration date
  - Status (Active, Expired, Terminating, Pending)
  - Leased area/facilities
  - Actions: View Details, Download PDF

- **Filtering & Sorting**:
  - Filter by status (Active, Expired, All)
  - Filter by contract type
  - Sort by date (newest/oldest)
  - Search by contract number

**Contract Details View**:
- **Contract information**:
  - Contract number
  - Contract type
  - Parties: IDICO and tenant organization
  - Effective date and expiration date
  - Duration (years/months)
  - Leased property details:
    - Industrial park name
    - Parcel/unit number
    - Land size (hectares or m²)
    - Building/facility description (if applicable)
  - Rental terms:
    - Monthly/annual rental rate
    - Payment schedule
    - Payment method
    - Security deposit amount
  - Special terms and conditions (summary)
  - Contract status

- **Related documents**:
  - Original signed contract (PDF)
  - Amendments (if any)
  - Annexes and attachments
  - Site plans/drawings
  - Handover documents

**Document Management**:
- **View documents online**: PDF viewer embedded in portal
- **Download documents**: Download PDF files to local device
- **Document security**: Watermark with "Confidential - For [Organization Name] Only"
- **Document organization**: Documents grouped by contract
- **Document version control**: View document version and date

#### 4.3.2 Business Rules
- Users can only view contracts for their organization
- All contract documents are read-only
- Downloaded documents include watermark with tenant organization name
- Document access is logged for audit trail
- Expired contracts remain viewable for historical reference
- Documents cannot be deleted by tenants
- Large documents (> 10MB) display file size warning before download

---

### 4.4 Service Request / Ticket Management

#### 4.4.1 Core Capabilities

**Service Request Creation**:
- **Request form fields**:
  - **Request category** (required, dropdown):
    - Facility Maintenance (building, infrastructure)
    - Water Supply
    - Electricity/Power
    - IT & Telecommunications
    - Security
    - Waste Management
    - Landscaping/Grounds
    - Access Control/Gate Pass
    - Other
  - **Priority** (required, auto-suggested based on category):
    - Emergency (immediate safety/security issue)
    - High (operations impacted)
    - Medium (inconvenience but not critical)
    - Low (general inquiry or minor issue)
  - **Subject/Title** (required): Brief description (max 200 characters)
  - **Detailed Description** (required): Full description of issue or request (max 2000 characters)
  - **Location** (required):
    - Industrial park (auto-populated from user's organization)
    - Parcel/unit number (auto-populated or selectable)
    - Specific location within parcel (text field)
  - **Attachments** (optional):
    - Upload up to 5 files (images, documents)
    - Supported formats: JPG, PNG, PDF, DOC, DOCX, XLS, XLSX
    - Max 5MB per file
    - Total max 25MB per request
  - **Preferred contact method** (optional): Phone, Email, In-person visit
  - **Requested completion date** (optional): Target date for resolution

- **Request submission**:
  - Validation of required fields
  - Preview before submission
  - Confirmation message with ticket number
  - Email notification sent to requester
  - Automatic assignment to appropriate IDICO team (based on category)

**Service Request Tracking**:
- **My Tickets page**:
  - List all service requests submitted by user's organization
  - Table columns:
    - Ticket number (clickable to view details)
    - Category
    - Subject
    - Submission date
    - Status
    - Priority
    - Last updated
    - Assigned to (IDICO staff name)
  - Default sort: newest first
  - Pagination: 20 tickets per page

- **Filtering & Search**:
  - Filter by status: All, Submitted, In-Progress, Resolved, Closed
  - Filter by category
  - Filter by priority
  - Filter by date range
  - Search by ticket number or subject

- **Ticket status definitions**:
  - **Submitted**: Ticket created, awaiting assignment
  - **In-Progress**: IDICO team working on the request
  - **Resolved**: Issue resolved, awaiting tenant confirmation
  - **Closed**: Request completed and confirmed

**Ticket Details View**:
- **Ticket information**:
  - Ticket number
  - Status (with visual indicator)
  - Category and priority
  - Subject and detailed description
  - Submission date and time
  - Last updated date and time
  - Requested by (user name)
  - Assigned to (IDICO staff)
  - Location details
  - Attached files (downloadable)

- **Activity timeline**:
  - Chronological history of all updates:
    - Status changes
    - Comments/responses from IDICO staff
    - Internal notes (if marked as visible to tenant)
    - Attachments added
    - Resolution details
  - Each entry shows: date/time, user, and description

- **Tenant actions**:
  - **Add comment**: Provide additional information or updates
  - **Upload additional files**: Add supporting documents or photos
  - **Close ticket**: Mark as resolved/completed (if status is "Resolved")
  - **Reopen ticket**: Reopen if issue persists (within 7 days of closure)

**Notifications**:
- Email and in-app notifications when:
  - Ticket is assigned to IDICO staff
  - Status changes
  - IDICO staff adds a comment/response
  - Ticket is resolved
  - Ticket is closed

#### 4.4.2 Business Rules
- Any user from tenant organization can create service requests
- Users can view all tickets created by their organization
- Emergency priority requests trigger immediate email alert to IDICO operations manager
- Tickets cannot be deleted (only closed)
- Closed tickets can be reopened within 7 days
- After 7 days, closed tickets require new ticket creation
- Tickets auto-close after 30 days in "Resolved" status with no tenant response
- File uploads are scanned for viruses before acceptance
- Maximum 5 active emergency tickets per organization at one time
- Ticket numbers are sequential and unique: format "SR-YYYYMMDD-####"

---

### 4.5 Notification Center

#### 4.5.1 Core Capabilities

**Notification Types**:

1. **Ticket Response Notifications**:
   - IDICO staff responded to your ticket
   - Ticket status changed
   - Ticket assigned to staff
   - Ticket resolved
   - Ticket closed

2. **Maintenance Announcement**:
   - Scheduled maintenance (utilities, facilities)
   - Planned outages (water, electricity, internet)
   - Construction/renovation work
   - Site-specific maintenance (affects specific parcels)

3. **General Announcements**:
   - Industrial park events
   - Policy updates
   - Holiday schedules
   - Safety alerts
   - Community news

**Notification Center Interface**:
- **Notification list**:
  - All notifications displayed in reverse chronological order
  - Unread notifications highlighted (bold, background color)
  - Notification preview:
    - Type/category icon
    - Title/subject
    - Date and time
    - Excerpt (first 100 characters)
    - Read/Unread indicator
  - Pagination: 20 notifications per page

- **Filtering**:
  - Filter by type: All, Ticket Response, Maintenance, General
  - Filter by read status: All, Unread, Read
  - Filter by date range

- **Notification details**:
  - Full title
  - Complete message content
  - Date and time posted
  - Related links (e.g., link to ticket, document, etc.)
  - Attachments (if any)
  - Sender information (IDICO department/staff)

**Notification Actions**:
- **Mark as read/unread**: Toggle read status
- **Mark all as read**: Bulk action for all unread notifications
- **Delete**: Remove notification from list (archive, not permanent delete)
- **Quick action**: Direct link to related item (e.g., "View Ticket" button)

**Notification Badge**:
- **Unread count**: Display number of unread notifications in header/menu
- **Real-time updates**: Badge updates when new notifications arrive
- **Maximum display**: Shows "99+" if more than 99 unread

**Notification Preferences** (in user profile):
- **Email notifications**: Enable/disable email for each notification type
- **In-app notifications**: Enable/disable in-app alerts
- **Digest option**: Daily/weekly email digest of all notifications

#### 4.5.2 Business Rules
- Notifications are retained for 90 days
- Users receive notifications relevant to their organization
- Maintenance announcements are sent to all affected tenants (based on location)
- Emergency/urgent notifications override user preferences (always sent)
- Notifications cannot be edited after posting
- Deleted notifications can be recovered within 30 days
- System administrators can send targeted notifications to specific tenants or groups

---

### 4.6 Industrial Park Contact Directory

#### 4.6.1 Core Capabilities

**Contact Directory Structure**:

1. **Management Board**:
   - **Park Manager/Director**:
     - Name and title
     - Photo (optional)
     - Email address
     - Office phone
     - Mobile phone (if provided)
     - Office location
     - Responsibilities
   - **Deputy Manager** (if applicable)
   - **Department Heads**:
     - Operations Manager
     - Facility Manager
     - Customer Service Manager

2. **Operations & Services Contacts**:
   - **Facility Maintenance**:
     - Team contact person
     - Phone number
     - Email
     - Working hours
   - **IT & Telecommunications**:
     - Support contact
     - Helpdesk number
     - Email
   - **Security Department**:
     - Chief Security Officer
     - Security hotline
     - Email
   - **Utilities (Water/Electricity)**:
     - Contact person
     - Phone
     - Email
   - **Waste Management**
   - **Landscaping**

3. **Security & Emergency Contacts**:
   - **Security Office**:
     - Main security line
     - Gate/entrance contact
     - 24/7 availability
   - **Emergency Hotline**:
     - Fire emergency
     - Medical emergency
     - Security emergency
     - 24/7 emergency dispatch number
   - **First Aid Station** (if available):
     - Location
     - Contact number
     - Operating hours

4. **Administrative Contacts**:
   - **Reception/Front Desk**:
     - Phone
     - Email
     - Working hours
   - **Customer Service**:
     - Service desk number
     - Email
     - Working hours
   - **Contract Administration**:
     - Contact for contract inquiries
     - Phone
     - Email

**Contact Display Features**:
- **Searchable directory**: Search by name, department, or keyword
- **Click-to-call**: Phone numbers are clickable (on mobile devices)
- **Click-to-email**: Email addresses open email client
- **Organization chart view** (optional): Visual hierarchy of management structure
- **Download contact**: Export contact to phone (vCard format)
- **Office hours display**: Show working hours for each contact/department
- **Holiday/weekend notice**: Display if contact is unavailable

**Quick Access Emergency Panel**:
- Prominent "Emergency Contacts" section at top of page
- Large, easy-to-read emergency numbers
- Color-coded by emergency type (Fire: red, Medical: blue, Security: yellow)
- One-click call button on mobile

#### 4.6.2 Business Rules
- Contact information is read-only for tenants
- Contact directory is updated by IDICO administrators only
- Emergency hotlines are available 24/7
- Contact information updates are reflected in real-time
- Users must be logged in to view contact directory
- Contact information cannot be downloaded in bulk (prevent spam)
- Emergency contact section is always visible, regardless of user permissions

---

## 5. User Roles & Permissions

### 5.1 Role Definitions

**Tenant User (Standard)**:
- Access dashboard
- View own organization's contracts and documents
- Create and view service requests for own organization
- View and manage notifications
- View industrial park contact directory
- Manage own profile and preferences

**Tenant Administrator**:
- All Tenant User permissions
- View all tickets created by organization members
- Manage organization profile (read-only for most fields)
- Manage user access for organization (invite/deactivate users)
- View all contracts for organization
- Receive administrative notifications

**IDICO Support Staff** (backend/admin panel):
- View and respond to service requests
- Update ticket status
- Post announcements and notifications
- View tenant information
- Access reporting and analytics

**IDICO Administrator** (backend/admin panel):
- All IDICO Support Staff permissions
- Manage tenant accounts
- Manage users and permissions
- Configure system settings
- Manage contact directory
- Access audit logs

### 5.2 Permission Model
- **Organization-based access**: Users can only view data for their organization
- **Role-based permissions**: Different permissions based on user role
- **Self-service profile**: Users can manage their own profile
- **Audit trail**: All actions are logged with user ID and timestamp

---

## 6. Integration Requirements

### 6.1 CRM Module Integration
- **Customer data sync**: Organization and contact information from CRM
- **Contract data sync**: Pull active contracts from CRM Contract Management
- **Tenant account creation**: Triggered when contract is executed in CRM
- **Contact updates**: Bi-directional sync of contact information

### 6.2 Document Management System
- **Document storage**: Store and retrieve contracts and related documents
- **Document security**: Access control and watermarking
- **Version control**: Track document versions and history

### 6.3 Service Request Management System
- **Ticket routing**: Route tickets to appropriate IDICO department/team
- **Work order creation**: Create work orders from service requests (integration with Operations module)
- **Notification system**: Send emails and in-app notifications

### 6.4 Email System
- **Transactional emails**: Account verification, password reset, notifications
- **Notification emails**: Ticket updates, announcements
- **Email templates**: Branded email templates for all communications

### 6.5 Authentication System
- **Single Sign-On (SSO)**: Future integration with enterprise SSO (Phase 2)
- **Session management**: Secure session handling and timeout
- **Multi-factor authentication (MFA)**: Optional 2FA (Phase 2)

---

## 7. Non-Functional Requirements

### 7.1 Performance
- **Page load time**: < 2 seconds for all pages
- **Dashboard load**: < 3 seconds with all widgets
- **Search results**: < 1 second
- **File upload**: Support concurrent uploads, progress indicator
- **Concurrent users**: Support at least 500 concurrent tenant users
- **Mobile performance**: Optimized for mobile devices, responsive design

### 7.2 Security
- **Data encryption**: HTTPS/TLS for all communications
- **Password security**: Hashed passwords (bcrypt or similar)
- **Session security**: Secure session tokens, CSRF protection
- **File upload security**: Virus scanning, file type validation
- **Access control**: Role-based access, organization-level data isolation
- **Audit logging**: Log all user actions and data access
- **XSS protection**: Input sanitization and output encoding
- **SQL injection protection**: Parameterized queries

### 7.3 Usability
- **Intuitive interface**: Easy to navigate for non-technical users
- **Responsive design**: Works on desktop, tablet, and mobile devices
- **Browser compatibility**: Support latest versions of Chrome, Firefox, Safari, Edge
- **Mobile-first design**: Optimized for mobile usage
- **Accessibility**: WCAG 2.1 Level AA compliance
- **Multi-language support**: English and Vietnamese
- **Help & documentation**: Contextual help, user guide, FAQs

### 7.4 Reliability
- **Uptime**: 99.5% availability
- **Backup**: Daily automated backups
- **Data recovery**: RPO (Recovery Point Objective) of 24 hours
- **Error handling**: Graceful error messages, no system crashes
- **Session persistence**: Save draft service requests

### 7.5 Scalability
- **User growth**: Architecture supports growth from 100 to 10,000 users
- **Data volume**: Handle growing volume of tickets, documents, notifications
- **Modular architecture**: Easy to add new features in future phases

### 7.6 Compliance
- **Data privacy**: GDPR compliance, local data protection laws
- **Data residency**: Data stored in-country (Vietnam)
- **Audit trail**: Complete audit trail for compliance
- **Data retention**: Configurable retention policies

---

## 8. User Experience (UX) Requirements

### 8.1 Design Principles
- **Simplicity**: Minimize clicks to accomplish common tasks
- **Clarity**: Clear labels, instructions, and feedback
- **Consistency**: Consistent UI patterns throughout the portal
- **Feedback**: Immediate feedback for user actions (loading indicators, success messages)
- **Error prevention**: Validate inputs, confirm destructive actions

### 8.2 Mobile Experience
- **Touch-friendly**: Large buttons, adequate spacing for touch targets
- **Simplified navigation**: Hamburger menu, bottom navigation bar
- **Mobile-optimized forms**: Auto-focus, appropriate keyboard types
- **Offline capability**: Graceful handling of network issues (Phase 2)

### 8.3 Branding
- **IDICO branding**: Company logo, colors, fonts
- **Professional appearance**: Modern, clean design
- **Trust indicators**: Security badges, contact information

---

## 9. Success Metrics & KPIs

### 9.1 Adoption Metrics
- **User registration rate**: Percentage of tenants who register
- **Active users**: Monthly active users (MAU)
- **Feature utilization**: Usage rate for each feature
- **Mobile vs desktop usage**: Platform breakdown

### 9.2 Engagement Metrics
- **Service request volume**: Number of tickets submitted via portal
- **Ticket resolution time**: Average time from submission to closure
- **User session duration**: Time spent in portal per session
- **Return visit frequency**: How often users return to portal

### 9.3 Satisfaction Metrics
- **User satisfaction score**: Feedback/rating system
- **Portal NPS (Net Promoter Score)**: Would users recommend the portal
- **Support ticket reduction**: Reduction in phone/email support requests
- **Self-service success rate**: Percentage of users who complete tasks without support

### 9.4 Operational Metrics
- **Ticket deflection rate**: Reduction in manual ticket submissions
- **Document download rate**: Number of contract downloads
- **Notification open rate**: Percentage of notifications opened/read
- **Average response time**: IDICO response time to tickets

---

## 10. Assumptions & Constraints

### 10.1 Assumptions
- Tenants have internet access (via desktop or mobile)
- Tenants have basic computer/mobile device literacy
- IDICO provides initial training and onboarding support
- Contract data is accurate and up-to-date in CRM
- IDICO staff are trained to respond to tickets via the system

### 10.2 Constraints
- **Budget**: Development budget limits feature scope to Phase 01
- **Timeline**: Portal must launch within 6 months
- **Integration**: Must integrate with existing CRM and document systems
- **Resources**: Limited IDICO IT staff for ongoing maintenance
- **Legacy systems**: Some data may need manual migration from legacy systems

---

## 11. Phase 01 Scope Summary

### 11.1 In Scope
- User authentication and profile management
- Tenant dashboard with key information and actions
- Contract viewing and document download
- Service request creation and tracking
- Notification center for announcements
- Industrial park contact directory
- Responsive web design (desktop and mobile browsers)
- English and Vietnamese language support
- Email notifications

### 11.2 Out of Scope (Future Phases)
- **Phase 02**:
  - Online payment for rent and utilities
  - Invoice viewing and payment history
  - Meeting room and facility booking
  - Visitor management and gate pass requests
  - Community forum/tenant communication
  - Mobile apps (native iOS/Android)
  - Single Sign-On (SSO) integration
  - Two-factor authentication (2FA)

- **Phase 03**:
  - Tenant-to-tenant marketplace
  - Energy consumption monitoring
  - Sustainability reporting
  - Integration with IoT devices
  - Predictive maintenance alerts
  - Advanced analytics and reporting for tenants

---

## 12. Data Requirements

### 12.1 Data Migration
- Import tenant organization data from CRM
- Import active contracts from CRM
- Import contact information for industrial park staff
- Import existing service requests (optional, if digitized)

### 12.2 Data Synchronization
- Real-time sync of contract updates from CRM
- Daily sync of tenant organization information
- Real-time ticket status updates
- Immediate notification delivery

### 12.3 Data Retention
- Service requests: 3 years
- Notifications: 90 days (in-app), permanent (email)
- Audit logs: 7 years
- User activity logs: 2 years
- Contracts: Permanent (while active + 10 years after expiration)

---

## 13. Glossary

| Term | Definition |
|------|------------|
| **Tenant** | An organization that has leased space in an IDICO industrial park |
| **Service Request** | A request submitted by a tenant for maintenance, support, or services (also called "ticket") |
| **Ticket** | Synonym for service request; a trackable request with a unique ID |
| **Contract** | The lease agreement between IDICO and a tenant organization |
| **Industrial Park** | A designated area developed by IDICO for industrial and commercial tenants |
| **Parcel** | A specific plot of land within an industrial park leased to a tenant |
| **Dashboard** | The main landing page showing summary information and quick actions |
| **Notification** | A message sent to tenants via the portal and/or email |
| **PIC (Person In Charge)** | IDICO staff member responsible for a specific function or area |
| **Emergency Hotline** | 24/7 phone number for urgent issues (fire, security, medical) |
| **Customer Portal** | The tenant-facing web application (this system) |

---

## 14. Approval & Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Business Owner | | | |
| Customer Service Manager | | | |
| IT Management | | | |
| Project Manager | | | |

---

**Document Version**: 1.0
**Last Updated**: 2026-01-05
**Next Review Date**: TBD

**Changelog**:
- v1.0 (2026-01-05): Initial Phase 01 BRD creation
