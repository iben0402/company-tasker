import './App.css';
import {Sidebar} from "./Sidebar";
import {useEffect, useState} from "react";
import TasksDisplay from "./TasksDisplay";

// TODO: add filters
// TODO: add "create" button
function AllProjects() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/tasks")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch tasks");
            })
            .then((data) => setTasks(data))
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>TASKS</h1>
                <div className={"filters"}>FILTERS</div>
                <TasksDisplay tasks={tasks} />
            </div>
        </div>
    );
}

export default AllProjects;