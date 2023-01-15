import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API_URL } from "../../constants/env"
import LoginTemplate from "../templates/LoginTemplate"

const Registro = () => {

    const nav = useNavigate()
    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        setError()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            details: {
                fullname: e.target.fullName.value
            }
        }

        axios.post(`${ API_URL }/public/users`, data)
            .then( resp => {
                nav("/login")
            })
            .catch(err => {
                // console.log(err);
                setError(err)                
                console.log(err);
            })
    }
    
    return (
        <LoginTemplate title="Regístrate">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nombre Completo"
                        required
                    />
                </div>                                            
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        required
                    />
                </div>                                            

                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        required
                    />
                </div>                                            

                <div className="text-center pt-1 mb-12 pb-1">
                    <button className="bg-gradient w-full" type="submit">
                        Ingresar
                    </button>
                    <Link className="text-gray-500" to="/login">
                        ¿Ya tienes una cuenta?, Inicia sesión
                    </Link>
                </div>
                {
                    error && (
                        <p className="text-center p-2 bg-red-100 text-red-800">
                            {error?.response?.data.errors[0].message}
                        </p>  
                    )                    
                }
            </form>
        </LoginTemplate>
    )
}

export default Registro