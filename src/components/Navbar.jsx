import { Link } from "react-router";



''
function Navbar({ bookedCount }) {
  return (
    <nav className="navbar">
      <h2>Doctor Appointment</h2>
      <div>
        <Link to="/">Home</Link>{" | "}
        <Link to="/doctors">Doctors</Link>{" | "}
        <Link to="/appointments">Appointments ({bookedCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;