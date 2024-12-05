import './App.css';
import {Sidebar} from "./Sidebar";
import {useEffect, useState} from "react";
import TeamsDisplay from "./TeamsDisplay";

// TODO: add filters
// TODO: add "create" button
function AllTeams() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/teams")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch teams");
            })
            .then((data) => setTeams(data))
            .catch((error) => console.error("Error fetching teams:", error));
    }, []);

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>TEAMS</h1>
                <div className={"filters"}>FILTERS</div>
                <TeamsDisplay teams={teams} />
            </div>
        </div>
    );
}

export default AllTeams;