# Assignment Management App

**Internship:** Arnita Infotech  
**Task:** Web Development Task-1  

---

## **Project Overview**

This is a simple Assignment Management App where:

1. **Teacher** can:
   - Add assignments
   - View all assignments

2. **Student** can:
   - View assignments
   - Submit responses (text)

The app is designed as an **apps list style** project for the internship.

---

## **Project Structure**

```

ArnitaInfotech_Web_Dev_task1/
├── frontend/
│   └── App.js             # React frontend code
├── backend/
│   └── server.js          # Node.js backend code
├── database/
│   └── schema.txt         # Database schema plan
├── README.md

````

---

## **Tech Stack**

- **Frontend:** React.js  
- **Backend:** Node.js (Express)  
- **Database:** MongoDB / PostgreSQL (planned)

---

## **How to Run the Project**

### **Frontend (React)**
1. Open terminal in `frontend` folder:

```bash
cd frontend
npm install
npm start
````

2. Browser will open at:

```
http://localhost:3000/
```

* You will see the **Assignment Management App**.
* Add assignments using the input box and button.

---

### **Backend (Node.js)**

1. Open terminal in `backend` folder:

```bash
cd backend
npm install
node server.js
```

2. Backend runs at:

```
http://localhost:3000/
```

* Shows: `"Assignment App Backend Running"`

---

## **Database Plan (`schema.txt`)**

```
User:
- name
- email
- role (teacher/student)

Assignment:
- title
- description
```

> Database is planned for future integration.

---

## **GitHub Repo**

* Repository Name: `ArnitaInfotech_Web_Dev_task1`
* URL: `https://github.com/ARAVINDKUMARGS/ArnitaInfotech_Web_Dev_task1`

---

## **Status**

* [x] Apps list created
* [x] React frontend ready
* [x] Node.js backend ready
* [x] Database schema planned
* [x] GitHub repository uploaded

---

**Prepared by:** Aravind Kumar GS
**Internship:** Arnita Infotech, December 2025 Batch
