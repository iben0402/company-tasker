import './ProjectsDisplay.css';

// TODO: add edit and delete buttons
function ProjectsDisplay(props) {
    var projects = props.projects;

    return (
        <div className={"projects-display"}>
            {
                projects.length === 0 ? (
                    <p>Loading projects...</p>
                ) : (
                    <ul className="projects-list">
                        {projects.map((project) => (
                            <a href={project.id} key={project.id}>
                                <li className={"project-card"} key={project.id}>
                                    <h2>{project.name}</h2>
                                    <p className={"description"}>{project.description}</p>
                                    <p className={"teams"}><strong>Teams:</strong> {project.teams.join(", ")}</p>
                                </li>
                            </a>
                        ))}
                    </ul>
                )}
        </div>
    );
}

export default ProjectsDisplay;