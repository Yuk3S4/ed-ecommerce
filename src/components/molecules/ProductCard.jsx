import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { formatPrice } from "../../helpers/numbers"

const ProductCard = ({ producto }) => {
    const imgNotFound = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
    const { images, product_name, id, price, description } = producto

    const { state, dispatch } = useContext(CartContext)

    // TODO: crear hook personalizado con add y remove
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: producto
        })
    }    
    
    return (
        <article className="w-full max-w-sm bg-white rounded-lg shadow-lg p-5">
            <div className="mb-5 rounded-lg overflow-hidden">
                <Link to={`/productos/${ id }`}>
                    <img
                        className="align-middle h-40 w-full object-cover" 
                        src={ images ? images[0] : imgNotFound } 
                        alt={ product_name } />
                </Link>
            </div>
            <div className="mb-6">
                <Link to={`/productos/${ id }`}>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                        { product_name }
                    </h3>
                </Link>
                <p className="text-gray-500 line-clamp-2">{ description }</p>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">
                    { formatPrice( price ) }
                </span>
            </div>

            <div className="flex justify-center mt-3">
                {
                    (!state.cart.find(c => c.id === id)) ? (
                        <button className="bg-gradient" onClick={addToCart}>
                            AGREGAR AL CARRITO
                        </button>
                    ) : (
                        <p className="mt-4 text-lg font-semibold text-yellow-500">¡Agregado al carrito!</p>    
                    )
                }
                
            </div>
            
        </article>
    )
}

export default ProductCard