# EventLay

EventLay is a full-stack event management and badge automation platform designed to simplify and streamline event operations.

The platform provides role-based access for administrators, event organizers, volunteers, and clients, allowing each user to access features based on their responsibilities.

## Features

* User registration and authentication
* Role-based access control
* Event management
* Participant management
* Volunteer management
* Event check-in
* Badge generation and management
* Role-specific dashboards
* RESTful API integration
* MongoDB database integration
* Responsive user interface

## User Roles

### Administrator

Manages users, events, and overall platform operations.

### Event Organizer

Creates and manages events, participants, and event-related activities.

### Volunteer

Supports event operations, participant check-in, and on-site activities.

### Client

Accesses relevant event information and services.

## Technology Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST APIs
* CORS

### Database

* MongoDB
* MongoDB Atlas
* Mongoose

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Figma

## System Architecture

```text
React Frontend
       |
       | REST API
       |
       v
Node.js + Express.js
       |
       | Mongoose
       |
       v
MongoDB Atlas
```

## Project Structure

```text
EventLay/
|
├── client/
|   ├── src/
|   |   ├── components/
|   |   ├── pages/
|   |   ├── api/
|   |   ├── App.jsx
|   |   └── main.jsx
|   |
|   ├── package.json
|   └── vite.config.js
|
├── server/
|   ├── controllers/
|   ├── models/
|   ├── routes/
|   ├── config/
|   ├── server.js
|   └── package.json
|
├── .gitignore
└── README.md
```

## Authentication

EventLay implements user authentication and role-based access control.

Users can register using their assigned role and subsequently log in to access the appropriate dashboard.

### Register User

```text
POST /api/auth/register/:role
```

### Login User

```text
POST /api/auth/login
```

After successful authentication, the user's role determines the dashboard and features available to them.

## User Model

The User model contains the following fields:

```text
User
├── name
├── email
├── password
└── role
```

Supported roles:

```text
ADMIN
EVENT_ORGANIZER
VOLUNTEER
CLIENT
```

The email field is unique to prevent duplicate user accounts.

## Installation

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git
* MongoDB Atlas account

### Clone the Repository

```bash
git clone <repository-url>
cd EventLay
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

Open a new terminal and run:

```bash
cd client
npm install
```

## Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Do not commit the `.env` file to the repository.

## Running the Application

### Start the Backend

From the `server` directory:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### Start the Frontend

From the `client` directory:

```bash
npm run dev
```

The frontend will run on the local development URL provided by Vite.

## Application Workflow

```text
User
  |
  v
Registration / Login
  |
  v
Authentication API
  |
  v
Express.js Backend
  |
  v
MongoDB Atlas
  |
  v
Role Identification
  |
  v
Role-Specific Dashboard
```

## Design

The EventLay interface and user flows are designed using Figma.

The design focuses on:

* Consistent visual hierarchy
* Clear navigation
* Reusable components
* Responsive layouts
* Role-specific user experiences
* Efficient event management workflows

## Future Enhancements

* QR-code based participant check-in
* Automated badge generation
* Badge printing integration
* Attendance tracking
* Event analytics
* Email notifications
* Participant registration
* Volunteer assignment and management
* Administrative reporting
* Enhanced dashboard analytics

## Development Status

EventLay is currently under active development.

The authentication system, registration, database integration, and initial frontend architecture have been implemented. Role-specific dashboards and additional event management features are currently being developed.

## License

This project is developed for academic and educational purposes.

