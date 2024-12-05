import './TasksDisplay.css';

function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date);
}

// TODO: add edit and delete buttons
// TODO: make display nicer
function TaskDisplay(props) {
    var tasks = props.tasks;

    return (
        <div className={"tasks-display"}>
            {
                tasks.length === 0 ? (
                    <p>Loading projects...</p>
                ) : (
                    <ul className="tasks-list">
                        {tasks.map((task) => (
                            <li className={"task-card"} key={task.id}>
                                <a href={task.id} key={task.id}>
                                    <h2>{task.name}</h2>
                                </a>
                                <p className={"project"}><strong>Project: </strong>{task.projectName}</p>
                                <p className={"deadline"}><strong>Deadline: </strong>{formatDate(task.deadline)}</p>
                                <p className={"assignee"}><strong>Assignee: </strong>{task.assigneeUsername}</p>
                                <p className={"status"}>{task.status}</p>
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
}

export default TaskDisplay;