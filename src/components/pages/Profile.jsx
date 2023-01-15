import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import { token } from "../../helpers/auth"
import useFetch from "../../hooks/useFetch"
import Loader from "../atoms/Loader"

const Profile = () => {

    const { userData } = useContext(UserContext)
    const { data, loading, error } = useFetch("private/invoices", {
        headers: {
            Authorization: `Bearer ${ token() }`
        },
    })

    if (loading) return <Loader />
    if (error) return <p>Error en la petición</p>

    console.log(data);

    return (
        <div className="py-16 max-w-256 m-auto">
            <h1 className="text-3xl">Perfil de {userData?.details?.fullname}</h1>
            <div className="mt-4">
                <p>
                    <span className="font-bold">ID de usuario: </span>
                    <span>{ userData?.id }</span>
                </p>
                <p>
                    <span className="font-bold">Nombre completo: </span>
                    <span>{ userData?.details?.fullname }</span>
                </p>
                <p>
                    <span className="font-bold">Correo electrónico: </span>
                    <span>{ userData?.email }</span>
                </p>
                <p>
                    <span className="font-bold">Fecha de registro: </span>
                    <span>{ new Date(userData?.created_at * 1000).toString() }</span>
                </p>
            </div>  
            <div className="pt-10">
                <h2 className="text-2xl">Historial de compras</h2>

                <div className="max-w-256 m-auto">
                    <section className="pt-5">
                        <table className="overflow-x-scroll">
                            <thead>
                                <tr>
                                    <th>FECHA</th>
                                    <th>ID DE LA COMPRA</th>
                                    <th>EMAIL DEL USUARIO</th>
                                </tr>
                            </thead>
                            <tbody>
                                { data &&
                                    data.map(p => (
                                        <tr key={p.invoice.id}>
                                            <td>{ new Date(p.invoice.created_at * 1000).toString() }</td>
                                            <td>{ p.invoice.id }</td>
                                            <td>{ p.user.email }</td>
                                        </tr>    
                                    ))
                                }
                                {
                                    !data && (
                                        <>
                                            <tr>
                                                <td colSpan={3}>No tienes compras actualmente</td>
                                            </tr>    
                                            <Link to="/productos" className="mt-4 button bg-gradient">
                                                Ver productos
                                            </Link>
                                        </>
                                    )
                                }
                            </tbody>
                        </table>
                    </section>
                </div>

                {/* <ul>
                    {data?.map((inv) => (
                        <li key={inv.id}>{JSON.stringifyinv}</li>
                    ))}
                </ul> */}
            </div>
        </div>
    )
}

export default Profile