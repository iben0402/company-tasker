import './TeamDetails.css';
import { Sidebar } from "./Sidebar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TeamDetails() {
    const [team, setTeam] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/teams/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch team");
            })
            .then((data) => setTeam(data))
            .catch((error) => console.error("Error fetching team:", error));
    }, [id]);  // Dependency array ensures the fetch is done when the id changes

    // Render a loading message until the project data is available
    if (!team) {
        return (
            <div className="main-container">
                <Sidebar />
                <div className="team-details">
                    <p>Loading team details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>
            <div className="team-details">
                <h2>{team.name}</h2>
                <p className="description">{team.description}</p>
                <p className="owner">
                    <strong>Owner:</strong> {team.ownerUsername}
                </p>
                <div className={"team-users"}>
                    <ul>
                        {team.users.map((user) => (
                            <li key={user.id}>{user.name} {user.surname}</li>
                        ))}
                    </ul>
                </div>
                <div className="teams-projects">
                    PROJECTS FROM TEAM HERE LOADED IN THE FUTURE
                </div>
            </div>
        </div>
    );
}

export default TeamDetails;
