import {
    RectangleStackIcon,
    PresentationChartBarIcon,
    UsersIcon,
    UserPlusIcon,
    UserIcon,
} from "@heroicons/react/24/solid";

import './Sidebar.css';

export function Sidebar() {
    return (
        <div className={"sidebar"}>
            <h2 className={"sidebar-title"}>
                <a href={"/app"}>
                    TASKER
                </a>
            </h2>
            <ul className={"sidebar-list"}>
                <li>
                    <a href={"/tasks"}>
                        <RectangleStackIcon />
                        Tasks
                    </a>
                </li>
                <li>
                    <a href={"/projects"}>
                        <PresentationChartBarIcon />
                        Projects
                    </a>
                </li>
                <li>
                    <a href={"/teams"}>
                        <UsersIcon />
                        Teams
                    </a>
                </li>
                <li>
                    <a href={"/roles"}>
                        <UserPlusIcon/>
                        Roles
                    </a>
                </li>
                <li>
                    <a href={"/employees"}>
                        <UserIcon/>
                        Employees
                    </a>
                </li>
            </ul>
        </div>
    );
}