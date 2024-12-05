import './App.css';
import {Sidebar} from "./Sidebar";
import {useEffect, useState} from "react";
import RolesDisplay from "./RolesDisplay";

// TODO: add filters
// TODO: add "create" button
function AllRoles() {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/roles")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch roles");
            })
            .then((data) => setRoles(data))
            .catch((error) => console.error("Error fetching roles:", error));
    }, []);

    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>ROLES</h1>
                <div className={"filters"}>FILTERS</div>
                <RolesDisplay roles={roles} />
            </div>
        </div>
    );
}

export default AllRoles;