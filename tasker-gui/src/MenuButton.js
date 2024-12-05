import './MenuButton.css';

function MenuButton(props) {
    return (
        <div className="menu-button">
            <a href={props.url}>
                {props.icon}
                <p>{props.title}</p>
            </a>
        </div>
    );
}

export default MenuButton;