import './App.css';
import {Sidebar} from "./Sidebar";
import MenuButton from "./MenuButton";
import {PlusCircleIcon, UserPlusIcon,} from "@heroicons/react/24/solid";

function Roles() {
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>ROLES</h1>
                <div className={"menu"}>
                    <MenuButton url={"/roles/my"} title={"Your roles"} icon={<UserPlusIcon/>}/>
                    <MenuButton url={"/roles/all"} title={"All roles"} icon={<UserPlusIcon/>}/>
                    <MenuButton url={"/roles/new"} title={"New role"} icon={<PlusCircleIcon/>}/>
                </div>
            </div>
        </div>
    );
}

export default Roles;