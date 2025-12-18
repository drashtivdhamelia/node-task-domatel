# Node Task - Domatel

A robust backend application built with Node.js and Express.js, designed for CRUD operations and has a structured MVC architecture.

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens)

---

## 🚀 Project Setup

Follow these steps to get the project up and running on your local machine.

### 1. Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB installed locally or an Atlas URI

### 2. Clone the Repository
```bash
git clone https://github.com/drashtivdhamelia/node-task-domatel.git

cd node-task-domatel

```

### 3. Initialize Project

```bash
npm init -y
```

### 4. Install Dependencies

```bash
npm install
npm install express mongoose bcryptjs jsonwebtoken dotenv
npm install nodemon --save-dev
```

### 5. Environment Configuration

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

```

### 6. Run the Application

```bash
# Development mode
npm run dev

# Production mode
npm start

```

---

## 📂 Folder Structure

```text
node-task-domatel/
├── config/                     
│    └── db.js
├── controllers/              
│    ├── auth.controller.js
│    └── post.controller.js
├── middleware/                
│    └── auth.middleware.js
├── models/                  
│    ├── Post.model.js
│    └── User.model.js
├── routes/                    
│    ├── auth.routes.js
│    └── post.routes.js
├── app.js                     
├── .env                      
├── package-lock.json
├── package.json            
└── README.md                 

```

---

## 📡 API Curl Examples

Below are common API endpoints. Replace `localhost:5000` with your base URL if different.

### 1. User Registration

```bash
curl --location 'http://localhost:5000/api/auth/register' \
--header 'Content-Type: application/json' \
--data '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "Password123"
}'

```

### 2. User Login

```bash
curl --location 'http://localhost:5000/api/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "email": "test@example.com",
    "password": "Password123"
}'

```

### 3. Get Profile (Protected Route)

```bash
curl --location 'http://localhost:5000/auth/profile' \
--header 'Authorization: Bearer YOUR_TOKEN_HERE'

```
 
### 4. Create Post (Protected Route)  

```bash
curl --location 'http://localhost:5000/posts/createpost' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_TOKEN_HERE' \
--data '{
    "userId": "6942db8dce69d28dcadbddc6",
    "caption": "gdfgdfg"
}'

```

### 5. Get Post   

```bash
curl --location 'http://localhost:5000/posts/getposts?limit=0&skip=0' 

```

### 6. Post/posts/:id/like (Protected)

```bash
curl --location 'http://localhost:5000/posts/:id/like' 

```

### 7. Get API

```bash
curl --location 'http://localhost:5000/posts/user/:userId' 

```

---

## 👤 Author

* **Drashti Dhameliya** - [GitHub Profile](https://www.google.com/search?q=https://github.com/drashtivdhamelia)

---
