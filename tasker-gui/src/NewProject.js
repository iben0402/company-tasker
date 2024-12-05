import './App.css';
import './NewProject.css';
import { Sidebar } from './Sidebar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NewProject() {
    const [teams, setTeams] = useState([]);
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const navigate = useNavigate();

    // Fetch teams
    useEffect(() => {
        fetch('http://localhost:8080/api/teams')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch teams');
            })
            .then((data) => setTeams(data))
            .catch((error) => console.error('Error fetching teams:', error));
    }, []);

    // Handle form field changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle team checkbox changes
    const handleTeamCheckboxChange = (event) => {
        const teamId = parseInt(event.target.value);
        if (event.target.checked) {
            setSelectedTeams([...selectedTeams, teamId]);
        } else {
            setSelectedTeams(selectedTeams.filter((id) => id !== teamId));
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name: formData.name,
            description: formData.description,
            teams: selectedTeams,
        };

        fetch('http://localhost:8080/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Project created successfully');
                    // Clear form after successful submission
                    setFormData({ name: '', description: '' });
                    setSelectedTeams([]);
                    alert('Successfully created project');
                    navigate('/projects/all');
                } else {
                    throw new Error('Failed to create project');
                }
            })
            .catch((error) => console.error('Error creating project:', error));
    };

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>Create New Project</h1>
                <form onSubmit={handleSubmit}>
                    <div className={"form-element text"}>
                        <label>
                            Project Name:
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
                    <div className={"form-element checkboxes"}>
                        <h3>Assign Teams:</h3>
                        {teams.map((team) => (
                            <div key={team.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={team.id}
                                        checked={selectedTeams.includes(team.id)}
                                        onChange={handleTeamCheckboxChange}
                                    />
                                    {team.name}
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

export default NewProject;
