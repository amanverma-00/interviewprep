# 🏗️ Graphora — Application Flow Documentation

**Platform**: Graphora (InterviewPrep)  
**Architecture**: MERN Stack (MongoDB, Express.js, React, Node.js) + TypeScript  
**Last Updated**: February 18, 2026

---

## Table of Contents

1. [High-Level Architecture](#1-high-level-architecture)
2. [Project Structure](#2-project-structure)
3. [Technology Stack](#3-technology-stack)
4. [Authentication & Authorization Flow](#4-authentication--authorization-flow)
5. [Frontend Routes & Navigation](#5-frontend-routes--navigation)
6. [Feature Modules](#6-feature-modules)
   - 6.1 [Landing Page](#61-landing-page)
   - 6.2 [Problems / Coding Practice](#62-problems--coding-practice)
   - 6.3 [Mock Test Engine](#63-mock-test-engine)
   - 6.4 [Companies Directory](#64-companies-directory)
   - 6.5 [Roadmaps](#65-roadmaps)
   - 6.6 [Dashboard](#66-dashboard)
   - 6.7 [Settings / Profile](#67-settings--profile)
7. [Backend API Reference](#7-backend-api-reference)
8. [Data Models & Relationships](#8-data-models--relationships)
9. [Middleware Pipeline](#9-middleware-pipeline)
10. [Security Architecture](#10-security-architecture)
11. [Email System](#11-email-system)
12. [Code Execution Pipeline](#12-code-execution-pipeline)
13. [State Management (Frontend)](#13-state-management-frontend)
14. [Planned Features](#14-planned-features)

---

## 1. High-Level Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                              │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │              React + TypeScript + Vite                       │    │
│  │                                                              │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐   │    │
│  │  │ Landing  │ │ Problems │ │MockTests │ │  Roadmaps    │   │    │
│  │  │  (Hero)  │ │ +Solver  │ │ +Session │ │  +Details    │   │    │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────┘   │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐   │    │
│  │  │Companies │ │Dashboard │ │ Settings │ │ Auth Pages   │   │    │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────────┘   │    │
│  │                                                              │    │
│  │  Shared: Navbar, CodeEditor, Hero, PageWrapper (Framer)     │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                              │ Axios (HTTP)                          │
│                              │ Bearer JWT Token                      │
└──────────────────────────────┼───────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────────┐
│                     SERVER (Express.js + TypeScript)                   │
│                                                                      │
│  ┌─ Middleware Pipeline ──────────────────────────────────────────┐  │
│  │ CORS → Helmet → Sanitize → HPP → RateLimit → Logger          │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              │                                       │
│  ┌─ Route Handlers ─────────┼────────────────────────────────────┐  │
│  │                           │                                    │  │
│  │  /api/auth/*       →  authController.ts                       │  │
│  │  /api/problems/*   →  problemController.ts                    │  │
│  │  /api/submit/*     →  submitController.ts                     │  │
│  │  /api/mocks/*      →  mockController.ts                       │  │
│  │                                                                │  │
│  │  Each: validate(Zod/Joi) → protect(JWT) → Controller Logic    │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                              │                                       │
│                              ▼                                       │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │                  MongoDB (Mongoose ODM)                       │    │
│  │                                                              │    │
│  │  Collections: users, problems, submissions, mocksessions,    │    │
│  │  companies, roadmaps, codingprofiles, mentors, bookings,     │    │
│  │  conversations, messages, subscriptions, studygroups         │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐       │
│  │  Nodemailer   │  │  Judge0 API  │  │  Handlebars (Emails) │       │
│  │ (SMTP/Gmail)  │  │ (Code Exec)  │  │  (Templates)         │       │
│  └──────────────┘  └──────────────┘  └──────────────────────┘       │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 2. Project Structure

```
interviewprep/
├── .git/
├── .gitignore
├── all_models.md                         # Model documentation
├── PRD.md                                # Mentor Connect PRD
├── APP_FLOW.md                           # This file
│
├── common/                               # Shared types/utilities
│   └── (shared between frontend & backend)
│
├── backend/                              # Express.js API Server
│   ├── app.ts                            # Entry point: Express setup, routes, middleware
│   ├── package.json                      # Dependencies & scripts
│   ├── tsconfig.json                     # TypeScript config
│   ├── .env                              # Environment variables (18 vars)
│   │
│   ├── config/
│   │   └── db.ts                         # MongoDB connection (mongoose.connect)
│   │
│   ├── controller/
│   │   ├── authController.ts             # Registration, login, OTP, password flows (18.8KB)
│   │   ├── problemController.ts          # Problem CRUD, stats, filtering (29KB)
│   │   ├── submitController.ts           # Code submission & evaluation (21.6KB)
│   │   └── mockController.ts             # Mock test lifecycle (35.6KB)
│   │
│   ├── middleware/
│   │   ├── index.ts                      # Barrel export
│   │   ├── authMiddleware.ts             # JWT protect, role-based access, optional auth
│   │   ├── security.ts                   # Helmet, CORS, rate limiter, sanitize, HPP
│   │   └── validation.ts                 # Zod/Joi schema validation middleware
│   │
│   ├── models/
│   │   ├── index.ts                      # Barrel export
│   │   ├── user.ts                       # User schema (auth, profile, stats, subscription)
│   │   ├── problem.ts                    # DSA problem schema (500+ problems)
│   │   ├── submission.ts                 # Code submission results
│   │   ├── mockSession.ts               # Mock test sessions & scoring
│   │   ├── company.ts                    # Company profiles & interview data
│   │   ├── roadmap.ts                    # Learning roadmap modules
│   │   ├── codingProfile.ts             # External platform profiles (LC, CF, etc.)
│   │   ├── mentor.ts                     # Mentor profiles & availability
│   │   ├── booking.ts                    # Mentorship session bookings
│   │   ├── message.ts                    # Conversations & messages
│   │   ├── subscription.ts              # Payment subscriptions
│   │   └── groupStudy.ts                # Study group sessions
│   │
│   ├── routes/
│   │   ├── index.ts                      # Barrel export
│   │   ├── userAuth.ts                   # Auth routes (10 endpoints)
│   │   ├── problemCreator.ts             # Problem routes (10 endpoints)
│   │   ├── submit.ts                     # Submission routes (5 endpoints)
│   │   └── mock.ts                       # Mock test routes (9 endpoints)
│   │
│   ├── services/
│   │   └── emailService.ts              # Nodemailer + Handlebars templating
│   │
│   ├── emails/                           # Handlebars email templates
│   │   ├── otp.hbs                       # OTP verification email
│   │   ├── welcome.hbs                   # Welcome after email verification
│   │   ├── password-reset.hbs            # Password reset link
│   │   └── password-changed.hbs          # Password change confirmation
│   │
│   ├── validator/
│   │   ├── authValidator.ts              # Auth input schemas (Joi)
│   │   └── problemValidator.ts           # Problem input schemas (Joi)
│   │
│   ├── types/
│   │   └── type.ts                       # All TypeScript interfaces (601 lines)
│   │
│   └── utils/
│       └── (utility functions)
│
└── frontend/                             # React + Vite SPA
    ├── package.json
    ├── vite.config.ts
    ├── index.html
    │
    └── src/
        ├── main.tsx                      # React entry point
        ├── App.tsx                       # Router + Layout + Page transitions
        ├── App.css                       # Global app styles
        ├── index.css                     # Base CSS reset + variables
        │
        ├── assets/
        │   └── (static assets)
        │
        ├── components/                   # Shared components
        │   ├── Navbar.tsx + Navbar.css    # Top navigation bar
        │   ├── Hero.tsx + Hero.css        # Landing page hero section
        │   └── CodeEditor.tsx             # Monaco-style code editor
        │
        └── pages/
            ├── Auth/
            │   ├── Login.tsx              # Email/password login
            │   ├── Signup.tsx             # Registration form
            │   ├── VerifyOTP.tsx           # OTP input screen
            │   ├── Login.css
            │   └── Signup.css
            │
            ├── Dashboard/
            │   ├── Dashboard.tsx           # User dashboard (stats, activity)
            │   └── Dashboard.css
            │
            ├── Problems/
            │   ├── Problems.tsx            # Problem list with filters & sort
            │   ├── Problems.css
            │   ├── ProblemSolver.tsx        # Full-screen code editor + problem view
            │   └── ProblemSolver.css
            │
            ├── MockTest/
            │   ├── MockTest.tsx            # Mock test launcher (type selection)
            │   ├── MockTest.css
            │   ├── MockSession.tsx         # Active mock test (timer, problems)
            │   ├── MockSession.css
            │   ├── MockHistory.tsx         # Past mock results
            │   └── MockHistory.css
            │
            ├── Companies/
            │   ├── Companies.tsx           # Company directory grid
            │   └── Companies.css
            │
            ├── Roadmaps/
            │   ├── Roadmaps.tsx            # Roadmap catalog grid
            │   ├── Roadmaps.css
            │   ├── RoadmapDetail.tsx        # Individual roadmap (ReactFlow tree)
            │   ├── RoadmapDetail.css
            │   └── data/                   # 29 roadmap data files
            │       ├── frontendRoadmap.ts
            │       ├── backendRoadmap.ts
            │       ├── fullstackRoadmap.ts
            │       ├── devopsRoadmap.ts
            │       ├── machineLearningRoadmap.ts
            │       ├── (24 more roadmaps...)
            │       └── vueRoadmap.ts
            │
            └── Settings/
                ├── Settings.tsx            # User settings & profile edit
                └── Settings.css
```

---

## 3. Technology Stack

### Backend

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Runtime | Node.js | v22.16.0 | JavaScript execution |
| Framework | Express.js | v5.2.1 | HTTP server & routing |
| Language | TypeScript | v5.9.3 | Type safety |
| Database | MongoDB | (Atlas) | Document storage |
| ODM | Mongoose | v9.1.5 | Schema modeling & queries |
| Auth | jsonwebtoken | v9.0.3 | JWT token generation & verification |
| Password | bcryptjs | v3.0.3 | Password hashing (10 rounds) |
| Validation | Joi + Zod | v18 / v3.25 | Request validation |
| Email | Nodemailer | v7.0.13 | Transactional emails |
| Templates | Handlebars | v4.7.8 | Email HTML templates |
| Security | Helmet | v8.1.0 | HTTP headers |
| Security | express-mongo-sanitize | v2.2 | NoSQL injection prevention |
| Security | HPP | v0.2.3 | HTTP parameter pollution |
| Rate Limit | express-rate-limit | v8.2.1 | API abuse prevention |
| HTTP Client | Axios | v1.13.3 | External API calls |
| Dev | Nodemon | v3.1.11 | Hot reload |
| Dev | ts-node | v10.9.2 | TypeScript execution |

### Frontend

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | React 18+ | UI components |
| Build | Vite | Fast dev server & bundling |
| Language | TypeScript | Type safety |
| Routing | React Router v6 | Client-side routing |
| HTTP | Axios | API communication |
| Animations | Framer Motion | Page transitions & micro-animations |
| Notifications | react-hot-toast | Toast notifications |
| Icons | react-icons | Icon library (Fa, etc.) |
| Code Editor | Monaco / CodeMirror | In-browser code editing |
| Flow Diagrams | ReactFlow | Roadmap tree visualization |

### Infrastructure

| Service | Purpose |
|---------|---------|
| MongoDB Atlas | Cloud database |
| Vite Dev Server | Frontend (port 5173) |
| Express Dev Server | Backend (port 5000) |
| Vite Proxy | `/api/*` → `localhost:5000` |

---

## 4. Authentication & Authorization Flow

### 4.1 Registration Flow

```
User fills signup form (name, email, username, password)
    │
    ▼
POST /api/auth/register
    │── Rate limited: authLimiter (max 5/15min per IP)
    │── Validated: registerSchema (Joi)
    │
    ▼
authController.register()
    │── Check duplicate email/username
    │── Hash password (bcrypt, 10 rounds)
    │── Create User document (role: 'user', plan: 'free')
    │── Generate 6-digit OTP (crypto.randomInt)
    │── Store OTP + expiry (10 min) on user doc
    │── Send OTP email via Nodemailer (otp.hbs template)
    │── Return JWT token + user data
    │
    ▼
Frontend stores JWT in localStorage
    │── Redirects to /verify-otp
    │
    ▼
User enters OTP from email
    │
    ▼
POST /api/auth/verify-otp
    │── Rate limited: otpLimiter
    │── Validated: verifyOTPSchema
    │── Compare OTP + check expiry
    │── Set isEmailVerified = true
    │── Clear OTP fields
    │── Send welcome email (welcome.hbs)
    │── Redirect to /dashboard
```

### 4.2 Login Flow

```
User enters email/username + password
    │
    ▼
POST /api/auth/login
    │── Rate limited: authLimiter
    │── Validated: loginSchema
    │
    ▼
authController.login()
    │── User.findByEmailorUsername() (custom static method)
    │── Check user exists & isActive
    │── comparePassword() (bcrypt.compare)
    │── Generate JWT: { id, iat, exp } (7d expiry)
    │── Set cookie: 'token' (httpOnly, secure, sameSite)
    │── Update lastLoginAt
    │── Return: { token, user: { name, email, role, ... } }
    │
    ▼
Frontend stores token in localStorage
    │── Sets Authorization header for all Axios requests
    │── Redirects to /dashboard
```

### 4.3 Password Reset Flow

```
POST /api/auth/forgot-password
    │── Rate limited: passwordResetLimiter
    │── Validated: forgotPasswordSchema
    │── Find user by email
    │── Generate reset token (crypto.randomBytes(32))
    │── Store hashed token + expiry (1 hour) on user
    │── Send email with reset link (password-reset.hbs)
    │
    ▼
User clicks link in email → opens reset form
    │
    ▼
POST /api/auth/reset-password
    │── Hash token from URL, match in DB
    │── Check expiry
    │── Update password (triggers pre-save bcrypt hook)
    │── Clear reset token fields
    │── Send confirmation email (password-changed.hbs)
```

### 4.4 JWT Protection Pipeline

```
Every protected request:
    │
    ▼
protect() middleware (authMiddleware.ts)
    │── Extract token from:
    │   1. Cookie: req.cookies.token
    │   2. Header: Authorization: Bearer <token>
    │── jwt.verify(token, JWT_SECRET)
    │── Find user by decoded.id
    │── Check user.isActive === true
    │── Check passwordChangedAt < token.iat
    │── Attach user to req.user
    │── Call next()
```

### 4.5 Role-Based Access

```
Roles: 'user' | 'admin' | 'professor'

Middleware chain for admin routes:
    protect → adminOnly → controller

adminOnly():
    │── Check req.user exists
    │── Check req.user.role === 'admin'
    │── 403 if not admin

restrictTo(...roles):
    │── Generic version: accepts array of allowed roles
    │── Used for professor + admin access
```

---

## 5. Frontend Routes & Navigation

### 5.1 Route Map

| Route | Component | Auth | Navbar | Description |
|-------|-----------|------|--------|-------------|
| `/` | `Hero` | ❌ | ✅ | Landing page |
| `/login` | `Login` | ❌ | ❌ | Login form |
| `/signup` | `Signup` | ❌ | ❌ | Registration form |
| `/verify-otp` | `VerifyOTP` | ❌ | ❌ | OTP verification |
| `/dashboard` | `Dashboard` | ✅ | ✅ | User dashboard |
| `/settings` | `Settings` | ✅ | ✅ | Profile & settings |
| `/problems` | `Problems` | ✅ | ✅ | Problem list with filters |
| `/problems/:id` | `ProblemSolver` | ✅ | ❌ | Full-screen code editor |
| `/companies` | `Companies` | ✅ | ✅ | Company directory |
| `/roadmaps` | `Roadmaps` | ✅ | ✅ | Roadmap catalog |
| `/roadmaps/:slug` | `RoadmapDetail` | ✅ | ❌ | Individual roadmap tree |
| `/mock-test` | `MockTest` | ✅ | ✅ | Mock test launcher |
| `/mock-test/history` | `MockHistory` | ✅ | ✅ | Past mock results |
| `/mock-test/session/new` | `MockSession` | ✅ | ❌ | Creating new mock |
| `/mock-test/session/:sessionId` | `MockSession` | ✅ | ❌ | Active mock session |

### 5.2 Navbar Visibility Logic

```typescript
// Navbar is hidden on:
const isAuthPage = ['/login', '/signup', '/verify-otp'].includes(pathname);
const isSessionPage = pathname.startsWith('/mock-test/session/');
const isProblemSolverPage = pathname.startsWith('/problems/') && pathname !== '/problems';
const isRoadmapDetailPage = pathname.startsWith('/roadmaps/') && pathname !== '/roadmaps';

const showNavbar = !isAuthPage && !isSessionPage && !isProblemSolverPage && !isRoadmapDetailPage;
```

**Rationale**: Immersive experiences (code editor, mock test, roadmap tree) hide the navbar to maximize screen space.

### 5.3 Page Transitions

All pages are wrapped in `PageWrapper` using Framer Motion:

```typescript
<motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
/>
```

`AnimatePresence` with `mode="wait"` ensures smooth exit-then-enter animations.

### 5.4 Navbar Structure

```
┌────────────────────────────────────────────────────────────────┐
│  / Graphora    Roadmaps  Problems  Companies  Mock Test  Resources  │  [AV ▼]  │
└────────────────────────────────────────────────────────────────┘

Links:
  - / Graphora (logo) → /
  - Roadmaps → /roadmaps
  - Problems → /problems (highlighted green when active)
  - Companies → /companies
  - Mock Test → /mock-test
  - Resources → (planned)
  - [AV ▼] → User dropdown (Dashboard, Settings, Logout)
```

---

## 6. Feature Modules

### 6.1 Landing Page

**Route**: `/`  
**Component**: `Hero.tsx`  
**Auth**: Not required  

**Purpose**: First impression — introduces Graphora with animated hero section, floating path backgrounds, and CTA buttons to sign up or explore.

**Flow**:

```
User visits graphora.com
    │
    ├── If not logged in → See Hero with "Get Started" CTA → /signup
    ├── If logged in → See Hero with "Go to Dashboard" CTA → /dashboard
    │
    └── Scroll down → Feature highlights, company logos, testimonials
```

---

### 6.2 Problems / Coding Practice

**Route**: `/problems` (list) and `/problems/:id` (solver)

#### 6.2.1 Problems List Page

**Component**: `Problems.tsx`  
**Layout**: Sidebar filters + main content grid

```
┌──────────────────────────────────────────────────────┐
│  Filters (Sidebar)       │  Popular Problems         │
│                          │  [Search] [Sort ▼]        │
│  COMPANIES               │                           │
│  ☐ Amazon (231)          │  Progress: 1/404 (0.25%)  │
│  ☐ Microsoft (209)       │  ─────────────────────    │
│  ☐ Flipkart (91)         │                           │
│  + View All              │  STATUS  TITLE  ACC  DIFF │
│                          │  ─  Maximum Index  24%  M │
│  TOPICS                  │  ─  LCM And GCD    37%  E │
│  ☐ arrays (96)           │  ─  Sum 1..N       43%  E │
│  ☐ dynamic prog (57)     │  ✓  Factorial      40%  E │
│  ☐ tree (48)             │  ...                      │
│  + View All              │                           │
│                          │  [◄ Page 1 of 20 ►]      │
│  PATTERNS                │                           │
│  ☐ sliding window        │                           │
│  ☐ two pointers          │                           │
│                          │                           │
│  DIFFICULTY              │                           │
│  ☐ easy (152)            │                           │
│  ☐ medium (225)          │                           │
│  ☐ hard (27)             │                           │
└──────────────────────────────────────────────────────┘
```

**Data Flow**:

```
Component mounts
    │
    ├── GET /api/problems/stats → { totalProblems, solvedCount, topics, companies, patterns, difficulties }
    │       → Populate sidebar filter counts
    │       → Populate progress bar
    │
    └── GET /api/problems?page=1&limit=20&sortBy=createdAt&sortOrder=desc
            → query params built from filters:
            │   ?difficulty=easy
            │   ?topic=arrays
            │   ?company=Amazon
            │   ?pattern=two+pointers
            │   ?search=binary+search
            │   ?sortBy=createdAt|difficulty|submissionsCount|accuracy
            │   ?sortOrder=asc|desc
            │
            → Response: { problems[], pagination: { page, limit, total, pages } }
            → Each problem: { title, difficulty, topics, isSolved, acceptanceRate, slug }
```

**Sort Options**:

- **Latest** → `sortBy=createdAt, sortOrder=desc`
- **Accuracy** → Backend aggregation: `acceptedCount / submissionsCount` (descending)
- **Submissions** → `sortBy=submissionsCount, sortOrder=desc`
- **Difficulty** → `sortBy=difficulty, sortOrder=asc` (easy → hard)

**Search**: Manual trigger (Enter key or click icon) via `activeSearchQuery` state pattern to prevent spam-fetching.

#### 6.2.2 Problem Solver Page

**Component**: `ProblemSolver.tsx`  
**Route**: `/problems/:id` (accepts MongoDB ObjectId or slug)

```
┌──────────────────────────────────┬──────────────────────────┐
│  Problem Title  [Easy]           │  Language: [JavaScript ▼]│
│                                  │                          │
│  Description tab │ Submissions   │  ┌──────────────────┐   │
│  ─────────────────────────────   │  │  // Code Editor   │   │
│  Given an array nums and target, │  │  // (Monaco)      │   │
│  return indices of two numbers   │  │                    │   │
│  that add up to target...        │  │  function solve(){ │   │
│                                  │  │    // your code    │   │
│  Example 1:                      │  │  }                 │   │
│  Input: [2,7,11,15], target=9    │  │                    │   │
│  Output: [0,1]                   │  └──────────────────┘   │
│                                  │                          │
│  Constraints:                    │  [Run Code] [Submit]     │
│  • 2 ≤ nums.length ≤ 10⁴        │                          │
│  • -10⁹ ≤ nums[i] ≤ 10⁹         │  Test Results:           │
│                                  │  ✅ Test 1: Passed       │
│  Hints: [Show Hint]             │  ❌ Test 2: Failed       │
│                                  │  Expected: [0,1]         │
│  Topics: array, hash-table      │  Got: [1,0]              │
└──────────────────────────────────┴──────────────────────────┘
```

**Data Flow**:

```
Component mounts with :id param
    │
    ▼
GET /api/problems/:id
    │── Backend resolves by ObjectId or slug
    │── Returns: problem data + user's past submissions + preferred starter code
    │── Selects starter code based on user's last submission language
    │
    ▼
User writes code in editor
    │
    ├── [Run Code] → POST /api/submit/run/:id
    │   Body: { code, language, customInput? }
    │   │── Rate limited (submissionLimiter)
    │   │── Runs against visible test cases only
    │   │── Returns: { results[], passed, total }
    │   │── Does NOT save to database
    │   └── Shows inline test results
    │
    └── [Submit] → POST /api/submit/submit/:id
        Body: { code, language, mockSessionId? }
        │── Rate limited
        │── Runs against ALL test cases (visible + hidden)
        │── Creates Submission document
        │── Updates Problem: submissionsCount++, acceptedCount++ (if passed)
        │── Updates User: stats.totalSubmissions++
        │── If Accepted: adds to user.solvedProblems[]
        │── If in mock session: updates mock problem status
        └── Returns: { status, runtime, memory, testCasesPassed, testCasesTotal, results[] }
```

**Submission Statuses**: `Pending | Accepted | Wrong Answer | Time Limit Exceeded | Memory Limit Exceeded | Runtime Error | Compilation Error | Internal Error`

---

### 6.3 Mock Test Engine

**Routes**: `/mock-test`, `/mock-test/session/:sessionId`, `/mock-test/history`

#### 6.3.1 Mock Test Launcher

**Component**: `MockTest.tsx`

**Mock Types**:

| Type | Config | Description |
|------|--------|-------------|
| `company` | `{ company: "Amazon" }` | Problems tagged with company |
| `difficulty` | `{ difficulty: "medium" }` | Problems of specific difficulty |
| `pattern` | `{ pattern: "dynamic programming" }` | Problems matching pattern |
| `custom` | `{ problemCount, timeLimit }` | Any random problems |

**Generation Flow**:

```
User selects mock type + config on /mock-test
    │
    ▼
POST /api/mocks/generate
    Body: { type, company?, difficulty?, pattern?, problemCount: 1-5, timeLimit: 15-180 }
    │── Validated: generateMockSchema (Zod)
    │── Check no active session exists
    │── Query problems matching criteria
    │── Randomly select `problemCount` problems
    │── Create MockSession document (status: 'pending')
    │── Set expiresAt based on timeLimit
    │── Return: session with problem IDs
    │
    ▼
Frontend navigates to /mock-test/session/:sessionId
```

#### 6.3.2 Active Mock Session

**Component**: `MockSession.tsx`

**Session Lifecycle**:

```
  pending ──── start ────► in_progress ──── complete ────► completed
                               │
                               ├── abandon ────► abandoned
                               │
                               └── timer expires ────► expired
```

**Session Flow**:

```
GET /api/mocks/:id → Load session details
    │
    ▼
POST /api/mocks/:id/start → Start timer
    │── Set startedAt = now
    │── Set status = 'in_progress'
    │── Calculate expiresAt = now + timeLimit
    │
    ▼
User solves problems (1 at a time):
    │── POST /api/mocks/:id/switch-problem → { fromOrder, toOrder }
    │── POST /api/submit/submit/:id → { code, language, mockSessionId }
    │       └── On Accepted: updates mock problem.solved = true
    │
    ▼
Session ends:
    ├── POST /api/mocks/:id/complete → Manual completion
    │       │── Calculate score: { solved, total, totalTime, averageTime }
    │       │── Update user.completedMocks++
    │       │── Set status = 'completed'
    │       └── Calculate percentile ranking
    │
    └── POST /api/mocks/:id/abandon → User quits
            │── Set status = 'abandoned'
            └── Record partial progress
```

#### 6.3.3 Mock History & Stats

```
GET /api/mocks/history?page=1&limit=10&type=company&status=completed
    → Past sessions with scores, times, and problem details

GET /api/mocks/stats
    → { totalMocks, completed, averageScore, bestScore, byType: {...} }

GET /api/mocks/leaderboard?type=company&company=Amazon&timeframe=month
    → Top performers ranked by score and time
```

---

### 6.4 Companies Directory

**Route**: `/companies`  
**Component**: `Companies.tsx`

**Layout**: Grid of company cards showing interview data:

```
┌──────────────────────┐
│  [Amazon Logo]       │
│  Amazon              │
│  🟢 Hiring           │
│                      │
│  Problems: 231       │
│  Easy: 45  Med: 120  │
│  Hard: 66            │
│                      │
│  Interview Rounds: 5 │
│  Typical: 4-6 weeks  │
│                      │
│  [View Problems]     │
└──────────────────────┘
```

**Data source**: Company data from problems' `companyTags` aggregated via `/api/problems/stats`.

**Flow**: Click company → navigates to `/problems?company=Amazon` (filtered problem list).

---

### 6.5 Roadmaps

**Routes**: `/roadmaps` (catalog) and `/roadmaps/:slug` (detail)

#### 6.5.1 Roadmap Catalog

**Component**: `Roadmaps.tsx`

**Available Roadmaps** (29 total):

| Category | Roadmaps |
|----------|----------|
| **Web Development** | Frontend, Backend, Fullstack, React, Angular, Vue, Node.js, JavaScript, TypeScript |
| **Data & AI** | Machine Learning, AI Engineer, AI Data Scientist, Data Analyst, Data Engineer, MLOps |
| **Mobile** | Android, iOS |
| **DevOps & Cloud** | DevOps, Docker, Kubernetes |
| **Infrastructure** | PostgreSQL, SQL, Git & GitHub |
| **Specialized** | Blockchain, Cyber Security, UX Design, Game Developer, Computer Science |
| **Languages** | JavaScript, Python, TypeScript |

**Layout**: Grid of roadmap cards with domain, difficulty, and estimated duration.

#### 6.5.2 Roadmap Detail

**Component**: `RoadmapDetail.tsx`

**Visualization**: Uses **ReactFlow** to render an interactive node tree of the learning path.

```
Roadmap data structure:
{
    title: "Frontend Development",
    slug: "frontend",
    description: "...",
    nodes: [
        { id: "1", label: "HTML", children: ["2", "3"] },
        { id: "2", label: "CSS", children: ["4"] },
        { id: "3", label: "JavaScript", children: ["4", "5"] },
        ...
    ]
}
```

Each node represents a topic/skill. Clicking a node shows resources (articles, videos, courses) and related practice problems.

**Data source**: Client-side `.ts` data files in `/pages/Roadmaps/data/` — not fetched from API.

---

### 6.6 Dashboard

**Route**: `/dashboard`  
**Component**: `Dashboard.tsx`

**Sections**:

```
┌──────────────────────────────────────────────────────────────┐
│  Welcome back, Aman! 👋                                      │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐   │
│  │ Problems  │ │  Mocks   │ │ Accuracy │ │   Streak     │   │
│  │  Solved   │ │ Completed│ │          │ │              │   │
│  │   142     │ │    23    │ │  67.2%   │ │   12 days    │   │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘   │
│                                                              │
│  Recent Submissions                     Difficulty Split     │
│  ┌────────────────────────┐            ┌─────────────────┐  │
│  │ ✅ Two Sum       Easy  │            │ 🟢 Easy:    85  │  │
│  │ ❌ LRU Cache     Hard  │            │ 🟡 Medium:  45  │  │
│  │ ✅ Valid BST     Med   │            │ 🔴 Hard:    12  │  │
│  └────────────────────────┘            └─────────────────┘  │
│                                                              │
│  Upcoming Mock Tests            Bookmarked Problems          │
│  ┌────────────────────────┐    ┌────────────────────────┐   │
│  │ Amazon Mock - 3 probs  │    │ ⭐ Merge K Lists      │   │
│  │ Due: Tomorrow 3pm      │    │ ⭐ Word Break          │   │
│  └────────────────────────┘    └────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

**Data Sources**:

- User profile: `GET /api/auth/profile`
- Problem stats: `GET /api/problems/stats`
- Recent submissions: `GET /api/submit/recent`
- Mock stats: `GET /api/mocks/stats`
- Active mock: `GET /api/mocks/active`

---

### 6.7 Settings / Profile

**Route**: `/settings`  
**Component**: `Settings.tsx`

**Sections**:

| Section | Fields | API |
|---------|--------|-----|
| Profile Info | Name, username, bio, avatar, college, age | `PATCH /api/auth/profile` |
| Languages | JavaScript, Python, C++, Java, Rust | `PATCH /api/auth/profile` |
| Social Links | GitHub, LinkedIn, Portfolio | `PATCH /api/auth/profile` |
| Target Companies | Microsoft, Google, Amazon, etc. | `PATCH /api/auth/profile` |
| Change Password | Current + new password | `PATCH /api/auth/change-password` |
| Subscription | Current plan, upgrade options | (reads `user.subscription`) |

---

## 7. Backend API Reference

### 7.1 Auth APIs (`/api/auth`)

| Method | Endpoint | Middleware | Controller | Description |
|--------|----------|------------|------------|-------------|
| `POST` | `/register` | authLimiter, validate | `register` | Create account + send OTP |
| `POST` | `/login` | authLimiter, validate | `login` | Authenticate + return JWT |
| `POST` | `/verify-otp` | otpLimiter, validate | `verifyOTP` | Verify email OTP |
| `POST` | `/resend-otp` | otpLimiter, validate | `resendOTP` | Resend OTP email |
| `POST` | `/forgot-password` | passResetLimiter, validate | `forgotPassword` | Send reset email |
| `POST` | `/reset-password` | passResetLimiter, validate | `resetPassword` | Set new password |
| `POST` | `/logout` | protect | `logout` | Clear token cookie |
| `GET` | `/profile` | protect | `getProfile` | Get current user data |
| `PATCH` | `/profile` | protect, validate | `updateProfile` | Update user profile |
| `PATCH` | `/change-password` | protect, validate | `changePassword` | Change password |

### 7.2 Problem APIs (`/api/problems`)

| Method | Endpoint | Middleware | Controller | Description |
|--------|----------|------------|------------|-------------|
| `GET` | `/` | protect, validate | `getAllProblems` | List with filters, pagination, sort |
| `GET` | `/:id` | protect, validate | `getProblemById` | Get by ObjectId or slug |
| `GET` | `/stats` | protect | `getProblemStats` | Difficulty/topic/company counts |
| `GET` | `/user/solved` | protect, validate | `getSolvedProblems` | User's solved list |
| `GET` | `/:id/submissions` | protect, validate | `getSubmissions` | User's submissions for problem |
| `GET` | `/company/:company` | protect | `getProblemsByCompany` | Problems by company tag |
| `POST` | `/` | protect, adminOnly, validate | `createProblem` | Create new problem |
| `PUT` | `/:id` | protect, adminOnly, validate | `updateProblem` | Update problem |
| `PATCH` | `/:id` | protect, adminOnly, validate | `updateProblem` | Partial update |
| `DELETE` | `/:id` | protect, adminOnly, validate | `deleteProblem` | Delete problem |
| `POST` | `/generate-mock` | protect, submissionLimiter | `generateMockProblems` | Generate mock problem set |

### 7.3 Submission APIs (`/api/submit`)

| Method | Endpoint | Middleware | Controller | Description |
|--------|----------|------------|------------|-------------|
| `POST` | `/submit/:id` | protect, submissionLimiter, validate | `submitCode` | Full evaluation (saves) |
| `POST` | `/run/:id` | protect, submissionLimiter, validate | `runCode` | Run with custom input (no save) |
| `GET` | `/recent` | protect, validate | `getRecentSubmissions` | User's recent submissions |
| `GET` | `/history/:id` | protect, validate | `getSubmissionHistory` | Submissions for a problem |
| `GET` | `/submission/:submissionId` | protect, validate | `getSubmissionById` | Single submission detail |

### 7.4 Mock Test APIs (`/api/mocks`)

| Method | Endpoint | Middleware | Controller | Description |
|--------|----------|------------|------------|-------------|
| `POST` | `/generate` | protect, submissionLimiter, validate | `generateMock` | Create mock session |
| `POST` | `/:id/start` | protect, validate | `startMock` | Start timer |
| `POST` | `/:id/switch-problem` | protect, validate | `switchProblem` | Navigate between problems |
| `POST` | `/:id/complete` | protect, validate | `completeMock` | End session |
| `POST` | `/:id/abandon` | protect, validate | `abandonMock` | Quit session |
| `GET` | `/:id` | protect, validate | `getMockSession` | Session details |
| `GET` | `/active` | protect | `getActiveMock` | Current active session |
| `GET` | `/history` | protect, validate | `getMockHistory` | Past sessions |
| `GET` | `/stats` | protect | `getMockStats` | User's mock statistics |
| `GET` | `/leaderboard` | protect, validate | `getMockLeaderboard` | Top performers |

### 7.5 Health Checks

| Endpoint | Description |
|----------|-------------|
| `GET /health` | Server health |
| `GET /api/auth/health` | Auth service health |
| `GET /api/problems/health` | Problem service health |
| `GET /api/submit/health` | Submit service health |
| `GET /api/mocks/health` | Mock service health |

---

## 8. Data Models & Relationships

### 8.1 Entity Relationship Diagram

```
                    ┌──────────────┐
                    │     User     │
                    │──────────────│
                    │ _id          │
                    │ name         │
                    │ email        │
                    │ role         │
                    │ subscription │
                    │ stats        │
                    │ solvedProblems[] ──────────┐
                    │ mentorProfile ─────┐       │
                    └──────┬───────┘     │       │
                           │             │       │
            ┌──────────────┼─────────────┼───────┼──────────────┐
            │              │             │       │              │
            ▼              ▼             ▼       ▼              ▼
    ┌──────────────┐ ┌──────────┐ ┌─────────┐ ┌──────────┐ ┌──────────┐
    │  Submission   │ │MockSession│ │ Mentor  │ │ Problem  │ │CodingProf│
    │──────────────│ │──────────│ │─────────│ │──────────│ │──────────│
    │ user (ref)   │ │ user(ref)│ │ user(ref)│ │ _id      │ │ user(ref)│
    │ problem (ref)│ │ problems│ │ pricing  │ │ title    │ │ leetcode │
    │ code         │ │   []     │ │ expertise│ │ difficulty│ │ codeforces│
    │ status       │ │ score    │ │ rating   │ │ topics[] │ │ github   │
    │ runtime      │ │ timeLimit│ │ avail[]  │ │ tags[]   │ └──────────┘
    │ testResults  │ │ status   │ └────┬─────┘ │ testCases│
    └──────────────┘ └──────────┘      │       └──────────┘
                                       │
                               ┌───────┴───────┐
                               │    Booking     │
                               │───────────────│
                               │ mentor (ref)   │
                               │ student (ref)  │
                               │ scheduledAt    │
                               │ payment {}     │
                               │ feedback {}    │
                               └───────┬───────┘
                                       │
                              ┌────────┴────────┐
                              │  Conversation   │
                              │────────────────│
                              │ participants[] │
                              │ booking (ref)  │
                              │ type: 'mentor' │
                              └────────┬───────┘
                                       │
                              ┌────────┴────────┐
                              │    Message      │
                              │────────────────│
                              │ conversation   │
                              │ sender         │
                              │ content        │
                              │ type           │
                              │ codeBlock {}   │
                              │ attachment {}  │
                              └────────────────┘
```

### 8.2 Model Summary

| Model | Collection | Fields | Indexes | Size |
|-------|-----------|--------|---------|------|
| User | users | 30+ fields | email+isActive, username+isActive | 5.2KB |
| Problem | problems | 20+ fields | difficulty, topics, companyTags, slug, pattern | 2.4KB |
| Submission | submissions | 15+ fields | user+problem, status, createdAt | 1.9KB |
| MockSession | mocksessions | 12+ fields | user+status, expiresAt | 2.7KB |
| Company | companies | 12+ fields | name, isActive | 1.4KB |
| Roadmap | roadmaps | 12+ fields | slug, domain, isPublished | 3.2KB |
| CodingProfile | codingprofiles | 8+ fields | user | 2.2KB |
| Mentor | mentors | 15+ fields | rating, expertise+isActive, verified | 1.8KB |
| Booking | bookings | 18+ fields | mentor+scheduledAt, student+status | 1.8KB |
| Conversation | conversations | 6+ fields | participants, lastMessage.sentAt | (in message.ts) |
| Message | messages | 10+ fields | conversation+createdAt | (in message.ts) |
| Subscription | subscriptions | 14+ fields | user, status, stripeSubscriptionId | 1.4KB |
| StudyGroup | studygroups | 12+ fields | (in groupStudy.ts) | 2.1KB |

---

## 9. Middleware Pipeline

### 9.1 Global Middleware (applies to ALL requests)

```
Request arrives
    │
    ├── 1. trust proxy (set to 1) — for rate limiting behind reverse proxy
    ├── 2. securityHeaders (Helmet) — CSP, HSTS, X-Frame, etc.
    ├── 3. sanitizeData (express-mongo-sanitize) — strip $ and . from body/query
    ├── 4. preventParamPollution (HPP) — prevent duplicate query params
    ├── 5. requestLogger (dev only) — log method, URL, status, duration
    ├── 6. CORS — origin: FRONTEND_URL, credentials: true
    ├── 7. express.json (limit: 10mb) — parse JSON bodies
    ├── 8. express.urlencoded (limit: 10mb) — parse form data
    ├── 9. cookieParser — parse cookies
    └── 10. apiLimiter — global rate limit for /api/* routes
```

### 9.2 Route-Level Middleware

| Middleware | Applied To | Config |
|------------|----------|--------|
| `authLimiter` | `/register`, `/login` | 5 requests / 15 minutes per IP |
| `otpLimiter` | `/verify-otp`, `/resend-otp` | Limited to prevent brute-force |
| `passwordResetLimiter` | `/forgot-password`, `/reset-password` | Limited resets |
| `submissionLimiter` | `/submit/*`, `/run/*`, `/generate-mock` | Prevent code spam |
| `validate(schema)` | All data-accepting routes | Zod/Joi schema validation |
| `protect` | All authenticated routes | JWT verification |
| `adminOnly` | Problem CRUD (create/update/delete) | Role check |
| `optionalAuth` | (available, not currently used) | Attach user if token exists |
| `requireVerifiedEmail` | (available, not currently used) | Email verification check |

### 9.3 Error Handling

```
Route handler throws / next(error)
    │
    ├── notFound middleware → 404 for unmatched routes
    │
    └── errorHandler middleware → catch-all error response
        │── Logs error in development
        │── Returns sanitized error in production
        │── Handles: ValidationError, duplicate key, JWT errors
```

---

## 10. Security Architecture

### 10.1 Security Layers

```
Layer 1: Network ────── CORS (origin whitelist), HTTPS (production)
Layer 2: Headers ────── Helmet (CSP, HSTS, X-Frame-Options, etc.)
Layer 3: Input ──────── express-mongo-sanitize (NoSQL injection)
                        HPP (parameter pollution)
                        Zod/Joi validation (type + format)
                        Input length limits (code: 64KB, search: 100 chars)
Layer 4: Rate Limit ─── Global: apiLimiter
                        Auth: 5 req/15min
                        Submissions: separate limiter
Layer 5: Auth ───────── JWT (signed, 7d expiry)
                        bcrypt (10 rounds)
                        Password change invalidates old tokens
Layer 6: Authorization ─ Role-based: user, admin, professor
                         Resource ownership checks in controllers
Layer 7: Data ───────── Restricted fields on update (submissionsCount, etc.)
                        select: false for sensitive fields (password, OTP)
                        Transform on toJSON: remove password, OTP
```

### 10.2 Environment Variables

```env
# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Database
MONGO_URI=mongodb+srv://...

# Authentication
JWT_KEY=<secret>
JWT_EXPIRES_IN=7d
COOKIE_EXPIRES_IN=7

# Email (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<email>
SMTP_PASSWORD=<app-password>
EMAIL_FROM=Graphora <noreply@graphora.com>

# API Keys
JUDGE0_API_KEY=<key>
JUDGE0_API_URL=<url>
```

---

## 11. Email System

### 11.1 Architecture

```
Controller triggers email
    │
    ▼
emailService.ts
    │── Load Handlebars template (.hbs file)
    │── Compile with data (name, OTP, link, etc.)
    │── Send via Nodemailer transporter
    │── SMTP: Gmail App Password (development)
    │── Returns: message ID or error
```

### 11.2 Email Templates

| Template | Trigger | Variables |
|----------|---------|-----------|
| `otp.hbs` | Registration, resend OTP | `{ name, otp, expiryMinutes }` |
| `welcome.hbs` | Email verified | `{ name, dashboardUrl }` |
| `password-reset.hbs` | Forgot password | `{ name, resetUrl, expiryHours }` |
| `password-changed.hbs` | Password changed/reset | `{ name, timestamp }` |

---

## 12. Code Execution Pipeline

### 12.1 Submission Flow

```
POST /api/submit/submit/:id
    │
    ▼
submitController.submitCode()
    │── Validate: code (1-64KB), language, problem exists
    │── Load problem's test cases (visible + hidden)
    │── Send code to Judge0 API for execution
    │── For each test case:
    │   │── Create Judge0 submission
    │   │── Wait for result (polling or callback)
    │   │── Compare output with expected
    │   │── Record: passed/failed/error, runtime, memory
    │
    │── Aggregate results:
    │   │── Status: Accepted (all pass) or first failing status
    │   │── Total runtime, total memory
    │   │── Test cases passed / total
    │
    │── Create Submission document in DB
    │── Update Problem: submissionsCount++ (always), acceptedCount++ (if accepted)
    │── If Accepted + not already solved: add to user.solvedProblems[]
    │── If part of mock: update MockSession problem entry
    │
    └── Return: { submission details }
```

### 12.2 Run Code Flow (No Save)

```
POST /api/submit/run/:id
    │── Same execution, but:
    │   │── Only visible test cases
    │   │── Custom input supported
    │   │── Does NOT create Submission document
    │   │── Does NOT update stats
    └── Returns: { results[] }
```

### 12.3 Supported Languages

| Language | Judge0 ID | Extensions |
|----------|-----------|------------|
| JavaScript | (config) | `.js` |
| Python | (config) | `.py` |
| Java | (config) | `.java` |
| C++ | (config) | `.cpp` |

---

## 13. State Management (Frontend)

### 13.1 Authentication State

```typescript
// Stored in localStorage:
token: string                    // JWT token

// Derived on each page:
const isLoggedIn = !!localStorage.getItem('token');

// Auth headers (passed to every API call):
const getAuthHeaders = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

// On 401 response: redirect to /login, clear token
```

### 13.2 Component-Level State

Each page manages its own state via `useState` + `useEffect` + `useCallback`:

```typescript
// Example: Problems page state
const [problems, setProblems] = useState([]);
const [loading, setLoading] = useState(true);
const [pagination, setPagination] = useState({ page: 1, total: 0, pages: 0 });
const [searchQuery, setSearchQuery] = useState('');
const [activeSearchQuery, setActiveSearchQuery] = useState('');  // Manual trigger
const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
const [selectedPatterns, setSelectedPatterns] = useState<string[]>([]);
const [sortOption, setSortOption] = useState<'latest' | 'accuracy' | 'submissions' | 'difficulty'>('latest');
const [stats, setStats] = useState(null);
```

### 13.3 Data Fetching Pattern

```typescript
// Standard pattern across all pages:
const fetchData = useCallback(async () => {
    try {
        setLoading(true);
        const response = await axios.get('/api/endpoint', {
            ...getAuthHeaders(),
            params: { /* query params */ }
        });
        if (response.data.success) {
            setData(response.data.data);
        }
    } catch (error) {
        console.error('Failed:', error);
        toast.error('Something went wrong');
        if (error.response?.status === 401) navigate('/login');
    } finally {
        setLoading(false);
    }
}, [dependencies]);

useEffect(() => {
    fetchData();
}, [fetchData]);
```

---

## 14. Planned Features

### 14.1 Mentor Connect (PRD Complete — see PRD.md)

| Component | Status | Details |
|-----------|--------|---------|
| Mentor Discovery | 📋 Planned | Browse, filter, book mentors |
| Video Calls (Jitsi) | 📋 Planned | In-browser video sessions |
| Real-time Chat (Socket.IO) | 📋 Planned | Text + code messaging |
| Razorpay Payments | 📋 Planned | Per-session payments |
| Mentor Dashboard | 📋 Planned | Earnings, availability, bookings |
| Review System | 📋 Planned | Post-session ratings |

### 14.2 Coding Profile Sync

| Component | Status | Details |
|-----------|--------|---------|
| LeetCode profile sync | 📋 Planned | Import solved count, rating, streak |
| Codeforces integration | 📋 Planned | Rating, contest history |
| GitHub contributions | 📋 Planned | Streak, top languages, repos |
| CodeChef integration | 📋 Planned | Rating, stars |
| HackerRank badges | 📋 Planned | Certificates, badges |
| Unified analytics | 📋 Planned | Cross-platform progress dashboard |

### 14.3 Study Groups

| Component | Status | Details |
|-----------|--------|---------|
| Group creation | 📋 Planned | Public/private groups with invite codes |
| Group sessions | 📋 Planned | Scheduled problem-solving with peers |
| Group chat | 📋 Planned | Real-time messaging within groups |
| Leaderboard | 📋 Planned | Intra-group rankings |

### 14.4 Additional Enhancements

- **Resources page** — curated learning resources (articles, videos, books)
- **Admin panel** — problem management, user management, analytics
- **Progressive Web App** — offline access, push notifications
- **Dark/Light theme toggle** — currently dark-only
- **Multi-language support** — i18n for Hindi, etc.
- **Export data** — download solved problems, submission history as PDF

---

## Appendix A: API Response Format

All API responses follow a consistent structure:

```json
// Success
{
    "success": true,
    "message": "Operation successful",
    "data": {
        // Response payload
    }
}

// Error
{
    "success": false,
    "message": "Human-readable error message",
    "error": "Detailed error (development only)"
}

// Paginated List
{
    "success": true,
    "data": {
        "problems": [...],
        "pagination": {
            "page": 1,
            "limit": 20,
            "total": 404,
            "pages": 21
        }
    }
}
```

---

## Appendix B: Development Commands

```bash
# Backend
cd backend
npm run dev          # nodemon --exec ts-node app.ts (port 5000)
npm run build        # tsc
npm start            # node dist/app.js

# Frontend
cd frontend
npm run dev          # vite dev server (port 5173)
npm run build        # vite build
npm run preview      # preview production build
```

---

## Appendix C: Vite Proxy Configuration

```typescript
// vite.config.ts
export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
            }
        }
    }
});
```

This allows the frontend to call `/api/*` endpoints without CORS issues during development.

---

*End of Application Flow Documentation*
