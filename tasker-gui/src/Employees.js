import './App.css';
import {Sidebar} from "./Sidebar";
import MenuButton from "./MenuButton";
import {PlusCircleIcon, UserIcon} from "@heroicons/react/24/solid";

function Employees() {
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            {/* Główna część strony */}
            <div className="content">
                <h1 className={"title"}>EMPLOYEES</h1>
                <div className={"menu"}>
                    <MenuButton url={"/employees"} title={"All employees"} icon={<UserIcon/>}/>
                    <MenuButton url={"/employees"} title={"New employee"} icon={<PlusCircleIcon/>}/>
                </div>
            </div>
        </div>
    );
}

export default Employees;