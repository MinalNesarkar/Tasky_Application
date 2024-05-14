
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/sideNav';
import Dashboard from './Pages/Dashboard';
import  Tasks from './Pages/Tasks';
import Calendar from './Pages/Calender';
import Members from './Pages/Members';


const App = () => {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/" element={<Tasks />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/members" element={<Members />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
