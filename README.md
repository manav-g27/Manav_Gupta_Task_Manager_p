# 📝 Task Manager App

A minimal yet beautifully designed **Task Management App** built using  
**React + TypeScript + Vite + Tailwind CSS** (frontend) and a **.NET 8 Minimal API** (backend).  

Users can **add**, **toggle**, and **delete** tasks in real-time with a responsive, modern UI.  
Perfect for learning full-stack development, CRUD operations, and API integration.

---

## 🚀 Live Demo

- **Frontend (Netlify):** mellow-bunny-e08687.netlify.app (#)
- **Backend (Render):** https://manav-gupta-task-manager.onrender.com (#)

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

Now listening on: http://localhost:5207

Keep this terminal open.
This runs your backend API at http://localhost:5207

💻 Step 3: Run the Frontend (React App)
1️⃣ Open a new terminal window and go to:
cd apps/task-manager-basic

2️⃣ Install dependencies:
npm install

3️⃣ Create an environment file to connect frontend → backend:
echo VITE_API_URL=http://localhost:5207 > .env.local

4️⃣ Start the development server:
npm run dev

Now open your browser and visit:
👉 http://localhost:5173

<p align="center">
  <img src="https://drive.google.com/file/d/1gB3y5g3GPV6cogqqhVNDHEW2qGjEM7y6/view?usp=drive_link" alt="Task Manager Screenshot" width="700"/>
</p>

<p align="center">
  <img src="https://drive.google.com/file/d/1IFoRl2RpfMqufsbnK0ZdPrlSvkeW4kjP/view?usp=drive_link" width="700"/>
</p>

<p align="center">
  <img src="https://drive.google.com/file/d/1_xrVvT-W6OE7VCj6foV3lE3Aa2i9K2Z7/view?usp=drive_link" alt="Task Manager Screenshot" width="700"/>
</p>


