import './App.css';
import {Sidebar} from "./Sidebar";
import MenuButton from "./MenuButton";
import {PlusCircleIcon, PresentationChartBarIcon} from "@heroicons/react/24/solid";

function Projects() {
    return (
        <div className="main-container">
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <h1 className={"title"}>PROJECTS</h1>
                <div className={"menu"}>
                    <MenuButton url={"/projects/my"} title={"Your projects"} icon={<PresentationChartBarIcon/>}/>
                    <MenuButton url={"/projects/all"} title={"All projects"} icon={<PresentationChartBarIcon/>}/>
                    <MenuButton url={"/projects/new"} title={"New project"} icon={<PlusCircleIcon/>}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;