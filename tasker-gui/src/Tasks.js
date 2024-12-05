import './App.css';
import {Sidebar} from "./Sidebar";

function Tasks() {
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            {/* Główna część strony */}
            <div className="content">
                <h1>TASKS PAGE</h1>
                <p>This is the content area. Put your main content here.</p>
            </div>
        </div>
    );
}

export default Tasks;