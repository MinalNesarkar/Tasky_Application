
// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css' ;

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li><Link to="/" className="sidebar-link">Dashboard</Link></li>
        <li><Link to="/tasks" className="sidebar-link">Tasks</Link></li>
        <li><Link to="/calendar" className="sidebar-link">Calendar</Link></li>
        <li><Link to="/members" className="sidebar-link">Members</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
