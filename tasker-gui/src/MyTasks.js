import './App.css';
import {Sidebar} from "./Sidebar";
import {useEffect, useState} from "react";
import TasksDisplay from "./TasksDisplay";

// TODO: add filters
// TODO: add "create" button
function MyTasks() {
    const [tasks, setTasks] = useState([]);
    const userId = JSON.parse(localStorage.getItem('user')).id;

    useEffect(() => {
        fetch("http://localhost:8080/api/tasks/user/" + userId)
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

export default MyTasks;