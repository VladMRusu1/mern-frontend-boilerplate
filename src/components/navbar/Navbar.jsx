import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.less";
const Navbar = () => {
  return (
    <nav className="menu">
      <ol>
        <li className="menu-item"><Link to="/">Laptop, Tablete, Telefoane</Link></li>
        <li className="menu-item"><Link to="/products">PC, Periferice, Software</Link></li>
        <li className="menu-item"><Link to="/daily_offers">TV, Sisteme Audio-Video</Link></li>
        <li className="menu-item">
          <Link to="/support">Electrocasnice, Climatizare</Link>
          <ol className="sub-menu">
            <li className="menu-item"><Link to="/support/faq">FAQ</Link></li>
            <li className="menu-item"><Link to="/support/contact">Contact Us</Link></li>
            <li className="menu-item"><Link to="/support/tickets">Submit a Ticket</Link></li>
            <li className="menu-item"><Link to="/support/chat">Live Chat</Link></li>
            <li className="menu-item"><Link to="/support/resources">Resources</Link></li>
          </ol>
        </li>
        <li className="menu-item">
          <Link to="/account">Gaming, Carti, Birotica</Link>
          <ol className="sub-menu">
          <li className="menu-item"><Link to="account/register">Register</Link></li>
            <li className="menu-item"><Link to="/account/profile">Profile</Link></li>
            <li className="menu-item"><Link to="/account/orders">Orders</Link></li>
            <li className="menu-item"><Link to="/account/settings">Settings</Link></li>
            <li className="menu-item"><Link to="/account/billing">Billing</Link></li>
            <li className="menu-item"><Link to="/account/help">Help</Link></li>
          </ol>
        </li>
        <li className="menu-item"><Link to="/daily_offers">Jucarii,Articole copii & bebelusi</Link></li>
        <li className="menu-item"><Link to="/daily_offers">Haine, Incaltaminte, Accesorii</Link></li>
        <li className="menu-item"><Link to="/daily_offers">Ingrijire Personala, Cosmetice</Link></li>
        <li className="menu-item"><Link to="/daily_offers">Casa, Gradina, Bricolaj</Link></li>
        <li className="menu-item"><Link to="/daily_offers">Sport & Calatorie</Link></li>
        <li className="menu-item"><Link to="/daily_offers">Auto-Moto</Link></li>

      </ol>
    </nav>
  );
}

export default Navbar;
