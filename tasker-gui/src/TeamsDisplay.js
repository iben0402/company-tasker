import './TeamsDisplay.css';

// TODO: add edit and delete buttons
function TeamsDisplay(props) {
    var teams = props.teams;

    return (
        <div className={"teams-display"}>
            {
                teams.length === 0 ? (
                    <p>Loading teams...</p>
                ) : (
                    <ul className="teams-list">
                        {teams.map((team) => (
                            <a href={team.id} key={team.id}>
                                <li className={"team-card"} key={team.id}>
                                    <h2>{team.name}</h2>
                                    <p className={"description"}>{team.description}</p>
                                    <p className={"owner"}><strong>Owner: </strong> {team.ownerUsername}</p>
                                </li>
                            </a>
                        ))}
                    </ul>
                )}
        </div>
    );
}

export default TeamsDisplay;