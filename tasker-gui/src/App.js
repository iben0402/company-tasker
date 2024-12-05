import './App.css';
import {Sidebar} from "./Sidebar";

function App() {
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            {/* Główna część strony */}
            <div className="content">
                <h1>Welcome to the Dashboard</h1>
                <p>This is the content area. Put your main content here.</p>
            </div>
        </div>
    );
}

export default App;
