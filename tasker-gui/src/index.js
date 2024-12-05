import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Tasks from './Tasks';
import Projects from './Projects';
import AllProjects from './AllProjects';
import Teams from './Teams';
import Roles from './Roles';
import Employees from './Employees';
import LoginPage from './LoginPage';
import ProjectDetails from "./ProjectDetails";
import MyProjects from "./MyProjects";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/app" element={<App />} />
                {/* MAIN PAGES */}
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/employees" element={<Employees />} />
                {/* SUB PAGES */}

                {/*PROJECTS*/}
                <Route path={"/projects/my"} element={<MyProjects />} />
                <Route path={"/projects/all"} element={<AllProjects />} />
                <Route path={"/projects/:id"} element={<ProjectDetails />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
