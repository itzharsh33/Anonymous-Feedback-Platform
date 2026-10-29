# Anonymous Feedback Platform

A full-stack anonymous messaging application built using Next.js and MongoDB. The platform allows users to receive anonymous messages through their profiles without revealing the sender's identity.

The application combines email OTP verification, secure authentication, anonymous messaging, and a message suggestion feature.

## Live Demo

**Application:** https://mistry-message-new.vercel.app

### Demo Credentials

| Field | Value |
|---|---|
| Username | `demo_user` |
| Password | `demo@password` |

Use the demo account to explore the application without completing the registration and email verification process.

## Tech Stack

**Frontend:** Next.js, Tailwind CSS

**Backend:** Next.js API Routes

**Database:** MongoDB, Mongoose

**Authentication:** Custom Authentication, Email OTP Verification

**Email Service:** Resend

**Other Services:** Message Suggestion API

**Deployment:** Vercel, MongoDB Atlas

## Key Features

### Authentication & Email Verification
- Custom user registration and sign-in
- Email OTP verification using Resend
- Verified account access
- Protected API routes and session management

### Anonymous Messaging
- Send messages without revealing sender identity
- Receive anonymous feedback through user profiles
- View received messages through an inbox interface
- MongoDB-backed message storage

### Message Suggestions
- Integrated message suggestion API
- Helps users compose meaningful feedback
- Simplifies the anonymous messaging experience

### User Experience
- Responsive interface built with Next.js
- User-friendly authentication and messaging workflows
- Demo account for easy project exploration

## Application Workflow

1. A user registers with an email address.
2. The application sends a verification code using Resend.
3. The user verifies the code and accesses the platform.
4. Other users can send anonymous messages to the recipient.
5. Received messages are stored in MongoDB and displayed in the recipient's inbox.
6. Users can use the message suggestion feature when composing feedback.

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/itzharsh33/anonymous-feedback-platform.git
cd anonymous-feedback-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root.

```env
MONGODB_URI=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

Configure any additional environment variables required by the message suggestion service.

### 4. Run the Application

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Security Considerations

- Email verification during registration
- Protected application routes
- Session-based user authentication
- Environment variables for sensitive credentials

## Key Learnings

- Implementing email OTP verification with Resend
- Building custom authentication workflows
- Developing APIs using Next.js
- Integrating MongoDB and Mongoose
- Designing anonymous messaging functionality
- Integrating a message suggestion service
- Deploying a full-stack Next.js application

## Author

**Harsh Kumar Yadav**

B.Tech Computer Science & Engineering

GitHub: https://github.com/itzharsh33
