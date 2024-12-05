import './ProjectDetails.css';
import './App.css';
import { Sidebar } from "./Sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // Import useParams hook

function ProjectDetails() {
    const [project, setProject] = useState(null);  // State to store project data
    const { id } = useParams(); // Get the id from the URL using useParams

    // Fetch project data when the component mounts
    useEffect(() => {
        // Fetch the project from backend using the projectId
        fetch(`http://localhost:8080/api/projects/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch project");
            })
            .then((data) => setProject(data))
            .catch((error) => console.error("Error fetching project:", error));
    }, [id]);  // Dependency array ensures the fetch is done when the id changes

    // Render a loading message until the project data is available
    if (!project) {
        return (
            <div className="main-container">
                <Sidebar />
                <div className="project-details">
                    <p>Loading project details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>
            <div className="project-details">
                <h2>{project.name}</h2>
                <p className="description">{project.description}</p>
                <p className="teams">
                    <strong>Teams:</strong> {project.teams.join(", ")}
                </p>
                <div className="project-tasks">
                    TASKS FROM PROJECT HERE LOADED IN THE FUTURE
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
