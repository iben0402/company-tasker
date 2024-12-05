import './App.css';
import {Sidebar} from "./Sidebar";
import {useEffect, useState} from "react";
import ProjectsDisplay from "./ProjectsDisplay";

// TODO: add filters
// TODO: add "create" button
function AllProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/projects") // Replace with your actual backend URL
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch projects");
            })
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>PROJECTS</h1>
                <div className={"filters"}>FILTERS</div>
                <ProjectsDisplay projects={projects} />
            </div>
        </div>
    );
}

export default AllProjects;