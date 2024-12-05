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
                    <MenuButton url={"/projects"} title={"Your projects"} icon={<PresentationChartBarIcon/>}/>
                    <MenuButton url={"/projects"} title={"All projects"} icon={<PresentationChartBarIcon/>}/>
                    <MenuButton url={"/projects"} title={"New project"} icon={<PlusCircleIcon/>}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;