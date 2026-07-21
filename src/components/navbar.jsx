import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex gap-6">

      <Link to="/">Home</Link>

      <Link to="/weather">Weather</Link>

      <Link to="/advisory">Advisory</Link>

      <Link to="/calendar">Crop Calendar</Link>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>

    </nav>
  );
}

export default Navbar;