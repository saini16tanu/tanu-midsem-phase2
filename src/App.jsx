import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import doctorsData from "./data/doctors";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Appointments from "./pages/Appointments";
import "./App.css";

function App() {
  const [doctors, setDoctors] = useState(doctorsData);

  function bookAppointment(id) {
    setDoctors(
      doctors.map((doctor) => {
        if (doctor.id === id) {
          return { ...doctor, isBooked: true, availableSlots: doctor.availableSlots - 1 };
        } else {
          return doctor;
        }
      })
    );
  }

  function cancelAppointment(id) {
    setDoctors(
      doctors.map((doctor) => {
        if (doctor.id === id) {
          return { ...doctor, isBooked: false, availableSlots: doctor.availableSlots + 1 };
        } else {
          return doctor;
        }
      })
    );
  }

  const bookedCount = doctors.filter((doctor) => doctor.isBooked).length;

  return (
    <BrowserRouter>
      <Navbar bookedCount={bookedCount} />

      <Routes>
        <Route path="/" element={<Home doctors={doctors} />} />
        <Route
          path="/doctors"
          element={<Doctors doctors={doctors} onBook={bookAppointment} onCancel={cancelAppointment} />}
        />
        <Route
          path="/doctors/:id"
          element={<DoctorDetails doctors={doctors} onBook={bookAppointment} onCancel={cancelAppointment} />}
        />
        <Route
          path="/appointments"
          element={<Appointments doctors={doctors} onBook={bookAppointment} onCancel={cancelAppointment} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;