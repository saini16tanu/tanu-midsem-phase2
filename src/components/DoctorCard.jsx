import { Link } from "react-router";

function DoctorCard({ doctor, onBook, onCancel }) {
  let actionPart;

  if (doctor.isBooked) {
    actionPart = <button onClick={() => onCancel(doctor.id)}>Cancel</button>;
  } else if (!doctor.isAvailableToday) {
    actionPart = <p className="info">Not Available Today</p>;
  } else if (doctor.availableSlots === 0) {
    actionPart = <p className="info">No Slots Left</p>;
  } else {
    actionPart = <button onClick={() => onBook(doctor.id)}>Book Appointment</button>;
  }

  return (
    <div className="card">
      <h3>{doctor.name}</h3>

      {doctor.isAvailableToday && doctor.availableSlots > 0 ? (
        <span className="badge green">Available Today</span>
      ) : (
        <span className="badge red">Not Available</span>
      )}

      {doctor.experience >= 10 && <span className="badge blue">Senior Doctor</span>}

      <p>Specialization: {doctor.specialization}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Fee: ₹{doctor.fee}</p>
      <p>Rating: ⭐ {doctor.rating}</p>

      {actionPart}

      <Link to={`/doctors/${doctor.id}`}>View Details</Link>
    </div>
  );
}

export default DoctorCard;