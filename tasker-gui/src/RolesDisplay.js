import './RolesDisplay.css';

// TODO: add edit and delete buttons
function RolesDisplay(props) {
    var roles = props.roles;

    return (
        <div className={"roles-display"}>
            {
                roles.length === 0 ? (
                    <p>Loading roles...</p>
                ) : (
                    <ul className="roles-list">
                        {roles.map((role) => (
                            <li className={"role-card"} key={role.id}>
                                <a href={role.id} key={role.id}>
                                    <h2>{role.name}</h2>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
}

export default RolesDisplay;