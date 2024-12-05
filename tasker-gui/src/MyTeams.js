import './App.css';
import {Sidebar} from "./Sidebar";
import {useEffect, useState} from "react";
import TeamsDisplay from "./TeamsDisplay";

// TODO: add filters
// TODO: add "create" button
function MyTeams() {
    const [teams, setTeams] = useState([]);
    const userId = JSON.parse(localStorage.getItem('user')).id;

    useEffect(() => {
        fetch("http://localhost:8080/api/teams/user/" + userId)
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
                <h1 className={"title"}>YOUR TEAMS</h1>
                <div className={"filters"}>FILTERS</div>
                <TeamsDisplay teams={teams} />
            </div>
        </div>
    );
}

export default MyTeams;