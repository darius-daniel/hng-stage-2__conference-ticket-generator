import {useState} from "react";
import siteLogo from "../assets/images/logo.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import topRightArrow from "../assets/images/top-right-arrow.svg";

export default function Header() {
  const [arrow, setArrow] = useState(rightArrow);

  return <header className="header">
    <a href="/" className="header__logo">
      <img src={siteLogo} alt="Logo for the website" className="header__logo-img"/>
    </a>
    <nav className="header__nav">
      <ul className="header__nav-links">
        <li className="header__nav-link header__nav-link--active">Events</li>
        <li className="header__nav-link">My Tickets</li>
        <li className="header__nav-link">About Project</li>
      </ul>
    </nav>
    <a href="/my-tickets"
       className="header__link link link-primary"
       onMouseEnter={() => setArrow(topRightArrow)}
       onMouseLeave={() => setArrow(rightArrow)}
    >
      My Tickets <img src={arrow} alt="Right-pointing arrow"/>
    </a>
  </header>;
}
