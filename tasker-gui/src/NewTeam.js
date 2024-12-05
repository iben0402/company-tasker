import './App.css';
import './NewProject.css';
import { Sidebar } from './Sidebar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewTeam() {
    const [users, setUsers] = useState([]); // For owner and team members
    const [selectedUsers, setSelectedUsers] = useState([]); // Selected team members
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ownerId: '', // Selected owner ID
    });

    const navigate = useNavigate();

    // Fetch users for the owner and team members dropdowns
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

    // Handle user checkbox changes for team members
    const handleUserCheckboxChange = (event) => {
        const userId = parseInt(event.target.value);
        if (event.target.checked) {
            setSelectedUsers([...selectedUsers, userId]);
        } else {
            setSelectedUsers(selectedUsers.filter((id) => id !== userId));
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name: formData.name,
            description: formData.description,
            ownerId: parseInt(formData.ownerId),
            users: selectedUsers,
        };

        fetch('http://localhost:8080/api/teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Team created successfully');
                    // Clear form after successful submission
                    setFormData({ name: '', description: '', ownerId: '' });
                    setSelectedUsers([]);
                    alert('Successfully created team');
                    navigate('/teams/all');
                } else {
                    throw new Error('Failed to create team');
                }
            })
            .catch((error) => console.error('Error creating team:', error));
    };

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>Create New Team</h1>
                <form onSubmit={handleSubmit}>
                    <div className={"form-element text"}>
                        <label>
                            Team Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className={"form-element text"}>
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
                    <div className={"form-element select"}>
                        <label>
                            Team Owner:
                            <select
                                name="ownerId"
                                value={formData.ownerId}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Owner</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.username}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className={"form-element checkboxes"}>
                        <h3>Assign Team Members:</h3>
                        {users.map((user) => (
                            <div key={user.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={user.id}
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={handleUserCheckboxChange}
                                    />
                                    {user.username}
                                </label>
                            </div>
                        ))}
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

export default NewTeam;
