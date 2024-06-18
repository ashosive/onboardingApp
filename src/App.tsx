import React from 'react';
import './App.css';
import Sidebar from "./components/commonComponents/sideBar/sideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/dashboard";
import Accounts from "./components/pages/accounts/accounts";
import Payroll from "./components/pages/payroll/payroll";
import Departments from "./components/pages/department/departments";
import Employee from "./components/pages/employee/employee";
import Activities from "./components/pages/activities/activities";

function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div className="main-content">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/accounts" element={<Accounts />} />
                        <Route path="/payrolls" element={<Payroll />} />
                        <Route path="/departments" element={<Departments />} />
                        <Route path="/employee" element={<Employee />} />
                        <Route path="/activities" element={<Activities />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
