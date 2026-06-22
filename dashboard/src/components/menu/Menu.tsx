import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div className="Menu">
            <div className="item">
                <span className="title">MAIN</span>
                <Link to="/">
                    <img src="./home.svg" alt="" />
                    <span className="listItemTiltle">Home</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu;