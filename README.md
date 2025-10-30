# 📝 Task Manager App

**Please wait and try 2-3 times after a minute as backend is hosted on render free tier and it may take some time to become active due to no frequent use**

A minimal yet beautifully designed **Task Management App** built using  
**React + TypeScript + Vite + Tailwind CSS** (frontend) and a **.NET 8 Minimal API** (backend).

Users can **add**, **toggle**, and **delete** tasks in real-time with a responsive, modern UI.  
Perfect for learning **full-stack development**, **CRUD operations**, and **API integration**.

---

## 🚀 Live Demo

- **Frontend (Netlify):** [mellow-bunny-e08687.netlify.app](https://mellow-bunny-e08687.netlify.app)  
- **Backend (Render):** [https://manav-gupta-task-manager.onrender.com](https://manav-gupta-task-manager.onrender.com)

---

## 🧩 Tech Stack

| Layer | Technology |
|:--|:--|
| **Frontend** | React + TypeScript + Vite |
| **Styling** | Tailwind CSS |
| **State Management** | React Hooks |
| **Backend** | ASP.NET Core 8 Minimal API |
| **Deployment** | Netlify (Frontend), Render (Backend) |

---

## ⚙️ Features

✅ Add new tasks instantly  
✅ Toggle completion status  
✅ Delete tasks  
✅ Persistent and responsive UI  
✅ Keyboard shortcuts (`/` to search, `N` to add a new task)  
✅ Modern glassy UI with blob gradient design  

---

## 🛠️ Local Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/manav-g27/Manav_Gupta_Task_Manager_p
cd Manav_Gupta_Task_Manager_p
```

---

### ⚙️ Step 2: Run the Backend (API)

1️⃣ Navigate to the API directory:
```bash
cd apps/apis/TaskManager.BasicApi
```

2️⃣ Restore and run the API:
```bash
dotnet restore
dotnet run --no-restore
```

You should see output like:
```
Now listening on: http://localhost:6207
```

> 🟢 Keep this terminal open — it runs your backend API at  
> **http://localhost:6207**

---

### 💻 Step 3: Run the Frontend (React App)

1️⃣ Open a new terminal window and navigate to:
```bash
cd apps/task-manager-basic
```

2️⃣ Install dependencies:
```bash
npm install
```

3️⃣ Connect frontend → backend:

Create a `.env.local` file in the frontend root and add:
```env
VITE_API_URL=http://localhost:6207
```

4️⃣ Start the development server:
```bash
npm run dev
```

Now open your browser and visit:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 📸 Screenshots

View app screenshots here:  
🔗 [Google Drive Folder](https://drive.google.com/drive/folders/1ZAwUsUIetDsIbWIQu00IuIB6tkQkz_Yf?usp=drive_link)

---

## 💡 Author

**Manav Gupta**  
📧 [LinkedIn](https://www.linkedin.com/in/manav-gupta-27) | 🌐 [GitHub](https://github.com/manav-g27)

---


