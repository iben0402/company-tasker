import './App.css';
import {Sidebar} from "./Sidebar";
import {PlusCircleIcon, UsersIcon} from "@heroicons/react/24/solid";
import MenuButton from "./MenuButton";

function Teams() {
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>TEAMS</h1>
                <div className={"menu"}>
                    <MenuButton url={"/teams/my"} title={"Your teams"} icon={<UsersIcon/>}/>
                    <MenuButton url={"/teams/all"} title={"All teams"} icon={<UsersIcon/>}/>
                    <MenuButton url={"/teams/new"} title={"New team"} icon={<PlusCircleIcon/>}/>
                </div>
            </div>
        </div>
    );
}

export default Teams;