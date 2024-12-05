import './RoleDetails.css';
import { Sidebar } from "./Sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RoleDetails() {
    const [role, setRole] = useState(null);
    const { id } = useParams();

    // Fetch project data when the component mounts
    useEffect(() => {
        // Fetch the project from backend using the projectId
        fetch(`http://localhost:8080/api/roles/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch role");
            })
            .then((data) => setRole(data))
            .catch((error) => console.error("Error fetching role:", error));
    }, [id]);  // Dependency array ensures the fetch is done when the id changes

    // Render a loading message until the project data is available
    if (!role) {
        return (
            <div className="main-container">
                <Sidebar />
                <div className="role-details">
                    <p>Loading role details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>
            <div className="role-details">
                <h2>{role.name}</h2>
                <h3>Users:</h3>
                <p className="users">
                    {role.users.map(
                        user => (<li key={user.id}>{user.name} {user.surname}</li>)
                    )}
                </p>
            </div>
        </div>
    );
}

export default RoleDetails;
