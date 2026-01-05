---
id: crm-brd
title: BRD - CRM Module
sidebar_label: BRD
sidebar_position: 1
description: Business Requirements Document for CRM Module - Industrial Park Leasing Management
---

# Business Requirements Document (BRD)
## CRM Module - Industrial Park Leasing Management

---

## 1. Document Overview

### 1.1 Purpose
This document defines the business requirements for the Customer Relationship Management (CRM) module of the IDICO Industrial Park ERP system. The CRM module is designed to manage the complete lifecycle of tenant acquisition and relationship management for industrial park leasing operations.

### 1.2 Scope
The CRM module covers the internal management of:
- Contact and organization management
- Lead generation and qualification
- Opportunity tracking and pipeline management
- Site visit scheduling and execution
- MOU (Memorandum of Understanding) agreement management
- Contract finalization and execution

### 1.3 Stakeholders
- **Sales Team**: Primary users managing tenant relationships
- **Sales Management**: Pipeline oversight and forecasting
- **Legal Team**: MOU and contract review
- **Operations Team**: Site visit coordination
- **Executive Management**: Strategic decision-making and reporting
- **Finance Team**: Contract terms and pricing approval

---

## 2. Business Context

### 2.1 Industrial Park Leasing Business Model
Industrial parks provide land and facilities to businesses (tenants) on a long-term lease basis. The leasing process involves multiple stages from initial contact through contract execution, typically spanning weeks to months.

### 2.2 Current Challenges
- Manual tracking of leads and opportunities across spreadsheets
- Lack of visibility into the sales pipeline
- Difficulty coordinating site visits and follow-ups
- Inefficient document management for MOUs and contracts
- Limited reporting and analytics capabilities
- Inconsistent data about contacts and organizations
- No standardized process for lead qualification
- **Organization changes during sales process**: Difficulty tracking when the contracting organization differs from the initial inquiry organization (e.g., initial contact from Company A, but final contract signed by Company B due to parent/subsidiary relationships or corporate restructuring)

### 2.3 Business Objectives
- Streamline the tenant acquisition process
- Increase visibility into the sales pipeline
- Improve conversion rates at each stage
- Reduce administrative overhead
- Enable data-driven decision making
- Ensure consistent customer experience
- Facilitate collaboration across teams

---

## 3. CRM Process Flow

The CRM module follows a structured workflow representing the tenant acquisition lifecycle:

```
Contact → Organization → Lead → Opportunity → Site Visit → MOU Agreement → Contract
```

### 3.1 Process Stage Definitions

**Contact**: An individual person who represents or is associated with a potential tenant organization. This could be a company representative, decision-maker, or staff member.

**Organization**: A business entity (company, corporation, enterprise) that may become a tenant. Multiple contacts can be associated with a single organization.

**Lead**: A qualified potential tenant (organization) that has expressed interest in leasing space in the industrial park.

**Opportunity**: A specific leasing opportunity with defined requirements (land size, location, timeline, etc.) associated with a lead.

**Site Visit**: A scheduled visit for the prospect to tour available industrial park facilities and land parcels.

**MOU Agreement**: A formal Memorandum of Understanding drafted and negotiated with the prospect before final contract.

**Contract**: The final lease agreement executed between IDICO and the tenant.

### 3.2 Multi-Organization Scenario

**Business Case**: In real-world scenarios, the organization involved at the beginning of the sales process may differ from the organization that ultimately signs the contract. The CRM system must accommodate this complexity.

**Common Scenario Example**:
1. **Initial Contact**: Mr. Nguyen (Contact) from **Company A Ltd.** makes initial inquiry
2. **Lead Stage**: Lead is created and qualified with Company A as the primary organization
3. **Opportunity Stage**: Opportunity progresses with Company A evaluating land parcels
4. **Site Visit**: Company A representatives conduct site visits
5. **MOU Stage**: MOU is drafted and signed with **Company A Ltd.**
6. **Contract Stage**: Final lease contract is signed with **Company B Corp.** (different organization)

**Reasons for Organization Changes**:
- **Parent-Subsidiary Structure**: Initial contact from subsidiary, but parent company signs contract
- **Corporate Restructuring**: Company reorganization during negotiation period
- **Special Purpose Vehicle (SPV)**: Client creates new legal entity specifically for the lease
- **Sister Companies**: Different entities within same corporate group handle different stages
- **Representative/Agent**: Initial contact acts as representative/consultant for actual lessee
- **Joint Venture**: Multiple organizations come together to form new entity for the contract

**System Requirements**:
- Support multiple organizations throughout a single opportunity lifecycle
- Track which organization is involved at each stage
- Maintain complete audit trail of organization changes
- Allow one contact to represent multiple organizations
- Enable smooth handoff between organizations without losing process continuity
- Alert users when organization changes occur
- Require documentation/approval for organization changes at critical stages (MOU to Contract)

---

## 4. Functional Requirements

### 4.1 Contact Management

#### 4.1.1 Core Capabilities
- **Create and store contact records** with the following fields:
  - Full name (required)
  - Job title/position
  - Email address (required)
  - Phone number (required)
  - Mobile number
  - Alternative contact methods (LinkedIn, etc.)
  - Associated organization (link to Organization record)
  - Contact type (Primary Decision Maker, Influencer, Staff, etc.)
  - Preferred language
  - Notes/remarks

- **Contact source tracking**: Record how the contact was acquired (referral, website, trade show, cold outreach, etc.)

- **Communication history**: Log all interactions with the contact
  - Calls, emails, meetings
  - Date, time, subject, outcome
  - Attached files/documents

- **Contact relationships**: Map relationships between contacts within the same or different organizations

- **Multi-organization affiliation**:
  - Link one contact to multiple organizations simultaneously
  - Define role/relationship for each organization association (Employee, Consultant, Director, Representative, Agent, etc.)
  - Track active/inactive status for each organization relationship
  - Record start and end dates for each affiliation
  - Designate primary organization for each contact

#### 4.1.2 Business Rules
- A contact must have at least a name, email, and phone number
- **A contact can be associated with multiple organizations simultaneously** (critical for multi-organization scenarios)
- Each contact-organization relationship must specify the role and relationship type
- Email addresses must be unique per contact
- Duplicate detection should warn users when creating similar contacts
- When a contact is involved in an opportunity, all their associated organizations should be visible to users

### 4.2 Organization Management

#### 4.2.1 Core Capabilities
- **Create and maintain organization records** with:
  - Organization name (required)
  - Business registration number/Tax ID
  - Industry/sector
  - Business type (manufacturing, logistics, R&D, etc.)
  - Organization size (employees, revenue)
  - Headquarters address
  - Website
  - Main phone number
  - Associated contacts (multiple)
  - Parent company (if applicable)
  - Subsidiaries
  - Notes/remarks

- **Organization hierarchy**: Track parent-subsidiary relationships

- **Inter-organization relationships**:
  - Parent company
  - Subsidiary companies (one-to-many)
  - Sister companies (related entities under same parent)
  - Related companies (joint ventures, partnerships)
  - Relationship type (Parent, Subsidiary, Sister, SPV, Agent/Representative, Partner, etc.)
  - Relationship start/end dates
  - Ownership percentage (if applicable)
  - Visual organization chart/hierarchy

- **Organization categorization**:
  - Industry classification
  - Company size tiers
  - Credit rating/financial health indicators

- **Organization history**: Track all activities and touchpoints with the organization

- **Multi-organization opportunity tracking**:
  - View all opportunities where this organization is involved (as initial org, current org, or related org)
  - Track organization's role in each opportunity
  - History of organization replacements/changes

#### 4.2.2 Business Rules
- Organization name and business registration number are required
- Business registration numbers must be unique
- An organization can have multiple contacts with different roles
- At least one contact should be designated as the primary contact
- **Organizations can have relationships with other organizations** (parent/subsidiary/sister companies)
- When an organization is replaced in an opportunity, the system should suggest related organizations (parent, subsidiary, sister companies)
- Circular relationships (e.g., A is parent of B, and B is parent of A) must be prevented

### 4.3 Lead Management

#### 4.3.1 Core Capabilities
- **Lead creation**: Convert an organization to a lead when they express interest

- **Lead information**:
  - **Primary organization** (required) - the organization initially expressing interest
  - **Related organizations** (optional) - other organizations that may be involved (parent, subsidiary, etc.)
  - Primary contact (required)
  - Lead source (website inquiry, referral, event, cold call, etc.)
  - Lead status (New, Contacted, Qualified, Unqualified, Nurturing)
  - Interest level (Hot, Warm, Cold)
  - Estimated land/facility requirements
  - Estimated budget range
  - Desired timeline
  - Specific needs/requirements
  - Competitor information
  - Assigned sales representative (required)
  - Lead score (automated or manual)
  - **Organization notes**: Document if the final contracting entity may differ from primary organization

- **Lead qualification**: Structured process to qualify leads
  - Budget confirmation
  - Authority to make decisions
  - Need validation
  - Timeline assessment

- **Lead scoring**: Assign scores based on:
  - Engagement level
  - Organization size and industry
  - Budget fit
  - Timeline urgency
  - Strategic value

- **Lead nurturing**: Track follow-up activities and campaigns for leads not ready to proceed

- **Lead conversion**: Convert qualified leads to opportunities

#### 4.3.2 Business Rules
- A lead must be associated with a primary organization and primary contact
- **Multiple related organizations can be linked to a single lead** to accommodate corporate structures
- Lead status must be updated within 48 hours of any interaction
- Only qualified leads can be converted to opportunities
- Sales representatives must be assigned to all active leads
- Lead scores should be recalculated automatically based on activities and updates
- During lead qualification, sales reps should identify and document potential organization changes (e.g., if parent company will sign instead of subsidiary)

### 4.4 Opportunity Management

#### 4.4.1 Core Capabilities
- **Opportunity creation**: Create opportunities from qualified leads

- **Opportunity details**:
  - Opportunity name/title (required)
  - Associated lead (required)
  - **Initial organization** (required) - the organization when opportunity was created
  - **Current organization** (required) - the active organization for this opportunity
  - **Organization history** - audit trail of all organization changes with:
    - Previous organization
    - New organization
    - Date of change
    - Reason for change
    - User who made the change
    - Stage when change occurred
    - Supporting documentation
  - **Related organizations** - all organizations involved or potentially involved
  - Primary contact (can change when organization changes)
  - Contact history (track contact changes)
  - Opportunity stage (Qualification, Proposal, Negotiation, Closed Won, Closed Lost)
  - Land/facility requirements:
    - Land size (hectares or m²)
    - Facility type (land only, built facility, build-to-suit)
    - Preferred location/zone
    - Infrastructure requirements
  - Financial information:
    - Estimated deal value
    - Proposed lease term (years)
    - Proposed rental rate
    - Payment terms
  - Timeline:
    - Expected decision date
    - Desired move-in date
  - Probability/confidence level (%)
  - Competition information
  - Sales stage
  - Next steps
  - Assigned sales team

- **Pipeline management**:
  - Visual pipeline/funnel view
  - Drag-and-drop stage progression
  - Stage-specific required fields and actions

- **Proposal management**:
  - Generate and track proposals
  - Version control for proposals
  - Approval workflows

- **Opportunity tracking**:
  - Activity timeline
  - Document repository
  - Email integration
  - Task management

- **Organization change management**:
  - **Change organization** functionality:
    - Select new organization (with suggestions from related orgs)
    - Document reason for change
    - Attach supporting documents
    - Require approval based on stage (e.g., changing org during MOU/Contract stages requires management approval)
    - Notify relevant stakeholders
  - **Organization comparison view**: Compare initial vs current organization details
  - **Alerts**: System alerts when organization changes occur
  - **Relationship indicator**: Visual indicator showing relationship between organizations (parent, subsidiary, etc.)

#### 4.4.2 Business Rules
- Opportunities must progress through defined stages sequentially
- Each stage requires specific information to be completed before advancing
- Opportunity value and probability must be updated when stage changes
- Lost opportunities must include a reason for loss
- Won opportunities automatically trigger contract creation process
- **Organization changes**:
  - An opportunity must always have a current organization
  - Organization changes must be documented with a reason
  - Initial organization cannot be changed (for historical record)
  - Organization changes at MOU or Contract stages require management approval
  - When organization changes, system should verify all related documents are updated
  - System should alert if MOU organization differs from Contract organization
  - All organization changes must be logged in the audit trail
- **Contact flexibility**: Primary contact can change when organization changes, but original contact should remain linked to opportunity history

### 4.5 Site Visit Management

#### 4.5.1 Core Capabilities
- **Site visit scheduling**:
  - Link to opportunity (required)
  - Scheduled date and time
  - Duration
  - Meeting point
  - Attendees from prospect organization
  - IDICO team members (sales rep, site manager, etc.)
  - Specific locations/parcels to visit
  - Special requirements (PPE, transportation, etc.)

- **Pre-visit preparation**:
  - Checklist of materials to prepare
  - Site availability confirmation
  - Safety briefing requirements
  - Presentation materials

- **Visit execution**:
  - Check-in/check-out tracking
  - Visit notes and observations
  - Photo documentation
  - Attendee sign-in sheet
  - Feedback collection

- **Post-visit follow-up**:
  - Visit summary report
  - Action items and next steps
  - Feedback analysis
  - Automatic follow-up task creation

#### 4.5.2 Business Rules
- Site visits must be linked to an active opportunity
- Site visits must be scheduled at least 24 hours in advance
- At least one IDICO representative must be assigned
- Visit summary must be completed within 24 hours of visit
- Opportunity status should be updated based on visit outcome

### 4.6 MOU Agreement Management

#### 4.6.1 Core Capabilities
- **MOU creation**:
  - Link to opportunity (required)
  - **MOU organization** (required) - the specific organization signing this MOU (defaults to current opportunity organization)
  - **Organization lock**: Once MOU is created, the associated organization is locked to this MOU document
  - MOU type (standard, customized)
  - Template selection
  - Key terms:
    - **Parties involved** (IDICO and the MOU organization)
    - Land parcel details
    - Lease duration
    - Rental terms
    - Payment schedule
    - Special conditions
  - MOU draft generation with organization details automatically populated

- **MOU workflow**:
  - Draft status
  - Internal review (sales, legal, finance)
  - Approval workflow
  - Revision tracking
  - Negotiation notes
  - Counter-offers

- **Document management**:
  - Version control
  - Digital signatures
  - Document repository
  - Expiration tracking

- **MOU execution**:
  - Signature tracking (both parties)
  - Execution date
  - Validity period
  - Conditions precedent

#### 4.6.2 Business Rules
- MOU can only be created for opportunities in Proposal or Negotiation stages
- **MOU is locked to the organization specified at creation time** - this organization cannot be changed after MOU is created
- If opportunity organization changes after MOU creation, the MOU remains associated with the original MOU organization
- MOU requires legal team approval before sending to prospect
- All MOU revisions must be tracked and logged
- MOU must have an expiration date
- Executed MOU automatically advances opportunity to Contract stage
- **Multi-organization handling**:
  - If opportunity organization changes before MOU is created, MOU uses new organization
  - If opportunity organization changes after MOU is executed, system alerts users that Contract may be with different organization
  - System must allow viewing which organization signed the MOU vs which organization is current on the opportunity
  - Multiple MOUs can exist for one opportunity if organization changes mid-process (rare but must be supported)

### 4.7 Contract Management

#### 4.7.1 Core Capabilities
- **Contract creation**:
  - Link to MOU and opportunity (required)
  - **Contract organization** (required) - the specific organization signing the final contract
  - **Organization validation**:
    - If contract organization differs from MOU organization, system displays warning/alert
    - Show organization comparison: MOU org vs Contract org
    - Display relationship between organizations (if exists)
    - Require additional approval when organizations differ
    - Require documentation explaining the change
  - **Organization verification checklist**:
    - Confirm legal authority of new organization
    - Verify business registration documents
    - Confirm relationship to MOU organization (if applicable)
    - Document reason for organization change
  - Contract type (lease agreement)
  - Contract terms (inherit from MOU, allow modifications)
  - Final negotiated terms:
    - **Parties involved** (IDICO and the Contract organization)
    - Lease duration
    - Rental rate
    - Payment terms
    - Security deposit
    - Maintenance responsibilities
    - Termination clauses
    - Renewal options

- **Contract workflow**:
  - Draft preparation
  - Internal approvals (legal, finance, executive)
  - External review and negotiation
  - Final approval
  - Execution

- **Contract execution**:
  - Signature collection (digital/physical)
  - Execution date
  - Effective date
  - Contract registration
  - Handover to operations/finance

- **Contract repository**:
  - Centralized storage
  - Search and retrieval
  - Version control
  - Renewal alerts

#### 4.7.2 Business Rules
- Contracts can only be created from executed MOUs
- **Contract organization is locked once contract is created** - cannot be changed after creation
- All contracts require executive approval before execution
- Contract terms cannot deviate significantly from MOU without re-approval
- Executed contracts automatically close opportunity as "Won"
- Contract data is automatically synced to Finance and Operations modules
- **Multi-organization scenario handling**:
  - **Same organization**: If contract organization matches MOU organization, standard approval workflow applies
  - **Different organization**: If contract organization differs from MOU organization:
    - System displays prominent warning during contract creation
    - Requires executive/legal approval (higher authority than standard contracts)
    - Must document reason for organization change (dropdown: Parent Company, Subsidiary, SPV, Corporate Restructuring, Other)
    - Must upload supporting documentation (corporate structure proof, authorization letters, etc.)
    - Extended approval workflow includes legal verification
    - Finance team must be notified for billing setup
  - System maintains clear linkage: Initial Org → MOU Org → Contract Org
  - Audit trail must capture complete organization history from lead to contract
  - Contract organization becomes the "tenant" in downstream systems (Finance, Operations)
- **Organization relationship tracking**: System should automatically detect and display if contract organization is related to MOU organization (parent/subsidiary/sister company)

---

## 5. Key Features & Capabilities

### 5.1 Pipeline Management
- **Visual sales funnel**: Graphical representation of opportunities by stage
- **Pipeline forecasting**: Predicted revenue based on opportunity values and probabilities
- **Win/loss analysis**: Track and analyze why deals are won or lost
- **Sales velocity metrics**: Measure time spent in each stage

### 5.2 Activity & Task Management
- **Task assignment**: Create and assign tasks to team members
- **Activity logging**: Record all customer interactions (calls, emails, meetings)
- **Reminders and notifications**: Automated alerts for follow-ups
- **Calendar integration**: Sync with team calendars

### 5.3 Document Management
- **Centralized repository**: Store all customer-related documents
- **Document templates**: Pre-built templates for proposals, MOUs, contracts
- **Version control**: Track document revisions
- **Access control**: Role-based document access

### 5.4 Reporting & Analytics
- **Standard reports**:
  - Sales pipeline report
  - Lead conversion funnel
  - Sales performance by representative
  - Opportunity win/loss report
  - Average deal cycle time
  - Revenue forecasting
  - Activity reports
  - **Organization change report**: Track opportunities where organizations changed during the sales process
  - **MOU vs Contract organization variance report**: Identify and analyze cases where MOU and Contract organizations differ

- **Custom reports**: Ad-hoc report builder
- **Dashboards**: Role-based dashboards with key metrics
- **Export capabilities**: Export data to Excel, PDF

### 5.5 Search & Filtering
- **Global search**: Search across contacts, organizations, leads, opportunities
- **Advanced filtering**: Multi-criteria filtering for all entities
- **Saved filters**: Save frequently used filter combinations
- **Quick views**: Pre-defined views for common scenarios

### 5.6 Automation & Workflows
- **Automated lead assignment**: Round-robin or rule-based lead distribution
- **Stage progression automation**: Automatic status updates based on triggers
- **Email automation**: Automated email campaigns and follow-ups
- **Approval workflows**: Configurable approval processes for MOUs and contracts
- **Notification rules**: Automated alerts based on events

### 5.7 Collaboration
- **Internal notes**: Team-only comments on records
- **@mentions**: Tag team members in discussions
- **Activity streams**: Real-time updates on record changes
- **Shared calendars**: Team visibility into schedules

### 5.8 Mobile Access
- **Responsive design**: Access CRM from mobile devices
- **Offline capabilities**: Basic functionality without internet
- **Mobile-optimized workflows**: Streamlined processes for on-the-go use

---

## 6. User Roles & Permissions

### 6.1 Role Definitions

**Sales Representative**
- Create and manage contacts, organizations, leads, opportunities
- Schedule site visits
- Create and track activities
- Generate proposals
- View assigned records and team records
- Update opportunity stages

**Sales Manager**
- All Sales Representative permissions
- View and manage entire sales pipeline
- Reassign leads and opportunities
- Approve proposals
- Access all reports and dashboards
- Configure sales processes

**Legal Team**
- View opportunities in MOU/Contract stages
- Review and approve MOUs and contracts
- Edit contract terms
- Upload legal documents
- Track contract status

**Operations Team**
- View site visit schedules
- Coordinate site visits
- Update site visit records
- View opportunity details

**Finance Team**
- View opportunities with financial details
- Approve pricing and payment terms
- Review MOUs and contracts
- Access financial reports

**Executive Management**
- View-only access to all records
- Access to all reports and dashboards
- High-level pipeline overview
- Approve major contracts

**System Administrator**
- Full system access
- User management
- Configuration and customization
- Data import/export
- System maintenance

### 6.2 Permission Model
- **Record-level security**: Users can only access records they own or are assigned to (unless higher role)
- **Field-level security**: Sensitive fields (e.g., pricing) restricted to authorized roles
- **Sharing rules**: Ability to share specific records with other users/teams
- **Approval hierarchies**: Configurable approval chains based on deal value

---

## 7. Integration Requirements

### 7.1 Customer Portal Integration
- Sync customer information between CRM and Customer Portal
- Allow customers to submit inquiries that create leads
- Enable customers to view their opportunity status
- Share documents between systems

### 7.2 Finance/Accounting Module
- Transfer contract data to finance for billing
- Sync pricing and payment terms
- Update payment status from finance to CRM
- Revenue recognition

### 7.3 Operations Module
- Handover tenant information post-contract
- Sync land parcel availability
- Update site visit logistics

### 7.4 Document Management System
- Store and retrieve documents from central repository
- Version control integration
- Electronic signature integration

### 7.5 Email System
- Email tracking and logging
- Email templates
- Mass email campaigns
- Email-to-case for inbound inquiries

### 7.6 Calendar System
- Sync site visits and meetings to team calendars
- Meeting room booking integration

---

## 8. Non-Functional Requirements

### 8.1 Performance
- Page load time < 2 seconds for standard views
- Search results returned within 1 second
- Support for at least 100 concurrent users
- Database optimization for large datasets (100,000+ records)

### 8.2 Security
- Role-based access control (RBAC)
- Data encryption at rest and in transit
- Audit trail for all data changes
- Secure authentication (SSO support)
- Session timeout after inactivity
- IP whitelisting for admin access

### 8.3 Scalability
- Architecture should support growing user base
- Modular design for future feature additions
- API-first design for integrations

### 8.4 Usability
- Intuitive user interface
- Minimal clicks to complete common tasks
- Inline editing capabilities
- Responsive design for all screen sizes
- Consistent UI/UX with other ERP modules

### 8.5 Reliability
- 99.5% system uptime
- Automated backups (daily)
- Disaster recovery plan
- Data redundancy

### 8.6 Compliance
- GDPR compliance for data privacy
- Local data protection regulations
- Audit trail for regulatory requirements
- Data retention policies

### 8.7 Audit & Tracking
- Complete audit trail of all record changes
- User action logging
- Data access logging
- Historical data preservation

---

## 9. Data Migration & Import

### 9.1 Initial Data Migration
- Import existing contacts from spreadsheets/databases
- Import historical leads and opportunities
- Import existing contracts
- Data cleansing and deduplication

### 9.2 Ongoing Import
- Bulk import capabilities for contacts and organizations
- Import validation and error handling
- Template-based import for consistency

---

## 10. Success Metrics & KPIs

### 10.1 Adoption Metrics
- User login frequency
- Feature utilization rates
- Data quality scores (complete records)
- Time spent in system

### 10.2 Business Metrics
- Lead-to-opportunity conversion rate
- Opportunity-to-contract conversion rate
- Average sales cycle time (days from lead to contract)
- Pipeline value and accuracy
- Deal win rate
- Revenue forecasting accuracy
- Customer acquisition cost

### 10.3 Efficiency Metrics
- Time to create and send proposals
- Time to execute MOUs
- Number of site visits per closed deal
- Administrative time reduction

---

## 11. Assumptions & Constraints

### 11.1 Assumptions
- Users have basic computer literacy
- Stable internet connectivity for cloud-based access
- Existing organizational processes can be adapted to the system workflow
- Finance and Operations modules will be developed or exist separately

### 11.2 Constraints
- System must integrate with existing IDICO infrastructure
- Development timeline aligns with overall ERP rollout
- Budget limitations may prioritize certain features in phases
- Compliance with existing IDICO IT policies

---

## 12. Future Enhancements (Out of Scope for Phase 1)

- AI-powered lead scoring and recommendations
- Predictive analytics for deal closure probability
- Advanced marketing automation
- Customer satisfaction surveys and NPS tracking
- Integration with GIS/mapping systems for land parcel visualization
- Mobile app (native iOS/Android)
- WhatsApp/SMS integration
- Advanced territory management
- Commission calculation and tracking

---

## 13. Glossary

| Term | Definition |
|------|------------|
| **Contact** | An individual person representing or associated with a potential tenant organization |
| **Organization** | A business entity that may lease space in the industrial park |
| **Lead** | A qualified potential tenant that has expressed interest |
| **Opportunity** | A specific leasing deal with defined requirements |
| **Site Visit** | A scheduled tour of industrial park facilities |
| **MOU** | Memorandum of Understanding - preliminary agreement before final contract |
| **Contract** | Final executed lease agreement |
| **Pipeline** | Collection of all opportunities at various stages |
| **Conversion Rate** | Percentage of records progressing from one stage to the next |
| **Sales Cycle** | Total time from initial contact to signed contract |
| **Win Rate** | Percentage of opportunities that result in signed contracts |
| **Multi-Organization Scenario** | Business situation where different organizations are involved at different stages of the sales process (e.g., Company A initiates inquiry but Company B signs final contract) |
| **Initial Organization** | The organization associated with an opportunity when it was first created |
| **Current Organization** | The active organization currently associated with an opportunity |
| **MOU Organization** | The specific organization that signed the MOU document |
| **Contract Organization** | The specific organization that signs the final lease contract |
| **SPV (Special Purpose Vehicle)** | A legal entity created specifically for a particular business purpose, such as signing a lease |
| **Related Organizations** | Organizations connected through parent/subsidiary, sister company, or other corporate relationships |

---

## 14. Approval & Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Business Owner | | | |
| Sales Management | | | |
| IT Management | | | |
| Project Manager | | | |

---

**Document Version**: 1.1
**Last Updated**: 2026-01-03
**Next Review Date**: TBD

**Changelog**:
- v1.1 (2026-01-03): Added comprehensive multi-organization scenario support throughout all modules
- v1.0 (2026-01-02): Initial document creation
