import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/Logo.png"

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">Ai Chat-Bot</Link>
        </div>
        <div className="navbar-end gap-5">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-14 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={Logo} />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
