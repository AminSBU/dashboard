import { Link } from "react-router-dom";
import "./Menu.scss"
import {menu} from "./../../../src/data"

const Menu = () => {
    return(
        <div className="Menu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <span className="title">{item.title}</span>
                    {item.listItems.map(listItem =>(
                        <Link to="/" className="listItem" key={listItem.id}>
                            <img src={listItem.icon} alt="" />
                            <span className="listItemTiltle">HomePage</span>
                        </Link>
                    ))}
                </div>
            ))}
            
                {/* <span className="title">LISTS</span>
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
                </Link> */}
            {/* </div> */}
        </div>
    )
}

export default Menu;