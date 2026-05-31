const express = require("express")
const app = express();

app.use(express.json())


const PORT = 3030 ;

// 🧠 Fake database
let patients = [
  {
    id: 1,
    name: "Ravi",
    disease: "Fever",
    status: "admitted",
  },
];

// 🔍 GET all patients
app.get("/patients", (req, res) => {
  res.json(patients);
});

// 🔍 GET patient by ID
app.get("/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const patient = patients.find((p) => p.id === id);

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  res.json(patient);
});

// ➕ POST add new patient
app.post("/patients", (req, res) => {
  const { name, disease } = req.body;

  if (!name || !disease) {
    return res.status(400).json({ message: "Name and disease required" });
  }

  const newPatient = {
    id: patients.length + 1,
    name,
    disease,
    status: "admitted",
  };

  patients.push(newPatient);

  res.status(201).json(newPatient);
});

// 🛠️ PATCH update only status
app.patch("/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const patient = patients.find((p) => p.id === id);

  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }

  if (req.body.status) {
    patient.status = req.body.status;
  }

  res.json(patient);
});

// 🔁 PUT replace full patient
app.put("/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = patients.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Patient not found" });
  }

  patients[index] = {
    id,
    name: req.body.name,
    disease: req.body.disease,
    status: req.body.status,
  };

  res.json(patients[index]);
});

// ❌ DELETE patient
app.delete("/patients/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const filtered = patients.filter((p) => p.id !== id);

  if (filtered.length === patients.length) {
    return res.status(404).json({ message: "Patient not found" });
  }

  patients = filtered;

  res.json({ message: "Patient deleted successfully" });
});

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
})