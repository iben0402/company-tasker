import './App.css';
import {Sidebar} from "./Sidebar";

function Teams() {
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            {/* Główna część strony */}
            <div className="content">
                <h1>TEAMS PAGE</h1>
                <p>This is the content area. Put your main content here.</p>
            </div>
        </div>
    );
}

export default Teams;