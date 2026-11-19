import { useState } from "react";
import DoctorCard from "../components/DoctorCard";

function Doctors({ doctors, onBook, onCancel }) {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");

  let result = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  if (specialization !== "All") {
    result = result.filter(
      (doctor) => doctor.specialization === specialization
    );
  }

  return (
    <div className="page">
      <h1>All Doctors</h1>

      <input
        type="text"
        placeholder="Search doctor by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dermatologist">Dermatologist</option>
        <option value="Orthopedic">Orthopedic</option>
        <option value="Pediatrician">Pediatrician</option>
        <option value="Dentist">Dentist</option>
      </select>

      {result.length === 0 ? (
        <h2>No Doctors Found</h2>
      ) : (
        <div className="cards">
          {result.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={onBook}
              onCancel={onCancel}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Doctors;