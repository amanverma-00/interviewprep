# 🚀 Implementation Plan — Mentor Connect

**Based on**: `PRD.md` + `APP_FLOW.md`  
**Timeline**: 8–9 weeks (5 phases)  
**Date**: February 18, 2026

---

## Overview

This plan transforms the Mentor Connect PRD into actionable development tasks. Each task specifies the exact files to create/modify, dependencies, and verification criteria. Tasks are ordered to minimize blockers — backend models first, then APIs, then frontend.

**Existing assets we build upon**:

- Models: `mentor.ts`, `booking.ts`, `message.ts`, `subscription.ts` (enhance)
- Types: `types/type.ts` (already has IMentor, IBooking, IMessage interfaces)
- Auth: `protect`, `adminOnly`, `restrictTo` middleware (reuse)
- Email: `emailService.ts` + Handlebars templates (extend)
- Patterns: Controller → Route → Validate → Middleware chain (follow)

---

## Phase 1 — Data Layer & Mentor APIs (Week 1–2)

### 1.1 Enhance Type Definitions

**File**: `backend/types/type.ts`  
**Action**: Add new types and extend existing interfaces

```
Add:
- MentorApplicationStatus = 'pending' | 'approved' | 'rejected'
- SessionTopic = 'DSA Problem Solving' | 'System Design' | 'Resume Review' | ...
- PayoutStatus = 'pending' | 'processing' | 'completed' | 'failed'
- PayoutMethod = 'bank_transfer' | 'upi'
- NotificationType = 'booking_confirmed' | 'booking_cancelled' | ...

Extend IMentor:
- slug, avatar, linkedinUrl, applicationStatus, cancellationRate
- repeatStudentRate, languages[], sessionTopics[], payoutDetails {}

Extend IBooking:
- bookingId (human-readable), jitsiRoomName, reminderSent
- sessionNotes {}, refund {}, platformFee, mentorPayout {}

Add new interfaces:
- IMentorReview, INotification, IPayout
```

**Depends on**: Nothing  
**Verify**: TypeScript compiles without errors

---

### 1.2 Enhance Mentor Model

**File**: `backend/models/mentor.ts`  
**Action**: Add fields from PRD Section 8.1

```
Add fields:
- slug: { type: String, unique: true, index: true }
- avatar: { type: String }
- linkedinUrl: { type: String }
- applicationStatus: { type: String, enum: ['pending','approved','rejected'], default: 'pending' }
- applicationNote: { type: String }
- cancellationRate: { type: Number, default: 0 }
- repeatStudentRate: { type: Number, default: 0 }
- languages: [{ type: String }]
- sessionTopics: [{ type: String, enum: [...] }]
- payoutDetails: { method, upiId, bankAccount: { accountNumber, ifscCode, accountHolder } }

Add indexes:
- slug: 1 (unique)
- applicationStatus: 1
```

**Depends on**: 1.1  
**Verify**: Model creates documents with new fields in MongoDB

---

### 1.3 Enhance Booking Model

**File**: `backend/models/booking.ts`  
**Action**: Add fields from PRD Section 8.2

```
Add fields:
- bookingId: { type: String, unique: true }
- jitsiRoomName: { type: String }
- reminderSent: { type: Boolean, default: false }
- sessionNotes: { content: String, updatedAt: Date }
- refund: { amount, reason, processedAt, razorpayRefundId }
- platformFee: { type: Number }
- mentorPayout: { amount, status, processedAt, transactionId }

Update payment field:
- Change stripePaymentId → razorpayPaymentId
- Add razorpayOrderId

Add index:
- bookingId: 1 (unique)
```

**Depends on**: 1.1  
**Verify**: Booking documents accept all new fields

---

### 1.4 Create MentorReview Model

**File**: `backend/models/mentorReview.ts` (NEW)  
**Action**: Create from PRD Section 8.4

```
Schema:
- booking: ObjectId ref Booking (required, unique)
- mentor: ObjectId ref Mentor (required)
- student: ObjectId ref User (required)
- rating: Number (1-5, required)
- review: String (maxLength 1000)
- isPublic: Boolean (default true)
- isReported: Boolean (default false)
- reportReason: String
- mentorReply: { content: String(500), repliedAt: Date }
- timestamps: true

Indexes:
- { mentor: 1, createdAt: -1 }
- { student: 1 }
```

**Depends on**: 1.1  
**Verify**: Can create review documents

---

### 1.5 Create Notification Model

**File**: `backend/models/notification.ts` (NEW)  
**Action**: Create from PRD Section 8.5

```
Schema:
- user: ObjectId ref User (required)
- type: String enum [...NotificationType values] (required)
- title: String (required)
- message: String (required)
- data: Mixed (flexible payload)
- isRead: Boolean (default false)
- readAt: Date
- actionUrl: String
- timestamps: true

Indexes:
- { user: 1, isRead: 1, createdAt: -1 }
```

**Depends on**: 1.1  
**Verify**: Notification documents persist correctly

---

### 1.6 Create Payout Model

**File**: `backend/models/payout.ts` (NEW)  
**Action**: Create from PRD Section 8.6

```
Schema:
- mentor: ObjectId ref Mentor (required)
- bookings: [ObjectId ref Booking]
- amount, platformFee, netAmount: Number (required)
- currency: String (default 'INR')
- status: String enum ['pending','processing','completed','failed']
- method: String enum ['bank_transfer','upi']
- transactionId, failureReason: String
- processedAt: Date
- period: { start: Date, end: Date }
- timestamps: true

Indexes:
- { mentor: 1, status: 1 }
- { status: 1, processedAt: 1 }
```

**Depends on**: 1.1  
**Verify**: Payout documents persist correctly

---

### 1.7 Update Models Index

**File**: `backend/models/index.ts`  
**Action**: Export new models (MentorReview, Notification, Payout)

**Depends on**: 1.4, 1.5, 1.6

---

### 1.8 Create Mentor Validators

**File**: `backend/validator/mentorValidator.ts` (NEW)

```
Schemas (Joi or Zod):
- mentorApplicationSchema: headline, bio, expertise[], experience{}, availability[], pricing{}, sessionTopics[]
- updateMentorProfileSchema: partial of above
- updateAvailabilitySchema: availability[] with dayOfWeek(0-6), slots[{start,end}]
- listMentorsSchema: query params — expertise, company, priceMin, priceMax, rating, page, limit, sort
```

**Depends on**: Nothing  
**Verify**: Valid/invalid payloads are correctly accepted/rejected

---

### 1.9 Create Booking Validators

**File**: `backend/validator/bookingValidator.ts` (NEW)

```
Schemas:
- createBookingSchema: mentorId, scheduledAt, duration(30|60), topic, agenda
- cancelBookingSchema: reason (required)
- reviewSchema: rating(1-5), review(optional, max 1000)
```

**Depends on**: Nothing

---

### 1.10 Build Mentor Controller

**File**: `backend/controller/mentorController.ts` (NEW)

```
Functions:
1. applyAsMentor — POST: create mentor profile, set status 'pending', generate slug
2. getMentorProfile — GET: populate user data, return public profile
3. updateMentorProfile — PUT: update own profile (verified mentor only)
4. updateAvailability — PUT: update weekly slots
5. toggleBookings — PUT: toggle isAcceptingBookings
6. listMentors — GET: filter by expertise, price range, rating, company; paginate; sort
7. getMentorDashboardStats — GET: earnings, sessions, rating, response time
8. getMentorReviews — GET: paginated reviews for a mentor

Reuse patterns from problemController.ts:
- sendResponse/sendError helpers
- Query building with sanitization
- Pagination logic
```

**Depends on**: 1.2, 1.8  
**Verify**: All endpoints return correct data, filters work

---

### 1.11 Build Mentor Routes

**File**: `backend/routes/mentorRoutes.ts` (NEW)

```
POST   /apply              → protect, validate, applyAsMentor
GET    /                   → protect, validate, listMentors
GET    /:slug              → protect, getMentorProfile
PUT    /profile            → protect, mentorOnly, validate, updateMentorProfile
PUT    /availability       → protect, mentorOnly, validate, updateAvailability
PUT    /toggle-bookings    → protect, mentorOnly, toggleBookings
GET    /dashboard/stats    → protect, mentorOnly, getMentorDashboardStats
GET    /:id/reviews        → protect, getMentorReviews
```

**Depends on**: 1.10

---

### 1.12 Create Mentor Middleware

**File**: `backend/middleware/mentorMiddleware.ts` (NEW)

```
mentorOnly middleware:
- Check req.user.mentorProfile exists
- Load mentor doc, check verified === true && isActive === true
- Attach mentor to req.mentor
- 403 if not a verified mentor
```

**Depends on**: 1.2

---

### 1.13 Register Routes in App

**File**: `backend/app.ts`  
**Action**: Add `app.use('/api/mentors', mentorRouter)`

**Depends on**: 1.11  
**Verify**: `GET /api/mentors/health` returns 200

---

### ✅ Phase 1 Checkpoint

- [ ] All 3 new models created and indexed
- [ ] 2 existing models enhanced with new fields
- [ ] Mentor CRUD + listing API fully functional
- [ ] Validators reject bad input
- [ ] TypeScript compiles cleanly
- [ ] Test with Postman/Thunder Client: create mentor app, list mentors, get profile

---

## Phase 2 — Booking & Payments (Week 3–4)

### 2.1 Install Razorpay SDK

**File**: `backend/package.json`  
**Action**: `npm install razorpay uuid`  
**Also**: Add `@types/uuid` to devDependencies

---

### 2.2 Create Razorpay Service

**File**: `backend/services/razorpayService.ts` (NEW)

```
- Initialize Razorpay instance with key_id + key_secret from env
- createOrder(amount, currency, bookingId) → Razorpay Order
- verifyPaymentSignature(orderId, paymentId, signature) → boolean
- createRefund(paymentId, amount) → Razorpay Refund
```

**Depends on**: 2.1  
**Verify**: Can create test orders on Razorpay test mode

---

### 2.3 Create Jitsi Service

**File**: `backend/services/jitsiService.ts` (NEW)

```
- generateRoomName(bookingId) → "graphora-{bookingId}-{shortHash}"
- generateMeetingUrl(roomName) → "https://meet.jit.si/{roomName}"
- (Optional) generateJWT(roomName, user) → JWT for secured rooms
```

**Depends on**: Nothing

---

### 2.4 Build Booking Controller

**File**: `backend/controller/bookingController.ts` (NEW)

```
Functions:
1. createBooking — POST:
   - Validate mentor is available at selected slot
   - Check no conflicting booking exists
   - Generate bookingId ("GRP-YYYYMMDD-XXX")
   - Generate Jitsi room name
   - Calculate price (30min or 60min rate)
   - Calculate platformFee (20%) and mentorPayout
   - Create Booking doc (status: 'pending', payment.status: 'pending')
   - Return booking + Razorpay order details

2. getUserBookings — GET:
   - If user is mentor: return mentor's bookings
   - If user is student: return student's bookings
   - Filter by status, paginate

3. getBookingDetails — GET:
   - Verify user is participant (mentor or student)
   - Populate mentor + student user data

4. cancelBooking — PUT:
   - Apply cancellation policy (>24h: full, 4-24h: 50%, <4h: none / mentor always full)
   - Process refund via Razorpay if applicable
   - Update status, cancelledBy, cancelledAt
   - Send cancellation emails

5. completeSession — PUT (mentor only):
   - Set status = 'completed'
   - Update mentor.totalSessions++
   - Trigger review request notification

6. submitReview — POST:
   - Verify booking belongs to student
   - Verify booking is completed
   - Create MentorReview doc
   - Update mentor.rating (running average)

7. getMeetingLink — GET:
   - Verify user is participant
   - Return Jitsi URL (only available 10min before session)

8. addSessionNotes — PUT (mentor only):
   - Add notes to booking
```

**Depends on**: 1.3, 2.2, 2.3, 1.9  
**Verify**: Full booking lifecycle works end-to-end

---

### 2.5 Build Payment Controller

**File**: `backend/controller/paymentController.ts` (NEW)

```
Functions:
1. createOrder — POST:
   - Create Razorpay order for booking amount
   - Return orderId for frontend checkout

2. verifyPayment — POST:
   - Verify Razorpay signature
   - Update booking.payment (status: 'paid', paidAt, razorpayPaymentId)
   - Update booking.status = 'confirmed'
   - Create conversation between mentor & student
   - Send confirmation emails to both
   - Create notifications

3. handleWebhook — POST:
   - Verify webhook signature (RAZORPAY_WEBHOOK_SECRET)
   - Handle: payment.captured, payment.failed, refund.processed
   - Update booking status accordingly

4. getInvoices — GET:
   - Student's payment history with booking details
```

**Depends on**: 2.2, 2.4  
**Verify**: Test payment flow with Razorpay test keys

---

### 2.6 Build Booking & Payment Routes

**File**: `backend/routes/bookingRoutes.ts` (NEW)  
**File**: `backend/routes/paymentRoutes.ts` (NEW)

```
Booking routes:
POST   /                    → protect, validate, createBooking
GET    /                    → protect, getUserBookings
GET    /:id                 → protect, getBookingDetails
PUT    /:id/cancel          → protect, validate, cancelBooking
PUT    /:id/complete        → protect, mentorOnly, completeSession
POST   /:id/review          → protect, validate, submitReview
GET    /:id/meeting-link    → protect, getMeetingLink
PUT    /:id/notes           → protect, mentorOnly, addSessionNotes

Payment routes:
POST   /create-order        → protect, createOrder
POST   /verify              → protect, verifyPayment
POST   /webhook             → (no auth, verify signature), handleWebhook
GET    /invoices             → protect, getInvoices
```

**Depends on**: 2.4, 2.5

---

### 2.7 Create Email Templates

**Files** (all NEW in `backend/emails/`):

- `bookingConfirmation.hbs` — sent to student + mentor on payment success
- `sessionReminder.hbs` — sent 15 min before session
- `cancellationNotice.hbs` — sent on cancellation
- `reviewRequest.hbs` — sent to student after session completes
- `mentorApproved.hbs` — sent when admin approves mentor application
- `mentorRejected.hbs` — sent with rejection reason

**Depends on**: Nothing

---

### 2.8 Register Phase 2 Routes

**File**: `backend/app.ts`  
**Action**: Add booking + payment routes

```typescript
app.use('/api/bookings', bookingRouter);
app.use('/api/payments', paymentRouter);
```

**Depends on**: 2.6

---

### 2.9 Add Environment Variables

**File**: `backend/.env`

```env
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=...
PLATFORM_COMMISSION_RATE=0.20
```

---

### ✅ Phase 2 Checkpoint

- [ ] Full booking lifecycle: create → pay → confirm → complete → review
- [ ] Razorpay test payments work (order → checkout → verify)
- [ ] Cancellation + refund logic applies correct rules
- [ ] Jitsi room URLs generate correctly
- [ ] Email templates render with correct data
- [ ] All routes registered and returning correct responses

---

## Phase 3 — Real-Time Chat & Notifications (Week 5–6)

### 3.1 Install Socket.IO

**Action**: `npm install socket.io` (backend) + `npm install socket.io-client` (frontend)

---

### 3.2 Create Socket.IO Server

**File**: `backend/socket/index.ts` (NEW)

```
- Create Socket.IO server attached to HTTP server
- Configure CORS for frontend origin
- Apply JWT auth middleware on connection
- Register namespaces: /chat, /notifications
- Export io instance for use in controllers
```

**Requires**: Refactor `app.ts` to export HTTP server (not just Express app)

---

### 3.3 Create Socket Auth Middleware

**File**: `backend/middleware/socketAuth.ts` (NEW)

```
- Extract JWT from socket handshake auth
- Verify token, find user
- Attach user to socket.data
- Reject connection if invalid
```

---

### 3.4 Create Chat Handler

**File**: `backend/socket/chatHandler.ts` (NEW)

```
Events:
- join_conversation → join Socket.IO room
- send_message → save to DB, broadcast to room
- typing_start / typing_stop → broadcast
- mark_read → update readBy[], broadcast receipt
```

---

### 3.5 Create Notification Handler

**File**: `backend/socket/notificationHandler.ts` (NEW)

```
- On connection: send unread count
- Emit 'new_notification' when notification created
- Handle 'mark_read' and 'mark_all_read'
```

---

### 3.6 Build Notification Service

**File**: `backend/services/notificationService.ts` (NEW)

```
createNotification(userId, type, title, message, data?, actionUrl?):
- Create Notification document
- Emit via Socket.IO if user is connected
- Queue email notification (if applicable)

Callable from: bookingController, paymentController, chatHandler
```

---

### 3.7 Build Chat & Notification Controllers

**File**: `backend/controller/chatController.ts` (NEW)  
**File**: `backend/controller/notificationController.ts` (NEW)

```
Chat: listConversations, getMessages (paginated), sendMessage (REST fallback), markRead
Notification: getNotifications, markRead, markAllRead, getUnreadCount
```

---

### 3.8 Build Chat & Notification Routes

**File**: `backend/routes/chatRoutes.ts` (NEW)  
**File**: `backend/routes/notificationRoutes.ts` (NEW)

Register in `app.ts`.

---

### 3.9 Refactor app.ts for Socket.IO

**File**: `backend/app.ts`

```
Change:
- app.listen() → http.createServer(app) + server.listen()
- Initialize Socket.IO on the HTTP server
- Register chat and notification routes
```

---

### ✅ Phase 3 Checkpoint

- [ ] Socket.IO connects with JWT auth
- [ ] Messages send/receive in real-time
- [ ] Typing indicators work
- [ ] Read receipts update
- [ ] Notifications created on booking events
- [ ] Unread count delivered on connect

---

## Phase 4 — Frontend Pages (Week 6–8)

### 4.1 Mentor Discovery Page

**Files**: `frontend/src/pages/Mentors/Mentors.tsx` + `.css` (NEW)

```
Layout: Sidebar filters + mentor card grid (same pattern as Problems page)
Filters: expertise, company, price range, rating, availability
Cards: avatar, name, headline, expertise tags, rating, price, "Book" CTA
API: GET /api/mentors?expertise=DSA&priceMax=1000&sort=rating&page=1
```

---

### 4.2 Mentor Profile Page

**Files**: `frontend/src/pages/Mentors/MentorProfile.tsx` + `.css` (NEW)

```
Sections: header, bio, expertise, experience, availability calendar, pricing card, reviews
Booking widget: select date → select slot → choose duration → "Book & Pay"
API: GET /api/mentors/:slug, GET /api/mentors/:id/reviews
```

---

### 4.3 Booking Checkout Page

**Files**: `frontend/src/pages/Mentors/BookingCheckout.tsx` + `.css` (NEW)

```
Step 1: Selected slot summary + agenda input
Step 2: Payment summary (price + GST breakdown)
Step 3: Razorpay Checkout integration
Step 4: Confirmation screen with "Add to Calendar" + "Message Mentor"

Frontend Razorpay flow:
- POST /api/payments/create-order → get orderId
- Open Razorpay checkout with orderId
- On success: POST /api/payments/verify with paymentId + signature
- On failure: show retry
```

**Install**: `npm install razorpay` (frontend — or load checkout.js via script tag)

---

### 4.4 Video Call Page

**Files**: `frontend/src/pages/VideoCall/VideoCall.tsx` + `.css` (NEW)

```
- Install: npm install @jitsi/react-sdk
- Load booking details: GET /api/bookings/:id
- Get meeting link: GET /api/bookings/:id/meeting-link
- Render Jitsi IFrame using JitsiMeeting component
- Show "Session ends in X:XX" countdown
- "End Call" button → navigate back to dashboard
```

---

### 4.5 Messages Page

**Files**: `frontend/src/pages/Messages/Messages.tsx` + `.css` (NEW)  
**Files**: `frontend/src/pages/Messages/ChatSidebar.tsx`, `ChatWindow.tsx` (NEW)

```
Layout: sidebar (conversation list) + main area (message thread)
Socket.IO integration via useSocket hook
Features: text, code blocks, file attachments, typing indicators, read receipts
```

---

### 4.6 Socket.IO Context & Hooks

**Files** (all NEW):

- `frontend/src/context/SocketContext.tsx` — Provider wrapping App
- `frontend/src/hooks/useSocket.ts` — connection management
- `frontend/src/hooks/useChat.ts` — message state
- `frontend/src/hooks/useNotifications.ts` — notification state + unread count

---

### 4.7 Mentor Application Page

**Files**: `frontend/src/pages/MentorApplication/MentorApplication.tsx` + `.css` (NEW)

```
Multi-step form: Bio → Experience → Expertise → Availability → Pricing → Submit
API: POST /api/mentors/apply
```

---

### 4.8 Mentor Dashboard Page

**Files**: `frontend/src/pages/MentorDashboard/MentorDashboard.tsx` + `.css` (NEW)  
**Files**: `AvailabilityManager.tsx`, `EarningsView.tsx` (NEW)

```
Sections: stats cards, upcoming sessions, availability calendar, earnings chart, reviews
APIs: GET /api/mentors/dashboard/stats, GET /api/bookings, PUT /api/mentors/availability
```

---

### 4.9 Notification Bell Component

**Files**: `frontend/src/components/NotificationBell/NotificationBell.tsx` + `.css` (NEW)

```
- Badge with unread count in Navbar
- Dropdown with notification list
- Click → mark as read + navigate to actionUrl
- Socket.IO: real-time count updates
```

---

### 4.10 Update Navbar

**File**: `frontend/src/components/Navbar.tsx`

```
Add:
- "Mentors" link → /mentors
- Chat icon with unread badge → /messages
- NotificationBell component
- "Become a Mentor" link (if not already a mentor)
```

---

### 4.11 Update App Router

**File**: `frontend/src/App.tsx`

```
Add routes:
- /mentors → Mentors
- /mentors/:slug → MentorProfile
- /mentors/:slug/book → BookingCheckout
- /call/:bookingId → VideoCall
- /messages → Messages
- /messages/:conversationId → Messages (with selected convo)
- /become-a-mentor → MentorApplication
- /mentor/dashboard → MentorDashboard
```

---

### ✅ Phase 4 Checkpoint

- [ ] Browse mentors with working filters + pagination
- [ ] View mentor profile with reviews
- [ ] Complete booking flow: select slot → pay → confirmation
- [ ] Video call opens in browser via Jitsi
- [ ] Chat sends/receives messages in real-time
- [ ] Notifications appear in real-time
- [ ] Mentor can manage availability and view earnings
- [ ] All pages match dark theme of existing app

---

## Phase 5 — Admin, Polish & Launch (Week 8–9)

### 5.1 Admin Mentor Verification

**File**: `backend/controller/mentorController.ts` (extend)  
**File**: `backend/routes/adminRoutes.ts` (NEW or extend existing)

```
GET  /api/admin/mentor-applications → list pending applications
PUT  /api/admin/mentors/:id/approve → set verified=true, send email
PUT  /api/admin/mentors/:id/reject  → set rejected, send email with reason
GET  /api/admin/revenue             → aggregate booking payments
```

---

### 5.2 Session Reminder Cron

**File**: `backend/services/reminderService.ts` (NEW)  
**Install**: `npm install node-cron`

```
Cron job: every 5 minutes
- Find bookings where scheduledAt is 15 min from now AND reminderSent === false
- Send reminder email to both parties
- Create notification
- Set reminderSent = true
```

---

### 5.3 Payout Processing

**File**: `backend/services/payoutService.ts` (NEW)

```
Weekly cron (Monday 6am):
- Aggregate completed bookings from previous week per mentor
- Calculate: total - platformFee = netAmount
- Create Payout document
- (Manual transfer initially, automate later)
- Send payout notification to mentor
```

---

### 5.4 Responsive Design Pass

Review all new pages for mobile responsiveness:

- Mentor cards: 1 column on mobile, 2 on tablet, 3 on desktop
- Chat: full-screen on mobile (hide sidebar), split on desktop
- Booking calendar: scrollable on mobile
- Video call: full-screen on all devices

---

### 5.5 End-to-End Testing

```
Test flows:
1. Register → become mentor → admin approves → profile visible
2. Student browses → selects slot → pays → booking confirmed
3. Both join video call → session completes → student reviews
4. Mentor views earnings → payout calculated
5. Student cancels > 24h → full refund
6. Student cancels < 4h → no refund
7. Chat: send text, code block, file → received in real-time
8. Notifications: appear on booking, cancel, message, review
```

---

### ✅ Phase 5 Checkpoint (Launch Ready)

- [ ] Admin can approve/reject mentor applications
- [ ] Reminders sent 15 min before sessions
- [ ] Payout calculation is correct
- [ ] All pages responsive on mobile/tablet/desktop
- [ ] No console errors in any flow
- [ ] 5+ test mentors onboarded
- [ ] 10+ pilot sessions completed successfully

---

## File Creation Summary

### New Backend Files (19)

| File | Type |
|------|------|
| `models/mentorReview.ts` | Model |
| `models/notification.ts` | Model |
| `models/payout.ts` | Model |
| `controller/mentorController.ts` | Controller |
| `controller/bookingController.ts` | Controller |
| `controller/paymentController.ts` | Controller |
| `controller/chatController.ts` | Controller |
| `controller/notificationController.ts` | Controller |
| `routes/mentorRoutes.ts` | Routes |
| `routes/bookingRoutes.ts` | Routes |
| `routes/paymentRoutes.ts` | Routes |
| `routes/chatRoutes.ts` | Routes |
| `routes/notificationRoutes.ts` | Routes |
| `validator/mentorValidator.ts` | Validator |
| `validator/bookingValidator.ts` | Validator |
| `services/razorpayService.ts` | Service |
| `services/jitsiService.ts` | Service |
| `services/notificationService.ts` | Service |
| `services/payoutService.ts` | Service |
| `services/reminderService.ts` | Service |
| `middleware/mentorMiddleware.ts` | Middleware |
| `middleware/socketAuth.ts` | Middleware |
| `socket/index.ts` | Socket |
| `socket/chatHandler.ts` | Socket |
| `socket/notificationHandler.ts` | Socket |
| `emails/bookingConfirmation.hbs` | Template |
| `emails/sessionReminder.hbs` | Template |
| `emails/cancellationNotice.hbs` | Template |
| `emails/reviewRequest.hbs` | Template |
| `emails/mentorApproved.hbs` | Template |
| `emails/mentorRejected.hbs` | Template |

### New Frontend Files (20+)

| File | Type |
|------|------|
| `pages/Mentors/Mentors.tsx + .css` | Page |
| `pages/Mentors/MentorProfile.tsx + .css` | Page |
| `pages/Mentors/BookingCheckout.tsx + .css` | Page |
| `pages/MentorApplication/MentorApplication.tsx + .css` | Page |
| `pages/MentorDashboard/MentorDashboard.tsx + .css` | Page |
| `pages/MentorDashboard/AvailabilityManager.tsx` | Component |
| `pages/MentorDashboard/EarningsView.tsx` | Component |
| `pages/VideoCall/VideoCall.tsx + .css` | Page |
| `pages/Messages/Messages.tsx + .css` | Page |
| `pages/Messages/ChatSidebar.tsx` | Component |
| `pages/Messages/ChatWindow.tsx` | Component |
| `components/NotificationBell/NotificationBell.tsx + .css` | Component |
| `components/MentorCard/MentorCard.tsx + .css` | Component |
| `components/ReviewCard/ReviewCard.tsx + .css` | Component |
| `components/MessageBubble/MessageBubble.tsx + .css` | Component |
| `context/SocketContext.tsx` | Context |
| `context/NotificationContext.tsx` | Context |
| `hooks/useSocket.ts` | Hook |
| `hooks/useChat.ts` | Hook |
| `hooks/useNotifications.ts` | Hook |

### Modified Files (8)

| File | Changes |
|------|---------|
| `backend/types/type.ts` | Add new types + extend interfaces |
| `backend/models/mentor.ts` | Add 12+ new fields |
| `backend/models/booking.ts` | Add 8+ new fields |
| `backend/models/index.ts` | Export new models |
| `backend/app.ts` | Add routes, refactor for Socket.IO |
| `backend/.env` | Add Razorpay keys |
| `frontend/src/App.tsx` | Add 8+ new routes |
| `frontend/src/components/Navbar.tsx` | Add Mentors link, chat icon, notification bell |

### New Dependencies

**Backend**: `razorpay`, `socket.io`, `node-cron`, `uuid`, `@types/uuid`  
**Frontend**: `socket.io-client`, `@jitsi/react-sdk`, `date-fns`

---

*End of Implementation Plan*
