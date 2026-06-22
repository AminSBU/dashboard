import { Link } from "react-router-dom";
import "./Menu.scss"

const Menu = () => {
    return(
        <div className="Menu">
            <div className="item">
                <span className="title">MAIN</span>
                <Link to="/" className="listItem">
                    <img src="./home.svg" alt="" />
                    <span className="listItemTiltle">HomePage</span>
                </Link>
                <Link to="/" className="listItem">
                    <img src="./profile.svg" alt="" />
                    <span className="listItemTiltle">Profile</span>
                </Link>

                <span className="title">LISTS</span>
                <Link to="/" className="listItem">
                    <img src="./user.svg" alt="" />
                    <span className="listItemTiltle">Users</span>
                </Link>
                <Link to="/" className="listItem">
                    <img src="./product.svg" alt="" />
                    <span className="listItemTiltle">product</span>
                </Link>
                <Link to="/" className="listItem">
                    <img src="./order.svg" alt="" />
                    <span className="listItemTiltle">orders</span>
                </Link>
                <Link to="/" className="listItem">
                    <img src="./post.svg" alt="" />
                    <span className="listItemTiltle">post</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu;