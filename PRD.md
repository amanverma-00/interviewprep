# 📋 PRD: Mentor Connect — One-to-One Paid Mentorship System

**Product**: Graphora (InterviewPrep Platform)  
**Feature**: Mentor Connect  
**Version**: 1.0  
**Author**: Engineering Team  
**Date**: February 18, 2026  
**Status**: Draft

---

## Table of Contents

1. [Overview](#1-overview)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [User Personas](#4-user-personas)
5. [Feature Scope](#5-feature-scope)
6. [User Flows](#6-user-flows)
7. [Detailed Requirements](#7-detailed-requirements)
8. [Data Models](#8-data-models)
9. [API Specification](#9-api-specification)
10. [Frontend Pages & Components](#10-frontend-pages--components)
11. [Third-Party Integrations](#11-third-party-integrations)
12. [Monetization & Pricing](#12-monetization--pricing)
13. [Tech Architecture](#13-tech-architecture)
14. [Security & Compliance](#14-security--compliance)
15. [Phased Rollout Plan](#15-phased-rollout-plan)
16. [Open Questions & Risks](#16-open-questions--risks)

---

## 1. Overview

**Mentor Connect** is a paid mentorship feature that allows students on Graphora to book one-to-one guidance sessions with experienced industry mentors. Mentors are verified professionals (currently working at top tech companies) who offer:

- **Video call sessions** (30-minute or 60-minute slots)
- **Real-time text & code messaging** (within a booking context)
- **Session recordings** (optional, for premium plans)
- **Post-session notes & action items**

Students pay per session or subscribe to bundled plans that include mentor minutes. Mentors earn revenue share from each session.

---

## 2. Problem Statement

Students preparing for tech interviews often lack:

- **Personalized guidance** — Generic DSA sheets and YouTube tutorials don't address individual weaknesses
- **Mock interview feedback** — Automated judging can't replicate a real interviewer's perspective
- **Career direction** — Students don't know which topics to prioritize for their target companies
- **Accountability** — Self-study without mentorship leads to inconsistent preparation

**Mentor Connect** bridges this gap by connecting students directly with professionals who have cleared interviews at FAANG, startups, and product-based companies.

---

## 3. Goals & Success Metrics

### Primary Goals

| Goal | Metric | Target (Month 3) |
|------|--------|-------------------|
| Revenue generation | Monthly Recurring Revenue (MRR) | ₹50,000+ |
| Student engagement | Sessions booked per week | 30+ sessions/week |
| Mentor supply | Active verified mentors | 15+ mentors |
| Session quality | Average session rating | ≥ 4.5 / 5.0 |
| Retention | Students booking repeat sessions | ≥ 40% repeat rate |

### Secondary Goals

- Reduce student drop-off on the platform
- Create a flywheel: more mentors → more students → more revenue → attract better mentors
- Build a community reputation for high-quality mentorship

---

## 4. User Personas

### 4.1 Student (Mentee)

- **Who**: CS/IT undergrad or early-career professional (0–3 years)
- **Needs**: Personalized interview prep, code reviews, resume guidance, system design walkthroughs
- **Willing to pay**: ₹300–₹1,500 per session depending on mentor seniority
- **Tech comfort**: High — comfortable with video calls, chat, and code editors

### 4.2 Mentor

- **Who**: SDE-1/SDE-2 or higher at a product company (2–10+ years experience)
- **Motivation**: Side income, giving back to the community, building personal brand
- **Expects**: Fair revenue split, easy scheduling, no admin headaches
- **Time commitment**: 2–10 hours per week

### 4.3 Platform Admin

- **Who**: Graphora team member
- **Needs**: Mentor verification, dispute resolution, revenue tracking, quality monitoring

---

## 5. Feature Scope

### 5.1 In Scope (v1.0)

| Module | Features |
|--------|----------|
| **Mentor Discovery** | Browse mentors, filter by expertise/company/price, view profiles, read reviews |
| **Booking System** | Select time slot, choose duration (30/60 min), set agenda, confirm booking |
| **Payments** | Razorpay integration (INR), per-session payment, automatic mentor payout |
| **Video Calls** | Jitsi Meet (self-hosted or cloud) — no external account needed, in-browser |
| **Messaging** | Real-time chat (Socket.IO), code block sharing, file attachments |
| **Reviews & Ratings** | Post-session rating (1–5 stars), written review, public on mentor profile |
| **Mentor Dashboard** | Manage availability, view bookings, track earnings, session history |
| **Student Dashboard** | View upcoming sessions, past sessions, message history, invoices |
| **Notifications** | Email + in-app for booking confirmations, reminders, cancellations |
| **Admin Panel** | Mentor verification queue, dispute management, revenue analytics |

### 5.2 Out of Scope (Future)

- Group mentorship sessions
- AI-powered mentor matching
- Screen sharing / collaborative code editor in calls
- Mentor certification / badges
- Mobile app (React Native)
- Recurring weekly bookings (auto-scheduling)
- Multi-currency support (initially INR only)

---

## 6. User Flows

### 6.1 Student Books a Session

```
Student lands on /mentors
    → Browses mentor cards (photo, name, company, expertise, rating, price)
    → Clicks "View Profile" on a mentor
    → Sees full profile: bio, experience, reviews, availability calendar
    → Selects a date and available time slot
    → Chooses duration: 30 min (₹X) or 60 min (₹Y)
    → Writes agenda/topic for the session
    → Clicks "Confirm & Pay"
    → Razorpay checkout opens → payment processed
    → Booking confirmed → email sent to both parties
    → 15 min before session: reminder notification
    → At scheduled time: "Join Call" button appears on dashboard
    → Jitsi video call starts (in-browser, no download)
    → During/after call: messaging thread is available
    → After session: student rates & reviews the mentor
```

### 6.2 Mentor Onboarding

```
User (with existing account) navigates to /become-a-mentor
    → Fills application form:
        - Headline, Bio
        - Expertise areas (DSA, System Design, Frontend, etc.)
        - Work experience (current company, role, years)
        - Past companies
        - Availability slots per week
        - Pricing (30-min and 60-min rates)
    → Submits application
    → Admin reviews and verifies (checks LinkedIn, experience claims)
    → If approved: mentor profile goes live, user role gets `mentor` capability
    → Mentor receives welcome email with tips
```

### 6.3 Messaging Flow

```
After booking is confirmed:
    → A conversation thread is auto-created between student and mentor
    → Both parties can message before/during/after the session
    → Messages support: plain text, code blocks (syntax highlighted), file attachments
    → Chat persists indefinitely (tied to the booking)
    → Unread badge count shown in navbar
```

### 6.4 Cancellation Flow

```
Student or Mentor cancels:
    → If > 24 hours before session: full refund to student
    → If 4–24 hours before: 50% refund
    → If < 4 hours before: no refund (unless mentor cancels — always full refund)
    → Cancellation reason required
    → Both parties notified via email
    → Mentor's cancellation rate tracked (high rate = warning / deactivation)
```

---

## 7. Detailed Requirements

### 7.1 Mentor Discovery Page (`/mentors`)

**Layout**: Grid of mentor cards with filters on the left sidebar.

**Filters**:
| Filter | Type | Options |
|--------|------|---------|
| Expertise | Multi-select checkboxes | DSA, System Design, Frontend, Backend, ML/AI, DevOps, Mobile |
| Company | Searchable dropdown | Microsoft, Google, Amazon, Meta, etc. |
| Price Range | Range slider | ₹0 – ₹3,000 |
| Rating | Min rating selector | 3+, 4+, 4.5+ |
| Availability | Date picker | "Available on [date]" |

**Mentor Card** displays:
- Avatar / photo
- Name, headline (e.g., "SDE-2 at Google")
- Expertise tags (pills)
- Rating (stars + count)
- Starting price ("From ₹499/30min")
- "Book Session" CTA button
- Online/offline indicator

**Sorting**: Relevance (default), Price Low→High, Price High→Low, Rating, Most Sessions

### 7.2 Mentor Profile Page (`/mentors/:slug`)

**Sections**:
1. **Header**: Avatar, name, headline, company logo, verification badge
2. **About**: Bio (up to 2000 chars), years of experience, current role
3. **Expertise**: Tag pills with proficiency indicators
4. **Experience Timeline**: Current and past companies with roles
5. **Availability Calendar**: Interactive week-view calendar showing open slots (green = available, gray = booked)
6. **Pricing Card**: 30-min and 60-min rates, "Book Now" button
7. **Reviews Section**: Student reviews with rating, text, and date — paginated
8. **Stats Bar**: Total sessions, average rating, response time, repeat student rate

### 7.3 Booking Flow

**Step 1 — Select Slot**:
- Interactive calendar (week view, scrollable)
- Mentor's timezone displayed + auto-conversion to student's local time
- Only future available slots shown
- Slots are 30-min blocks; 60-min bookings occupy 2 consecutive blocks

**Step 2 — Session Details**:
- Duration selection (30 or 60 min)
- Topic dropdown: "DSA Problem Solving", "System Design", "Resume Review", "Mock Interview", "Career Guidance", "Custom"
- Agenda text area (optional, max 500 chars)
- Agreement checkbox: "I agree to the cancellation policy"

**Step 3 — Payment**:
- Razorpay Checkout (embedded or redirect)
- Payment summary: session fee + platform fee (if any) + GST
- Saved payment methods for returning users
- On success → booking confirmed, emails triggered
- On failure → retry or abandon

**Step 4 — Confirmation**:
- Booking details summary
- "Add to Calendar" button (Google Calendar / iCal)
- "Message Your Mentor" link
- Booking ID for reference

### 7.4 Video Call System

**Provider**: Jitsi Meet (free, open-source, no account needed)

**Implementation**:
- Generate unique Jitsi room URL per booking: `https://meet.jit.si/graphora-{bookingId}-{hash}`
- Embed Jitsi in an iframe or use Jitsi IFrame API for tighter control
- "Join Call" button appears 10 minutes before scheduled time
- Auto-end call 5 minutes after scheduled end time (grace period)
- Optional: record session (stored on server or cloud, accessible via dashboard)

**Call Features** (provided by Jitsi):
- Video + Audio
- Screen sharing
- Chat within call
- Mute / camera toggle
- Speaker view / gallery view

### 7.5 Real-Time Messaging System

**Tech**: Socket.IO (already common in MERN stacks)

**Features**:
| Feature | Description |
|---------|-------------|
| Text messages | Plain text with markdown support |
| Code blocks | Syntax-highlighted code snippets (specify language) |
| File attachments | Images, PDFs, docs (max 10MB, stored in cloud storage) |
| Read receipts | "Seen" indicator with timestamp |
| Typing indicators | "Mentor is typing..." |
| Unread count | Badge on navbar chat icon |
| Message history | Paginated, infinite scroll, sorted newest-last |
| Notifications | In-app toast + email digest for unread messages |

**Conversation Rules**:
- A conversation is automatically created when a booking is confirmed
- Only the mentor and the booked student can participate (1:1)
- Messages persist after session completion (for reference)
- `type: 'mentor'` differentiates from potential future group/direct chats

### 7.6 Mentor Dashboard (`/mentor/dashboard`)

**Sections**:

1. **Overview Stats Cards**:
   - Total earnings (this month / all time)
   - Total sessions completed
   - Average rating
   - Response time (avg time to first message)

2. **Upcoming Sessions** (list):
   - Student name, avatar
   - Date, time, duration
   - Topic/agenda
   - "Join Call" / "Message" / "Cancel" actions

3. **Availability Manager**:
   - Weekly calendar grid
   - Toggle slots on/off per day
   - Set recurring availability
   - Vacation mode (disable all bookings temporarily)

4. **Earnings & Payouts**:
   - Earnings breakdown per session
   - Payout history
   - Bank account / UPI details for payouts
   - Pending payouts

5. **Reviews Received**:
   - All student reviews with ratings
   - Reply to reviews (optional)

### 7.7 Student Mentor Dashboard (`/dashboard/mentoring`)

**Sections**:

1. **Upcoming Sessions**:
   - Mentor name, avatar, company
   - Date, time, countdown
   - "Join Call" / "Message" / "Cancel" actions

2. **Past Sessions**:
   - Session history with mentor, date, rating given
   - "Re-book" button
   - Download recording (if available)

3. **My Conversations**:
   - List of active mentor chat threads
   - Unread message indicators
   - Click to open chat

4. **Invoices**:
   - Payment history
   - Download receipt (PDF)

### 7.8 Review System

**After session completion** (status changes to `completed`):
- Student receives prompt to rate (in-app + email)
- Rating: 1–5 stars (required)
- Written review: text area (optional, max 1000 chars)
- Review is public on mentor's profile
- Mentor can see all reviews but cannot delete them
- Reported reviews flagged for admin moderation

### 7.9 Notification System

| Event | In-App | Email | Push (Future) |
|-------|--------|-------|----------------|
| Booking confirmed | ✅ | ✅ | ❌ |
| Session reminder (15 min before) | ✅ | ✅ | ❌ |
| Session cancelled | ✅ | ✅ | ❌ |
| New message received | ✅ | ✅ (digest) | ❌ |
| Payment received (mentor) | ✅ | ✅ | ❌ |
| Review received (mentor) | ✅ | ✅ | ❌ |
| Mentor application approved | ✅ | ✅ | ❌ |
| Payout processed | ✅ | ✅ | ❌ |

---

## 8. Data Models

### 8.1 Mentor (Already Exists — Enhancement Needed)

**Current model** at `backend/models/mentor.ts` — enhancements:

```typescript
// Additional fields to add:
{
    slug: { type: String, unique: true, index: true },           // URL-friendly name
    avatar: { type: String },                                    // Profile photo URL
    linkedinUrl: { type: String },                               // For verification
    applicationStatus: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    applicationNote: { type: String },                           // Admin note on rejection
    cancellationRate: { type: Number, default: 0 },              // Track reliability
    repeatStudentRate: { type: Number, default: 0 },             // Loyalty metric
    languages: [{ type: String }],                               // Spoken languages
    sessionTopics: [{                                            // What they offer
        type: String,
        enum: ['DSA Problem Solving', 'System Design', 'Resume Review', 
               'Mock Interview', 'Career Guidance', 'Frontend Development', 
               'Backend Development', 'ML/AI Guidance']
    }],
    payoutDetails: {
        method: { type: String, enum: ['bank_transfer', 'upi'] },
        upiId: { type: String },
        bankAccount: {
            accountNumber: { type: String },
            ifscCode: { type: String },
            accountHolder: { type: String }
        }
    }
}
```

### 8.2 Booking (Already Exists — Enhancement Needed)

**Current model** at `backend/models/booking.ts` — enhancements:

```typescript
// Additional fields to add:
{
    bookingId: { type: String, unique: true },                   // Human-readable ID: "GRP-20260218-001"
    jitsiRoomName: { type: String },                             // Generated unique room name
    reminderSent: { type: Boolean, default: false },             // Track if reminder was sent
    sessionNotes: {                                              // Shared notes (mentor writes)
        content: { type: String },
        updatedAt: { type: Date }
    },
    refund: {
        amount: { type: Number },
        reason: { type: String },
        processedAt: { type: Date },
        razorpayRefundId: { type: String }
    },
    platformFee: { type: Number },                               // Graphora's cut
    mentorPayout: {                                              // Mentor's share
        amount: { type: Number },
        status: { type: String, enum: ['pending', 'processing', 'completed', 'failed'] },
        processedAt: { type: Date },
        transactionId: { type: String }
    }
}
```

### 8.3 Conversation & Message (Already Exists — Minor Enhancements)

**Current model** at `backend/models/message.ts` — enhancements:

```typescript
// Conversation: Add mentor-specific fields
{
    mentorProfile: { type: Schema.Types.ObjectId, ref: 'Mentor' },  // Link to mentor
    isArchived: { type: Boolean, default: false },                   // Archive old convos
    pinnedMessage: { type: Schema.Types.ObjectId, ref: 'Message' }   // Pin important msg
}

// Message: Add reaction support
{
    reactions: [{
        emoji: { type: String },
        user: { type: Schema.Types.ObjectId, ref: 'User' }
    }],
    replyTo: { type: Schema.Types.ObjectId, ref: 'Message' },        // Thread replies
    isEdited: { type: Boolean, default: false },
    editedAt: { type: Date }
}
```

### 8.4 MentorReview (New Model)

```typescript
const MentorReviewSchema = new Schema({
    booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: true, unique: true },
    mentor: { type: Schema.Types.ObjectId, ref: 'Mentor', required: true },
    student: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, maxLength: 1000 },
    isPublic: { type: Boolean, default: true },
    isReported: { type: Boolean, default: false },
    reportReason: { type: String },
    mentorReply: {
        content: { type: String, maxLength: 500 },
        repliedAt: { type: Date }
    }
}, { timestamps: true });

MentorReviewSchema.index({ mentor: 1, createdAt: -1 });
MentorReviewSchema.index({ student: 1 });
```

### 8.5 Notification (New Model)

```typescript
const NotificationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: {
        type: String,
        enum: [
            'booking_confirmed', 'booking_cancelled', 'booking_reminder',
            'session_started', 'session_completed',
            'new_message', 'message_digest',
            'payment_received', 'payout_processed',
            'review_received', 'mentor_approved', 'mentor_rejected'
        ],
        required: true
    },
    title: { type: String, required: true },
    message: { type: String, required: true },
    data: { type: Schema.Types.Mixed },       // Flexible payload (bookingId, mentorId, etc.)
    isRead: { type: Boolean, default: false },
    readAt: { type: Date },
    actionUrl: { type: String }               // Deep link to relevant page
}, { timestamps: true });

NotificationSchema.index({ user: 1, isRead: 1, createdAt: -1 });
```

### 8.6 Payout (New Model)

```typescript
const PayoutSchema = new Schema({
    mentor: { type: Schema.Types.ObjectId, ref: 'Mentor', required: true },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],   // Sessions included
    amount: { type: Number, required: true },
    platformFee: { type: Number, required: true },
    netAmount: { type: Number, required: true },                    // amount - platformFee
    currency: { type: String, default: 'INR' },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'failed'],
        default: 'pending'
    },
    method: { type: String, enum: ['bank_transfer', 'upi'] },
    transactionId: { type: String },
    processedAt: { type: Date },
    failureReason: { type: String },
    period: {
        start: { type: Date },
        end: { type: Date }
    }
}, { timestamps: true });

PayoutSchema.index({ mentor: 1, status: 1 });
PayoutSchema.index({ status: 1, processedAt: 1 });
```

---

## 9. API Specification

### 9.1 Mentor APIs

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/mentors` | List mentors with filters & pagination | Protected |
| `GET` | `/api/mentors/:slug` | Get mentor profile by slug | Protected |
| `POST` | `/api/mentors/apply` | Submit mentor application | Protected |
| `PUT` | `/api/mentors/profile` | Update own mentor profile | Mentor |
| `PUT` | `/api/mentors/availability` | Update availability slots | Mentor |
| `PUT` | `/api/mentors/toggle-bookings` | Toggle accepting bookings | Mentor |
| `GET` | `/api/mentors/dashboard/stats` | Get mentor dashboard stats | Mentor |
| `GET` | `/api/mentors/:id/reviews` | Get reviews for a mentor | Protected |

### 9.2 Booking APIs

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/bookings` | Create a new booking | Protected |
| `GET` | `/api/bookings` | Get user's bookings (student or mentor) | Protected |
| `GET` | `/api/bookings/:id` | Get booking details | Protected |
| `PUT` | `/api/bookings/:id/cancel` | Cancel a booking | Protected |
| `PUT` | `/api/bookings/:id/complete` | Mark session as completed | Mentor |
| `POST` | `/api/bookings/:id/review` | Submit a review for the session | Protected |
| `GET` | `/api/bookings/:id/meeting-link` | Get Jitsi meeting link | Protected |
| `PUT` | `/api/bookings/:id/notes` | Add session notes | Mentor |

### 9.3 Payment APIs

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/payments/create-order` | Create Razorpay order for a booking | Protected |
| `POST` | `/api/payments/verify` | Verify Razorpay payment signature | Protected |
| `POST` | `/api/payments/webhook` | Razorpay webhook handler | Webhook Secret |
| `GET` | `/api/payments/invoices` | Get user's payment history | Protected |
| `GET` | `/api/payouts` | Get mentor's payout history | Mentor |

### 9.4 Messaging APIs

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/conversations` | List user's conversations | Protected |
| `GET` | `/api/conversations/:id/messages` | Get messages in a conversation | Protected |
| `POST` | `/api/conversations/:id/messages` | Send a message (REST fallback) | Protected |
| `PUT` | `/api/messages/:id/read` | Mark message as read | Protected |

**Socket.IO Events**:

| Event (Client → Server) | Payload | Description |
|--------------------------|---------|-------------|
| `join_conversation` | `{ conversationId }` | Join a chat room |
| `send_message` | `{ conversationId, content, type, codeBlock? }` | Send message |
| `typing_start` | `{ conversationId }` | Notify typing |
| `typing_stop` | `{ conversationId }` | Stop typing |
| `mark_read` | `{ conversationId, messageId }` | Mark as read |

| Event (Server → Client) | Payload | Description |
|--------------------------|---------|-------------|
| `new_message` | `{ message }` | New message received |
| `user_typing` | `{ userId, conversationId }` | Someone is typing |
| `user_stopped_typing` | `{ userId, conversationId }` | Stopped typing |
| `message_read` | `{ messageId, readBy }` | Read receipt |
| `unread_count` | `{ conversationId, count }` | Updated unread count |

### 9.5 Notification APIs

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/notifications` | Get user's notifications (paginated) | Protected |
| `PUT` | `/api/notifications/:id/read` | Mark notification as read | Protected |
| `PUT` | `/api/notifications/read-all` | Mark all as read | Protected |
| `GET` | `/api/notifications/unread-count` | Get unread notification count | Protected |

### 9.6 Admin APIs

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/admin/mentor-applications` | List pending mentor applications | Admin |
| `PUT` | `/api/admin/mentors/:id/approve` | Approve mentor application | Admin |
| `PUT` | `/api/admin/mentors/:id/reject` | Reject with reason | Admin |
| `GET` | `/api/admin/bookings` | All bookings with filters | Admin |
| `GET` | `/api/admin/revenue` | Revenue analytics dashboard | Admin |
| `GET` | `/api/admin/reported-reviews` | Flagged reviews for moderation | Admin |

---

## 10. Frontend Pages & Components

### 10.1 New Pages

| Page | Route | Description |
|------|-------|-------------|
| Mentor Discovery | `/mentors` | Grid of mentor cards with filters |
| Mentor Profile | `/mentors/:slug` | Full mentor profile + booking widget |
| Booking Checkout | `/mentors/:slug/book` | Slot selection + payment |
| Booking Confirmation | `/bookings/:id/confirmed` | Success page |
| Video Call Room | `/call/:bookingId` | Jitsi iframe embed |
| Chat / Messaging | `/messages` | Full-page messaging UI |
| Chat Thread | `/messages/:conversationId` | Individual conversation |
| Mentor Application | `/become-a-mentor` | Application form |
| Mentor Dashboard | `/mentor/dashboard` | Mentor stats, bookings, earnings |
| Mentor Availability | `/mentor/availability` | Availability manager |
| Student Mentoring | `/dashboard/mentoring` | Student's mentoring section |

### 10.2 New Components

| Component | Description |
|-----------|-------------|
| `MentorCard` | Card showing mentor summary (used in grid) |
| `MentorProfileHeader` | Hero section of mentor profile |
| `AvailabilityCalendar` | Interactive week-view slot picker |
| `BookingWidget` | Sidebar widget for selecting slot + duration |
| `PaymentSummary` | Order summary before payment |
| `RazorpayCheckout` | Razorpay button integration |
| `JitsiMeet` | Jitsi IFrame wrapper component |
| `ChatSidebar` | List of conversations with previews |
| `ChatWindow` | Message thread with input area |
| `MessageBubble` | Individual message (text, code, file) |
| `CodeBlockMessage` | Syntax-highlighted code in chat |
| `ReviewCard` | Individual review display |
| `ReviewForm` | Post-session review modal |
| `NotificationBell` | Navbar notification dropdown |
| `NotificationItem` | Individual notification entry |
| `EarningsChart` | Mentor earnings over time (Chart.js) |
| `SessionTimer` | Countdown to upcoming session |

### 10.3 Updated Components

| Component | Change |
|-----------|--------|
| `Navbar` | Add "Mentors" link, notification bell with unread count, chat icon |
| `Dashboard` | Add "Mentoring" tab/section |
| `Settings` | Add payout details for mentors |
| `UserProfile` | Show "Mentor" badge if user is a verified mentor |

---

## 11. Third-Party Integrations

### 11.1 Razorpay (Payments)

- **Purpose**: Payment processing for session bookings
- **Integration**: Razorpay Standard Checkout (client-side) + Orders API (server-side)
- **Flow**:
  1. Backend creates a Razorpay Order (`POST /v1/orders`)
  2. Frontend opens checkout with `order_id`
  3. On success, frontend sends `payment_id + signature` to backend
  4. Backend verifies signature and confirms booking
- **Webhooks**: Handle `payment.captured`, `payment.failed`, `refund.processed`
- **Cost**: 2% per transaction (standard Razorpay pricing)
- **Requirements**: Razorpay account, API Key + Secret in `.env`

```env
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=...
```

### 11.2 Jitsi Meet (Video Calls)

- **Purpose**: Free, in-browser video calling (no user account needed)
- **Integration**: Jitsi IFrame API (`@jitsi/react-sdk` or manual iframe)
- **Room generation**: `graphora-{bookingId}-{shortHash}` (unique per booking)
- **Security**: JWT-based room tokens (optional, prevents unauthorized joins)
- **Hosting**: Use public `meet.jit.si` initially; self-host via Docker for scale
- **No cost** for public Jitsi; Docker self-hosting = server cost only

### 11.3 Socket.IO (Real-Time Messaging)

- **Purpose**: Real-time bidirectional communication for chat
- **Integration**: `socket.io` (server) + `socket.io-client` (frontend)
- **Auth**: JWT token sent in handshake, validated on connection
- **Namespaces**: `/chat` for messaging, `/notifications` for real-time alerts
- **Scaling**: Redis adapter for multi-instance support (future)

### 11.4 Nodemailer (Emails)

- **Already integrated** in the project
- **New templates needed**:
  - Booking confirmation (student + mentor)
  - Session reminder (15 min before)
  - Cancellation notice
  - Review request (post-session)
  - Mentor application approved/rejected
  - Payout processed

### 11.5 Cloud Storage (File Uploads in Chat)

- **Options**: AWS S3, Cloudinary, or Firebase Storage
- **Recommendation**: Cloudinary (free tier: 25GB, easy image optimization)
- **Used for**: Chat file attachments, mentor profile photos, session recordings (future)

---

## 12. Monetization & Pricing

### 12.1 Revenue Model

**Per-session payment** with platform commission:

| Item | Amount |
|------|--------|
| Mentor sets their own prices | ₹300 – ₹3,000 per session |
| Platform commission | **20%** of session price |
| Payment gateway fee | ~2% (Razorpay) |
| Mentor receives | **78%** of session price |

**Example**: Mentor charges ₹1,000/hr → Student pays ₹1,000 → Razorpay takes ₹20 → Graphora keeps ₹200 → Mentor receives ₹780

### 12.2 Subscription Tie-In

Integrate with existing subscription plans:

| Plan | Mentor Benefits |
|------|----------------|
| **Free** | Browse mentors, see profiles, 0 included minutes |
| **Pro** (₹499/mo) | 30 minutes included per month, 10% discount on additional sessions |
| **Premium** (₹999/mo) | 60 minutes included per month, 15% discount, priority booking |

The `mentorMinutes` field already exists in the `Subscription` model — this directly enables this integration.

### 12.3 Mentor Payout Schedule

- Payouts processed **weekly** (every Monday for the previous week's completed sessions)
- Minimum payout threshold: ₹500
- Payout methods: Bank Transfer (NEFT/IMPS) or UPI
- Mentor dashboard shows pending vs. processed payouts

---

## 13. Tech Architecture

### 13.1 Backend Architecture

```
┌──────────────────────────────────────────────────────────┐
│                     API Layer (Express)                    │
│                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │ Mentor APIs  │  │ Booking APIs │  │ Messaging APIs  │  │
│  └──────┬──────┘  └──────┬──────┘  └───────┬─────────┘  │
│         │                │                  │            │
│  ┌──────┴──────┐  ┌──────┴──────┐  ┌───────┴─────────┐  │
│  │MentorService│  │BookingService│  │SocketIO Server  │  │
│  │             │  │             │  │ (Chat + Notifs)  │  │
│  └──────┬──────┘  └──────┬──────┘  └───────┬─────────┘  │
│         │                │                  │            │
│  ┌──────┴────────────────┴──────────────────┴─────────┐  │
│  │                   MongoDB (Mongoose)                │  │
│  │  Mentors | Bookings | Conversations | Messages     │  │
│  │  Reviews | Notifications | Payouts | Users         │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────┐ │
│  │  Razorpay    │  │   Jitsi     │  │    Nodemailer    │ │
│  │  (Payments)  │  │  (Video)    │  │    (Emails)      │ │
│  └─────────────┘  └─────────────┘  └──────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

### 13.2 New Backend Files

```
backend/
├── controller/
│   ├── mentorController.ts        # Mentor CRUD, discovery, application
│   ├── bookingController.ts       # Booking lifecycle management
│   ├── paymentController.ts       # Razorpay order creation, verification
│   ├── chatController.ts          # REST messaging endpoints
│   ├── notificationController.ts  # Notification CRUD
│   └── payoutController.ts        # Payout management (admin)
├── routes/
│   ├── mentorRoutes.ts
│   ├── bookingRoutes.ts
│   ├── paymentRoutes.ts
│   ├── chatRoutes.ts
│   ├── notificationRoutes.ts
│   └── adminRoutes.ts             # (extend existing)
├── models/
│   ├── mentor.ts                  # (enhance existing)
│   ├── booking.ts                 # (enhance existing)
│   ├── message.ts                 # (enhance existing)
│   ├── mentorReview.ts            # NEW
│   ├── notification.ts            # NEW
│   └── payout.ts                  # NEW
├── services/
│   ├── razorpayService.ts         # Razorpay API wrapper
│   ├── jitsiService.ts            # Room name generation, JWT tokens
│   ├── notificationService.ts     # Create + deliver notifications
│   ├── payoutService.ts           # Calculate and process payouts
│   └── emailService.ts            # (enhance existing)
├── middleware/
│   ├── mentorMiddleware.ts        # Verify user is an active mentor
│   └── socketAuth.ts              # Socket.IO JWT auth middleware
├── socket/
│   ├── index.ts                   # Socket.IO server setup
│   ├── chatHandler.ts             # Chat event handlers
│   └── notificationHandler.ts     # Notification event handlers
├── emails/
│   ├── bookingConfirmation.hbs    # NEW template
│   ├── sessionReminder.hbs        # NEW template
│   ├── cancellationNotice.hbs     # NEW template
│   ├── reviewRequest.hbs          # NEW template
│   ├── mentorApproved.hbs         # NEW template
│   └── payoutProcessed.hbs        # NEW template
└── validator/
    ├── mentorValidator.ts         # NEW
    ├── bookingValidator.ts        # NEW
    └── paymentValidator.ts        # NEW
```

### 13.3 New Frontend Files

```
frontend/src/
├── pages/
│   ├── Mentors/
│   │   ├── Mentors.tsx            # Discovery page with grid + filters
│   │   ├── Mentors.css
│   │   ├── MentorProfile.tsx      # Individual mentor profile
│   │   ├── MentorProfile.css
│   │   ├── BookingCheckout.tsx     # Slot selection + payment
│   │   └── BookingCheckout.css
│   ├── MentorDashboard/
│   │   ├── MentorDashboard.tsx    # Mentor's management dashboard
│   │   ├── MentorDashboard.css
│   │   ├── AvailabilityManager.tsx
│   │   └── EarningsView.tsx
│   ├── MentorApplication/
│   │   ├── MentorApplication.tsx  # Become a mentor form
│   │   └── MentorApplication.css
│   ├── VideoCall/
│   │   ├── VideoCall.tsx          # Jitsi iframe wrapper
│   │   └── VideoCall.css
│   └── Messages/
│       ├── Messages.tsx           # Chat page
│       ├── Messages.css
│       ├── ChatSidebar.tsx        # Conversation list
│       └── ChatWindow.tsx         # Message thread
├── components/
│   ├── MentorCard/
│   │   ├── MentorCard.tsx
│   │   └── MentorCard.css
│   ├── BookingWidget/
│   │   ├── BookingWidget.tsx
│   │   └── BookingWidget.css
│   ├── ReviewCard/
│   │   ├── ReviewCard.tsx
│   │   └── ReviewCard.css
│   ├── NotificationBell/
│   │   ├── NotificationBell.tsx
│   │   └── NotificationBell.css
│   └── MessageBubble/
│       ├── MessageBubble.tsx
│       └── MessageBubble.css
├── hooks/
│   ├── useSocket.ts               # Socket.IO connection hook
│   ├── useNotifications.ts        # Notification state management
│   └── useChat.ts                 # Chat message state management
└── context/
    ├── SocketContext.tsx           # Socket.IO provider
    └── NotificationContext.tsx     # Global notification state
```

### 13.4 New Dependencies

**Backend**:
```json
{
    "razorpay": "^2.x",
    "socket.io": "^4.x",
    "node-cron": "^3.x",
    "uuid": "^9.x"
}
```

**Frontend**:
```json
{
    "socket.io-client": "^4.x",
    "@jitsi/react-sdk": "^1.x",
    "react-big-calendar": "^1.x",
    "date-fns": "^3.x"
}
```

---

## 14. Security & Compliance

### 14.1 Security Requirements

| Area | Requirement |
|------|-------------|
| **Authentication** | All mentor/booking APIs require valid JWT |
| **Authorization** | Mentors can only modify their own profiles/bookings; students can only access their own bookings |
| **Payment security** | Razorpay handles PCI compliance; we never store card details |
| **Video call privacy** | Unique room URLs with optional JWT-based access control |
| **Chat privacy** | Only conversation participants can read/send messages |
| **Data encryption** | Payout bank details encrypted at rest |
| **Rate limiting** | Booking creation: 5/min per user; Message send: 30/min per user |
| **Input validation** | All inputs validated via Joi/Zod schemas |
| **XSS prevention** | Chat messages sanitized before rendering |
| **CSRF protection** | Razorpay webhook verified via signature |

### 14.2 Compliance

- **GST**: Platform must charge GST on commission (18% on platform fee, not on full amount)
- **TDS**: 1% TDS deduction on mentor payouts above ₹50,000/year (as per Indian tax law for e-commerce operators)
- **Privacy**: Mentor phone numbers and email never exposed to students; communication through platform only
- **Terms of Service**: Mentoring sessions are advisory only; Graphora is not liable for career outcomes
- **Refund Policy**: Documented in cancellation flow (Section 6.4)

---

## 15. Phased Rollout Plan

### Phase 1 — Foundation (Week 1–2)

**Backend**:
- [ ] Enhance Mentor model (add new fields, slug, application status)
- [ ] Enhance Booking model (add payment details, Jitsi room, refund)
- [ ] Create MentorReview, Notification, Payout models
- [ ] Build mentor CRUD APIs (discovery, profile, application)
- [ ] Build booking APIs (create, cancel, complete)
- [ ] Add Joi/Zod validators for all new endpoints

**Frontend**:
- [ ] Build Mentor Discovery page with filters and grid
- [ ] Build Mentor Profile page with sections
- [ ] Build Mentor Application form (`/become-a-mentor`)

### Phase 2 — Payments & Booking (Week 3–4)

**Backend**:
- [ ] Integrate Razorpay (order creation, verification, webhooks)
- [ ] Build payment APIs
- [ ] Implement booking confirmation flow
- [ ] Build cancellation + refund logic
- [ ] Setup email templates for booking lifecycle

**Frontend**:
- [ ] Build Booking Checkout page (slot picker + payment)
- [ ] Integrate Razorpay Checkout
- [ ] Build Booking Confirmation page
- [ ] Build Student mentoring dashboard section

### Phase 3 — Video Calls & Chat (Week 5–6)

**Backend**:
- [ ] Setup Socket.IO server with JWT auth
- [ ] Build chat event handlers (send, receive, typing, read receipts)
- [ ] Build REST fallback APIs for chat
- [ ] Implement Jitsi room generation service
- [ ] Build notification service (in-app + email)

**Frontend**:
- [ ] Build Video Call page (Jitsi iframe embed)
- [ ] Build Messages page with conversation sidebar
- [ ] Build ChatWindow component with message types (text, code, file)
- [ ] Build NotificationBell component in navbar
- [ ] Add Socket.IO context provider

### Phase 4 — Mentor Dashboard & Polish (Week 7–8)

**Backend**:
- [ ] Build mentor dashboard stats API
- [ ] Build availability management API
- [ ] Build payout calculation and processing logic
- [ ] Build review submission + display APIs
- [ ] Build admin mentor verification APIs
- [ ] Setup cron job for session reminders and weekly payouts

**Frontend**:
- [ ] Build Mentor Dashboard with stats, bookings, earnings
- [ ] Build Availability Manager (calendar + toggle)
- [ ] Build Review system (form + display cards)
- [ ] Polish responsive design for all new pages
- [ ] End-to-end testing of all flows

### Phase 5 — Launch & Iterate (Week 9+)

- [ ] Onboard 5–10 beta mentors (internal + referrals)
- [ ] Run 20 pilot sessions for feedback
- [ ] Fix bugs from pilot feedback
- [ ] Launch publicly on platform
- [ ] Monitor metrics against success targets
- [ ] Iterate on UX based on session completion rates

---

## 16. Open Questions & Risks

### Open Questions

| # | Question | Decision Needed By |
|---|----------|-------------------|
| 1 | Should mentors set their own prices or should we standardize pricing tiers? | Phase 1 |
| 2 | Do we want to self-host Jitsi or use the public `meet.jit.si` server? | Phase 3 |
| 3 | Should we allow students to message mentors before booking (free previewing)? | Phase 3 |
| 4 | What is the minimum payout threshold for mentors (₹500? ₹1,000?)? | Phase 4 |
| 5 | Do we need session recording? If yes, who pays for cloud storage? | Post-launch |
| 6 | Should mentors be able to set different prices for different topics? | Post-launch |
| 7 | How do we handle disputes if a mentor doesn't show up? | Phase 2 |

### Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Cold start problem**: No mentors → no students → no mentors | High | Critical | Onboard 5–10 mentors manually before launch; offer first 3 months commission-free |
| **Low session quality** | Medium | High | Mandatory verification; reviews visible; deactivate low-rated mentors |
| **Payment failures** | Medium | Medium | Robust webhook handling; retry logic; manual admin intervention |
| **Mentor no-shows** | Low | High | Track cancellation rate; auto-refund to student; penalize mentors |
| **Video call issues** (Jitsi downtime) | Low | Medium | Fallback to Google Meet link; display fallback instructions |
| **Scaling Socket.IO** | Low (initially) | Medium | Redis adapter when needed; separate Socket server if load increases |

---

## Appendix A: Database Schema Diagram

```
┌───────────┐       ┌───────────────┐       ┌──────────────┐
│   User    │──────>│    Mentor     │──────>│   Booking    │
│           │       │               │       │              │
│ _id       │       │ _id           │       │ _id          │
│ name      │       │ user (ref)    │       │ mentor (ref) │
│ email     │       │ expertise[]   │       │ student (ref)│
│ role      │       │ pricing       │       │ scheduledAt  │
│ mentor    │       │ availability  │       │ duration     │
│ Profile   │       │ rating        │       │ payment {}   │
│ (ref)     │       │ verified      │       │ status       │
└───────────┘       └───────────────┘       └──────────────┘
                                                    │
                    ┌───────────────┐                │
                    │ Conversation  │<───────────────┘
                    │               │
                    │ participants  │       ┌──────────────┐
                    │ booking (ref) │       │  Message     │
                    │ type: mentor  │──────>│              │
                    └───────────────┘       │ conversation │
                                           │ sender       │
                    ┌───────────────┐       │ content      │
                    │ MentorReview  │       │ type         │
                    │               │       └──────────────┘
                    │ booking (ref) │
                    │ mentor (ref)  │       ┌──────────────┐
                    │ student (ref) │       │ Notification │
                    │ rating        │       │              │
                    │ review        │       │ user (ref)   │
                    └───────────────┘       │ type         │
                                           │ message      │
                    ┌───────────────┐       │ isRead       │
                    │   Payout      │       └──────────────┘
                    │               │
                    │ mentor (ref)  │
                    │ bookings[]    │
                    │ amount        │
                    │ status        │
                    └───────────────┘
```

---

## Appendix B: Competitive Reference

| Platform | Video | Chat | Pricing Model | Our Differentiator |
|----------|-------|------|---------------|-------------------|
| Preplaned | ✅ | ✅ | Per session ($25–$150) | India-focused, INR pricing, integrated with practice platform |
| Mentorcruise | ❌ | ✅ | Monthly subscription ($50–$500) | We offer session-based + subscription hybrid |
| ADPList | ✅ | ❌ | Free for mentees | We offer paid model for focused, committed mentorship |
| Topmate | ✅ | ✅ | Per session (₹500–₹5,000) | We integrate mentoring with DSA practice + mock tests |

**Our unique advantage**: Mentoring is integrated into a complete interview prep platform. Mentors can assign problems from our 500+ problem database, review code submissions, and track student progress — all in one place.

---

*End of PRD*
