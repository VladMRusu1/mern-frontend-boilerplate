import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="menu">
      <ol>
        <li className="menu-item"><Link to="/">Home</Link></li>
        <li className="menu-item"><Link to="/products">Products</Link></li>
        <li className="menu-item"><Link to="/daily_offers">Daily Offers</Link></li>
        <li className="menu-item">
          <Link to="/support">Customer Support</Link>
          <ol className="sub-menu">
            <li className="menu-item"><Link to="/support/faq">FAQ</Link></li>
            <li className="menu-item"><Link to="/support/contact">Contact Us</Link></li>
            <li className="menu-item"><Link to="/support/tickets">Submit a Ticket</Link></li>
            <li className="menu-item"><Link to="/support/chat">Live Chat</Link></li>
            <li className="menu-item"><Link to="/support/resources">Resources</Link></li>
          </ol>
        </li>
        <li className="menu-item">
          <Link to="/account">My Account</Link>
          <ol className="sub-menu">
          <li className="menu-item"><Link to="account/register">Register</Link></li>
            <li className="menu-item"><Link to="/account/profile">Profile</Link></li>
            <li className="menu-item"><Link to="/account/orders">Orders</Link></li>
            <li className="menu-item"><Link to="/account/settings">Settings</Link></li>
            <li className="menu-item"><Link to="/account/billing">Billing</Link></li>
            <li className="menu-item"><Link to="/account/help">Help</Link></li>
          </ol>
        </li>
        <li className="menu-item"><Link to="/usershop" className="nav-logo">My Shop</Link></li>
      </ol>
    </nav>
  );
}

export default Navbar;
