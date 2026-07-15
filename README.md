# WebSockets Scoreboard

A real-time WebSockets Scoreboard application built using React, Node.js, Express, and Socket.IO. The application allows users to create, update, and delete live match scores with instant synchronization across all connected clients.

---

## Project Features

- Real-time score updates using WebSockets
- Add new matches
- Edit existing scores
- Delete matches
- Automatic synchronization across multiple clients
- Loading indicator during connection
- Empty state when no matches are available
- Form validation
- XSS input sanitization
- Simulated analytics logging
- Accessible UI with keyboard navigation and ARIA labels
- Responsive monochrome design

---

## Tech Stack

### Frontend

- React
- Vite
- CSS3
- Socket.IO Client

### Backend

- Node.js
- Express.js
- Socket.IO

---

## Project Structure

```
WebSockets-Scoreboard
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── services
│   │   ├── utils
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── data
│   ├── utils
│   ├── socket.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd WebSockets-Scoreboard
```

---

## Backend Setup

```bash
cd server
npm install
npm start
```

Server runs at:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Usage

1. Start the backend server.
2. Start the frontend application.
3. Open the application in your browser.
4. Add a new match.
5. Edit or delete match scores.
6. Open the application in multiple browser tabs to see real-time updates.

---

## WebSocket Events

### Client to Server

- add-score
- update-score
- delete-score

### Server to Client

- scores
- validation-error

---

## Validation

The application prevents:

- Empty team names
- Invalid score values
- Malformed input
- Unsanitized text input

---

## Accessibility

- Keyboard navigable interface
- ARIA labels for interactive elements
- Semantic HTML using `main`, `header`, `section`, and `article`
- Live status updates using `aria-live`

---

## Deployment

### Frontend

Deploy using Vercel.

### Backend

Deploy using Render.

Update the frontend WebSocket URL after deployment.

---
