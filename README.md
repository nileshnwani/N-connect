# N-Connet: Real-time Chat Application

## Overview
N-Connet is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to chat one-on-one and in group conversations with seamless messaging functionality.

## Features
- **User Authentication** (JWT-based login/signup)
- **Real-time Messaging** (Socket.io)
- **One-to-One Chats**
- **Group Chats** with Admin Controls
- **Notifications** for New Messages
- **Responsive UI** with Chakra UI

## Tech Stack
- **Frontend:** React.js, Chakra UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Real-time:** Socket.io

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (Local or Cloud-based Atlas)
- npm or yarn

### Steps to Run Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/n-connet.git
   cd n-connet
   ```

2. **Set up the backend:**
   ```sh
   cd backend
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `backend/` directory and add:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/chatapp
   NODE_ENV=production
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the backend server:**
   ```sh
   npm start
   ```

5. **Set up the frontend:**
   ```sh
   cd ../frontend
   npm install
   ```

6. **Run the frontend:**
   ```sh
   npm start
   ```

7. **Open in browser:**
   ```
   http://localhost:3000
   ```

## API Endpoints
### User Authentication
- `POST /api/user/signup` - Register a new user
- `POST /api/user/login` - Login a user

### Chat Functionality
- `POST /api/chat/` - Start a new chat
- `GET /api/chat/` - Fetch all user chats

### Messages
- `POST /api/message/` - Send a message
- `GET /api/message/:chatId` - Get messages in a chat

## Screenshots
(Add screenshots here if available)

## License
This project is licensed under the MIT License.

## Contributors
- [Your Name](https://github.com/yourusername)

