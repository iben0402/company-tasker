import './App.css';
import './NewProject.css';
import { Sidebar } from './Sidebar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewRole() {
    const [users, setUsers] = useState([]); // Lista użytkowników
    const [selectedUsers, setSelectedUsers] = useState([]); // Wybrani użytkownicy
    const [formData, setFormData] = useState({
        name: '', // Nazwa roli
    });

    const navigate = useNavigate();

    // Pobranie użytkowników
    useEffect(() => {
        fetch('http://localhost:8080/api/users') // Endpoint do pobrania listy użytkowników
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch users');
            })
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    // Obsługa zmian w polach formularza
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Obsługa zmian w checkboxach użytkowników
    const handleUserCheckboxChange = (event) => {
        const userId = parseInt(event.target.value);
        if (event.target.checked) {
            setSelectedUsers([...selectedUsers, userId]);
        } else {
            setSelectedUsers(selectedUsers.filter((id) => id !== userId));
        }
    };

    // Obsługa przesyłania formularza
    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name: formData.name,
            userIds: selectedUsers,
        };

        fetch('http://localhost:8080/api/roles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Role created successfully');
                    // Wyczyść formularz po pomyślnym utworzeniu roli
                    setFormData({ name: '' });
                    setSelectedUsers([]);
                    alert('Successfully created role');
                    navigate('/roles'); // Przekierowanie na listę ról
                } else {
                    throw new Error('Failed to create role');
                }
            })
            .catch((error) => console.error('Error creating role:', error));
    };

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>Create New Role</h1>
                <form onSubmit={handleSubmit}>
                    <div className={"form-element text"}>
                        <label>
                            Role Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className={"form-element checkboxes"}>
                        <h3>Assign Users:</h3>
                        {users.map((user) => (
                            <div key={user.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={user.id}
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={handleUserCheckboxChange}
                                    />
                                    {user.username} ({user.name} {user.surname})
                                </label>
                            </div>
                        ))}
                    </div>
                    <button type="submit">Create Role</button>
                </form>
            </div>
        </div>
    );
}

export default NewRole;
