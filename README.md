🎓 College Placement Management System (Backend)

This is the backend API for the College Placement Management System, built using the MERN Stack.
It provides REST APIs for Students, Admin, TPO, Management, and Companies to manage placements, job postings, applications, resumes, internships, and role-based access.

🚀 Live API

Backend (Render): https://college-placement-management-system-ubfr.onrender.com

Health Check: https://college-placement-management-system-ubfr.onrender.com/health

Frontend (Netlify): https://collegeplacementfrontend.netlify.app

🛠 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt

Multer (Resume & Offer Letter Uploads)

Render (Deployment)

✨ Features
🔐 Authentication & Authorization

JWT based authentication

Role based access control for:

student

admin

tpo

management

company

👨‍🎓 Student APIs

Signup & Login

Upload resume

Upload offer letter

Apply for jobs

Check job applied status

Update job status

Internship CRUD

👑 Admin APIs

Get students data year & branch wise

Notify students about interview/hired status

Approve student profile (if implemented)

🏢 Company APIs

Company login

Post jobs

View applicants

Update applicant status

🔑 Demo Login Credentials (All Roles)

Use these dummy accounts for testing:

Role	Email	Password
Admin	admin@gmail.com
	Admin@123
Student	student@gmail.com
	Student@123
TPO	tpo@gmail.com
	Tpo@123
Management	management@gmail.com
	Management@123
Company	company@gmail.com
	Company@123

⚠️ These are test credentials only.

📦 Installation & Setup (Backend)
1️⃣ Clone the repository
git clone <YOUR_BACKEND_GITHUB_REPO_LINK>

2️⃣ Go into the backend folder
cd <backend-folder-name>

3️⃣ Install dependencies
npm install

4️⃣ Create .env file

Create a .env file in the root folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ Run Backend Server
Development mode
npm run dev

Production mode
npm start


Server runs at:

http://localhost:5000

📌 API Base URL
Local:
http://localhost:5000

Production:
https://college-placement-management-system-ubfr.onrender.com

🧾 Important API Routes
Student

POST /api/v1/student/signup

POST /api/v1/student/login

POST /api/v1/student/upload-resume

POST /api/v1/student/upload-offer-letter

PUT /api/v1/student/job/:jobId/:studentId

GET /api/v1/student/check-applied/:jobId/:studentId

Admin

GET /api/v1/student/all-students-data-year-and-branch

GET /api/v1/student/notify-interview-hired

📂 File Uploads

Uploads are handled using Multer:

Resume stored in: public/resumes

Offer Letters stored in: public/offerLetter

Profile Images stored in: public/profileImgs

Static access:

/resume

/offerLetter

/profileImgs

🛡 CORS Setup

The backend supports frontend requests from:

http://localhost:5173

https://collegeplacementfrontend.netlify.app

❌ Do NOT Push node_modules

Make sure .gitignore contains:

node_modules/
.env


If you pushed it already, remove it:

git rm -r --cached node_modules
git add .
git commit -m "Remove node_modules"
git push origin main

📌 Deployment (Render)

Push backend to GitHub

Connect repo in Render

Set environment variables in Render:

MONGO_URI

JWT_SECRET

Deploy

👨‍💻 Author

Balaji (Gowthambalaji)
GitHub: https://github.com/Gbalaji2

⭐ Support

If you like this project, give it a ⭐ on GitHub!
