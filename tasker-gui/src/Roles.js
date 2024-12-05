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
                    <MenuButton url={"/roles"} title={"Your roles"} icon={<UserPlusIcon/>}/>
                    <MenuButton url={"/roles"} title={"All roles"} icon={<UserPlusIcon/>}/>
                    <MenuButton url={"/roles"} title={"New role"} icon={<PlusCircleIcon/>}/>
                </div>
            </div>
        </div>
    );
}

export default Roles;