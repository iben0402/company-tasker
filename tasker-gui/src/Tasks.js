import './App.css';
import {Sidebar} from "./Sidebar";
import MenuButton from "./MenuButton";
import {
    RectangleStackIcon,
    UsersIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/solid";

function Tasks() {
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>TASKS</h1>
                <div className={"menu"}>
                    <MenuButton url={"/tasks"} title={"Your tasks"} icon={<RectangleStackIcon/>}/>
                    <MenuButton url={"/tasks"} title={"All tasks"} icon={<RectangleStackIcon/>}/>
                    <MenuButton url={"/tasks"} title={"New task"} icon={<PlusCircleIcon/>}/>
                </div>
            </div>
        </div>
    );
}

export default Tasks;