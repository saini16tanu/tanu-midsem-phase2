import { useParams, Link } from "react-router";

function DoctorDetails({ doctors }) {
  const { id } = useParams();

  const doctor = doctors.find(
    (doctor) => doctor.id === Number(id)
  );

  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  return (
    <div className="page">
      <h1>{doctor.name}</h1>
      <p>Specialization: {doctor.specialization}</p>
      <p>Hospital: {doctor.hospital}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Fee: ₹{doctor.fee}</p>
      <p>Rating: ⭐ {doctor.rating}</p>
      <p>Available Slots: {doctor.availableSlots}</p>
      <p>Available Today: {doctor.isAvailableToday ? "Yes" : "No"}</p>
      <p>Booked: {doctor.isBooked ? "Yes" : "No"}</p>

      <Link to="/doctors">Back to Doctors</Link>
    </div>
  );
}

export default DoctorDetails;