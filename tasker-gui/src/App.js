import './App.css';
import {Sidebar} from "./Sidebar";
import MenuButton from "./MenuButton";

import {
    RectangleStackIcon,
    PresentationChartBarIcon,
    UsersIcon,
    UserPlusIcon,
    UserIcon,
} from "@heroicons/react/24/solid";

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
                <div className={"menu"}>
                    <MenuButton url={"/tasks"} title={"Tasks"} icon={<RectangleStackIcon />} />
                    <MenuButton url={"/projects"} title={"Projects"} icon={<PresentationChartBarIcon />} />
                    <MenuButton url={"/teams"} title={"Teams"} icon={<UsersIcon />} />
                    <MenuButton url={"/roles"} title={"Roles"} icon={<UserPlusIcon />} />
                    <MenuButton url={"/employees"} title={"Employees"} icon={<UserIcon />} />
                </div>
            </div>
        </div>
    );
}

export default App;
