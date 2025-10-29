# 📝 Task Manager App

A minimal yet beautifully designed **Task Management App** built using  
**React + TypeScript + Vite + Tailwind CSS** (frontend) and a **.NET 8 Minimal API** (backend).  

Users can **add**, **toggle**, and **delete** tasks in real-time with a responsive, modern UI.  
Perfect for learning full-stack development, CRUD operations, and API integration.

---

## 🚀 Live Demo

- **Frontend (Netlify):** mellow-bunny-e08687.netlify.app 
- **Backend (Render):** https://manav-gupta-task-manager.onrender.com 

---

## 🧩 Tech Stack

| Layer | Technology |
|:--|:--|
| Frontend | React + TypeScript + Vite |
| Styling | Tailwind CSS |
| State Management | React Hooks |
| Backend | ASP.NET Core 8 Minimal API |
| Deployment | Netlify (Frontend), Render (Backend) |

---

## ⚙️ Features

✅ Add new tasks instantly  
✅ Toggle completion status  
✅ Delete tasks  
✅ Persistent and responsive UI  
✅ Keyboard shortcuts (`/` to search, `N` to add new task)  
✅ Modern glassy UI with blob gradient design  

---

## 🛠️ Local Setup

### 1️⃣ Clone the Repository
git clone https://github.com/manav-g27/Manav_Gupta_Task_Manager_p
---

## How to run

Extract and open the folder

⚙️ Step 2: Run the Backend (API)

1️⃣ Navigate to the API directory:
cd apps/apis/TaskManager.BasicApi

2️⃣ Restore and run the API:

dotnet restore

dotnet run --no-restore


You should see output like:

Now listening on: http://localhost:6207

Keep this terminal open.
This runs your backend API at http://localhost:6207

💻 Step 3: Run the Frontend (React App)

1️⃣ Open a new terminal window and go to:
cd apps/task-manager-basic

2️⃣ Install dependencies:
npm install

3️⃣ Connect frontend → backend:

In .env.local file set following variable to the address given by the server ->

VITE_API_URL=http://localhost:6207 

4️⃣ Start the development server:
npm run dev

Now open your browser and visit:
👉 http://localhost:5173

Screenshots : https://drive.google.com/drive/folders/1ZAwUsUIetDsIbWIQu00IuIB6tkQkz_Yf?usp=drive_link


