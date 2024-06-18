import React, {useState} from 'react';
import UserButton from "../../commonComponents/userButton/UserButton";
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="user-buttons-row">
                <UserButton label="Employee"/>
                <UserButton label="Payroll"/>
                <UserButton label="Events"/>
                <UserButton label="Accounts"/>
                <UserButton label="Task Progress"/>
            </div>
            <div className="dashboard-content">
                <div className="bar-chart-container">
                    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '10px' }}>EMPLOYEE STRUCTURE</div>
                </div>
                <div className="doughnut-chart-container">
                    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '10px' }}>Growth</div>

                </div>
                <div className="pie-chart-container">
                    <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginBottom: '10px' }}>Distribution</div>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;
