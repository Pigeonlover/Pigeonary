import "../App.css";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="header">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/discover"}>Discover</Link>
        <Link to={"/about"}>About Us</Link>
      </nav>
    </div>
  );
}
