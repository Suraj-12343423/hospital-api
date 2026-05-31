
# 🏥 Patients REST API (Express.js)

A simple REST API built using Node.js and Express.js to manage hospital patients.
This project demonstrates CRUD operations using an in-memory database.

## 🚀 Features

- Add new patient
- View all patients
- Get patient by ID
- Update patient (PATCH & PUT)
- Delete patient

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript

  ## 📡 API Endpoints

GET /patients → Get all patients  
GET /patients/:id → Get patient by ID  
POST /patients → Add patient  
PATCH /patients/:id → Update status  
PUT /patients/:id → Replace patient  
DELETE /patients/:id → Delete patient

## 🧠 Example Patient Object

{
  "id": 1,
  "name": "Ravi",
  "disease": "Fever",
  "status": "admitted"
}

## ⚠️ Limitations

- Data is stored in memory
- No database
- Data resets on restart

## 👨‍💻 Author

Sai Suraj
  
