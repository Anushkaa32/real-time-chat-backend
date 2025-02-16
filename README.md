# Real-Time Chat Backend

This is the **backend** of the **real-time chat application**, built with **Strapi** and deployed on **Render**.

---

## 🚀 Features
- **User authentication (JWT)**
- **Role-based access control**
- **SQLite/PostgreSQL database support**
- **Real-time communication APIs**
- **Deployed on Render**

---

## 📦 Tech Stack
- **Strapi (Node.js Headless CMS)**
- **SQLite/PostgreSQL**
- **Render (Deployment)**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Anushkaa32/real-time-chat-backend.git
cd real-time-chat-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
NODE_ENV=development
DATABASE_CLIENT=sqlite
JWT_SECRET=your-jwt-secret
ADMIN_JWT_SECRET=your-admin-secret
PORT=1337
```

### 4️⃣ Run the Backend Locally
```sh
npm run develop
```

### 5️⃣ Deploy to Render
- Push changes to GitHub
- Deploy using **Render Dashboard**
- Ensure environment variables are set

---

## 🔥 API Endpoints

### **Authentication APIs**
- **Login** → `POST /api/auth/local`
- **Register** → `POST /api/auth/local/register`
- **Fetch User Info** → `GET /api/users/me`

### **Chat APIs**
- **Get Messages** → `GET /api/messages`
- **Send Message** → `POST /api/messages`

---

## 🚀 Deployment Guide
- Backend is deployed on **Render**: [Backend Link](https://real-time-chat-backend-jsqv.onrender.com)
- Set proper environment variables before deployment
- Ensure the backend is running first before testing the frontend

---

## 🛠️ Troubleshooting

### ❌ **Strapi Fails to Start**
✅ Run:
```sh
rm -rf .cache build
npm run develop
```

### ❌ **Getting 401 Unauthorized in API Calls**
✅ Ensure the **JWT token** is correctly set in **Postman** or **frontend**.

### ❌ **Database Connection Issues**
✅ If using **PostgreSQL**, update `.env`:
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=your-db-name
DATABASE_USERNAME=your-db-user
DATABASE_PASSWORD=your-db-password
```

---

## 🖼️ Screenshots (after implementing both frontend and backend)
![image](https://github.com/user-attachments/assets/fa60ec22-14c1-4cef-96e5-f55c76f06301)
![image](https://github.com/user-attachments/assets/88f14c13-2c1b-48e4-9d58-cb57120378ff)
![image](https://github.com/user-attachments/assets/835971aa-47eb-4f52-9ec4-49d61ef4c6bf)
![image](https://github.com/user-attachments/assets/080800ae-f866-4cc9-b4f4-0a4e18058f13)
![image](https://github.com/user-attachments/assets/3feb07ba-8746-4b64-b7db-3d1c2a545fb5)
![image](https://github.com/user-attachments/assets/edcae2c0-cbda-44e5-bca3-f2cdf6a612e2)

---

## 🛠️ Contributing
1️⃣ **Fork** the repository
2️⃣ **Create a new branch**
```sh
git checkout -b feature-branch
```
3️⃣ **Commit changes**
```sh
git commit -m "Added a new feature"
```
4️⃣ **Push to branch**
```sh
git push origin feature-branch
```
5️⃣ **Submit a Pull Request**

---

## 📬 Contact
- **Author**: Anushka Srivastava
- **Email**: anushka.srivastava7750@gmail.com

🚀 Enjoy chatting in real-time! 🎉

