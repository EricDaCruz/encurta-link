import "./Menu.css"
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Menu = () => {
    return ( 
        <div className="menu">
            <a className="social" href="https://www.instagram.com/e_cruzx/" target="_blank">
                <BsInstagram color="#fff" size={24}/>
            </a>
            <Link className="menu-item" to="/mylinks">
                Meus Links
            </Link>
        </div>
     );
}
 
export default Menu;