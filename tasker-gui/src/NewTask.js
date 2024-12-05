import './App.css';
import './NewProject.css';
import { Sidebar } from './Sidebar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewTask() {
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        projectId: '',
        assigneeId: '',
        deadline: '',
    });

    const navigate = useNavigate();

    // Fetch projects
    useEffect(() => {
        fetch('http://localhost:8080/api/projects')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch projects');
            })
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    // Fetch users
    useEffect(() => {
        fetch('http://localhost:8080/api/users')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch users');
            })
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    // Handle form field changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const today = new Date().toISOString().split('T')[0]; // Format today's date as YYYY-MM-DD

        const payload = {
            name: formData.name,
            description: formData.description,
            projectId: formData.projectId,
            deadline: formData.deadline,
            createDate: today,
            finishDate: null,
            assigneeId: formData.assigneeId,
        };

        fetch('http://localhost:8080/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Task created successfully');
                    alert('Successfully created task');
                    navigate('/tasks/all');
                } else {
                    throw new Error('Failed to create task');
                }
            })
            .catch((error) => console.error('Error creating task:', error));
    };

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className="title">Create New Task</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-element text">
                        <label>
                            Task Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-element text">
                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-element select">
                        <label>
                            Select Project:
                            <select
                                name="projectId"
                                value={formData.projectId}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">-- Select Project --</option>
                                {projects.map((project) => (
                                    <option key={project.id} value={project.id}>
                                        {project.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="form-element select">
                        <label>
                            Assign to User:
                            <select
                                name="assigneeId"
                                value={formData.assigneeId}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">-- Select User --</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name} {user.surname}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="form-element text">
                        <label>
                            Deadline:
                            <input
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

export default NewTask;
