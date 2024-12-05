import './TasksDetails.css';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Sidebar} from "./Sidebar";

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
function TaskDisplay() {
    const [task, setTask] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetch the project from backend using the projectId
        fetch(`http://localhost:8080/api/tasks/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch task");
            })
            .then((data) => setTask(data))
            .catch((error) => console.error("Error fetching task:", error));
    }, [id]);  // Dependency array ensures the fetch is done when the id changes

    if (!task) {
        return (
            <div className="main-container">
                <Sidebar />
                <div className="task-details">
                    <p>Loading task details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="main-container">
            <div>
                <Sidebar/>
            </div>
            <div className="task">
                <div className="task-details">
                    <div className={"left-column"}>
                        <h2>{task.name}</h2>
                        <p className="description">{task.description}</p>
                    </div>
                    <div className="right-column">
                        <p className={"status"}>{task.status}</p>
                        <p className={"project"}><strong>Project: </strong><a
                            href={"/projects/" + task.projectId}>{task.projectName}</a></p>
                        <p className={"deadline"}><strong>Deadline: </strong>{formatDate(task.deadline)}</p>
                        <p className={"create-date"}><strong>Create date: </strong>{formatDate(task.createDate)}</p>
                        <p className={"assignee"}><strong>Assignee: </strong>{task.assigneeUsername}</p>
                    </div>
                </div>
                <p>ATTACHMENTS AND COMMENTS HERE IN THE FUTURE</p>
            </div>
        </div>
    );
}

export default TaskDisplay;