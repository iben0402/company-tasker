import './App.css';
import {Sidebar} from "./Sidebar";

function App() {
    const user = JSON.parse(localStorage.getItem("user"));
    const userName = user.name;
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            {/* Główna część strony */}
            <div className="content">
                <h1>Hello {userName}</h1>
                <p>This is the content area. Put your main content here.</p>
            </div>
        </div>
    );
}

export default App;
