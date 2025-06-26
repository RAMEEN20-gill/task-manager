# Task Management System 

A full-stack Task Management System built using the MERN stack with a responsive React frontend, Express + MongoDB backend, and full unit testing support.

##  Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB (Mongoose)
- Testing:
  - Frontend: React Testing Library + Jest
  - Backend: Supertest + Jest
- API: RESTful architecture

## Project Structure
├── backend/ # Express API
│ ├── models/ # Mongoose schema
|    └── task.js
| ├── middleware/ 
|   └── errorHandler.js
│ ├── routes/ # API routes
|   └── tasks.js
│ ├── test/ # API unit tests (Jest + Supertest)
│   └── taskRoutes.test.js # Express app setup
| └── .env
| └── .gitignore
| └── app.js
| └── db.js
| └── server.js
├── frontend/ # React application
│ ├── public/
|  └── index.html
│ ├── src/
│ │ ├── components/ # TaskForm, TaskList, TaskDetails
| |  └── TaskDetails.jsx
| |  └── TaskForm.jsx
| |  └── TaskList.jsx
| |    ├── services/
| |     └── components.test.js
│ │ ├── services/ # Axios API functions
│ │    └── api.js
| | └── App.js
│ | └── index.css
| | └── index.js
| | └── .gitignore
│ | └── package.json
│ | └── package-lock.json
│ | └── postcss.config.js
│ | └── tailwind.config.js

##  Prerequisites

- Node.js (v14+)
- MongoDB installed and running (or use MongoDB Atlas)
- Git
- Internet connection (for dependencies)

## Setup Instructions

 1. Clone the Repository

```bash
git clone https://github.com/RAMEEN20-gill/task-manager.git
cd tailwind-react-template

mv task-manager tailwind-react-template
cd tailwind-react-template


2. Backend Setup

cd backend
npm install
Create a .env file in /backend with:
MONGO_URI=mongodb://localhost:27017/taskmanager
PORT=5000
npm start
API will run on http://localhost:5000/api/tasks.

3. Frontend Setup

cd ../frontend
npm install
**Start the React app:**
npm start
React app will run on http://localhost:3000.

## Running Tests
**Backend Tests (Jest + Supertest)**
cd backend
npm test
**Frontend Tests (React Testing Library + Jest)**
cd ../frontend
npm test

## Features
 Create, Read, Update, Delete (CRUD) tasks

 Filter by status

 Pagination

 Task details popup

 Responsive UI with Tailwind CSS

 Complete unit testing for backend and components


## API Endpoints

| Method | Endpoint         | Description               |
| ------ | ---------------- | ------------------------- |
| GET    | `/api/tasks`     | Get all tasks (paginated) |
| GET    | `/api/tasks/:id` | Get single task           |
| POST   | `/api/tasks`     | Create a task             |
| PUT    | `/api/tasks/:id` | Update a task             |
| DELETE | `/api/tasks/:id` | Delete a task             |


##  Deployment

###  Deploying Frontend on Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub.
2. Click “New Project” and import your GitHub repo.
3. Set the `frontend` folder as the root directory.
4. Make sure the build command is `npm run build` and the output directory is `build`.
5. Deploy.

###  Deploying Backend on Render
1. Go to [https://render.com](https://render.com) and log in.
2. Click "New Web Service" and connect your GitHub repo.
3. Set the root directory to `backend`.
4. Set environment variables like:
   - `MONGO_URI`
   - `PORT` (optional, default is 5000)
5. Set build command: `npm install`
6. Set start command: `node server.js` or `npm start`
7. Click “Create Web Service” to deploy.



