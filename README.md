# 🩺 Doctor Appointment App

A simple React app to search doctors, check their availability and book appointments.

## 👩‍🎓 Student Details

| | |
|---|---|
| **Name** | Tanu Saini |
| **Roll Number** | 84 |
| **Problem Statement** | P4 — Doctor Appointment |
| **Course** | WEB301 — Advance Frontend Engineering |

## ✨ Features

- Home page shows total doctors, doctors available today and booked appointments
- Search doctors by name
- Filter doctors by specialization
- Book and cancel appointments
- "Available Today", "Not Available" and "Senior Doctor" badges
- Shows "Not Available Today" or "No Slots Left" instead of the Book button
- Details page for each doctor
- Appointments page with total consultation fee
- Live booked count in the Navbar

## 🛣️ Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/doctors` | All Doctors |
| `/doctors/:id` | Doctor Details |
| `/appointments` | My Appointments |

## ⚛️ React Concepts Used

- Functional Components and JSX
- Props
- useState and controlled inputs
- map(), filter() and find()
- Conditional rendering
- React Router: BrowserRouter, Routes, Route, Link
- Dynamic route and useParams()

## 🚀 How to Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.