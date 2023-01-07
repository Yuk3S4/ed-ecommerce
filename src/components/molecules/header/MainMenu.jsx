import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <nav className="w-full">
            <ul className="flex justify-end text-gray-100">
                <li className="flex items-center">
                    <Link to="/" className="menu-item">
                        Inicio
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link to="/productos" className="menu-item">
                        Productos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu