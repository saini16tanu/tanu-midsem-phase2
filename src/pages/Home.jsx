function Home({ doctors }) {
  const totalDoctors = doctors.length;

  const availableToday = doctors.filter(
    (doctor) => doctor.isAvailableToday
  ).length;

  const bookedAppointments = doctors.filter(
    (doctor) => doctor.isBooked
  ).length;

  return (
    <div className="page">
      <h1>Doctor Appointment System</h1>
      <p>Find a doctor and book your appointment easily.</p>

      <div className="summary">
        <div className="box">
          <h3>{totalDoctors}</h3>
          <p>Total Doctors</p>
        </div>
        <div className="box">
          <h3>{availableToday}</h3>
          <p>Available Today</p>
        </div>
        <div className="box">
          <h3>{bookedAppointments}</h3>
          <p>Booked Appointments</p>
        </div>
      </div>
    </div>
  );
}

export default Home;