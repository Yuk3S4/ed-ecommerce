import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { UserContext } from "../../../context/UserContext"
import { deleteToken, token } from "../../../helpers/auth"

const MainMenu = () => {
    const nav = useNavigate()
    const { userData, setUserData } =  useContext(UserContext)
    const { state } = useContext(CartContext)

    const handleSession = () => {
        deleteToken()
        nav("/")
        setUserData()
    }

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
                <li className="flex items-center">
                    <Link to="/carrito" className="menu-item">
                        Carrito ({state.cart.length})
                    </Link>
                </li>

                {
                    !token() ? (
                        <li className="flex items-center">
                            <Link to="/login" className="menu-item">
                                Iniciar sesión
                            </Link>
                        </li>
                    ) : (
                        <>
                            { (userData?.is_admin) && (
                                <li className="flex items-center">
                                    <Link className="menu-item" to="/admin/productos">
                                        Administrar productos
                                    </Link>
                                </li>       
                            )}
                            <li className="flex items-center">
                                <Link className="menu-item" to="/perfil">
                                    Mi perfil
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <a onClick={ handleSession } className="menu-item cursor-pointer">
                                    Cerrar sesión
                                </a>
                            </li>
                        </>
                    )
                }        
                
            </ul>
        </nav>
    )
}

export default MainMenu