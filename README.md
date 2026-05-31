# 🏥 Patient API

A simple REST API using Node.js and Express.

---

## 1. Install Dependencies

```bash
npm install express
2. Run Server
node index.js
```
Server runs at:

http://localhost:3030

3. Features
   
Add patient
View all patients
View patient by ID
Update patient (PUT / PATCH)
Delete patient

5. API Endpoints

Get all patients
GET /patients
Get patient by ID
GET /patients/:id
Add patient
POST /patients

Body:

{
  "name": "Ravi",
  "disease": "Fever"
}


Update patient (PATCH)

PATCH /patients/:id

Body:

{
  "status": "discharged"
}
Replace patient (PUT)
PUT /patients/:id
Delete patient
DELETE /patients/:id
5. Learnings
Express setup
HTTP methods
CRUD operations
