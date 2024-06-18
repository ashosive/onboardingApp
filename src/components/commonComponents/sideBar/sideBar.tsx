import React from 'react';
import './Sidebar.css';
import logo from './49030964.jpg';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={logo} alt="Logo" className="logo"/>
                <h2>HR Name</h2>
            </div>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/accounts">Accounts</Link></li>
                <li><Link to="/payrolls">Payrolls</Link></li>
                <li><Link to="/departments">Departments</Link></li>
                <li><Link to="/employee">Employee</Link></li>
                <li><Link to="/activities">Activities</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
