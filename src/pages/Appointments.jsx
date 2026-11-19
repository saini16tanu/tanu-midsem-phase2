import DoctorCard from "../components/DoctorCard";

function Appointments({ doctors, onBook, onCancel }) {
  const bookedDoctors = doctors.filter((doctor) => doctor.isBooked);

  let totalFee = 0;
  bookedDoctors.map((doctor) => {
    totalFee = totalFee + doctor.fee;
  });

  if (bookedDoctors.length === 0) {
    return <h2 className="page">No appointments booked</h2>;
  }

  return (
    <div className="page">
      <h1>My Appointments</h1>
      <h3>Total Consultation Fee: ₹{totalFee}</h3>

      <div className="cards">
        {bookedDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBook={onBook}
            onCancel={onCancel}
          />
        ))}
      </div>
    </div>
  );
}

export default Appointments;