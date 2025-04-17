import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="flex gap-4 text-blue-600 underline mb-4">
      <Link to="/">About</Link>
      <Link to="/education">Education</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/work">Work Experience</Link>
      <Link to="/volunteer">Volunteer</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}