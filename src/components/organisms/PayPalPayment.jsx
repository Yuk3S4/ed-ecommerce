import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PAYPAL_ID } from "../../constants/env"
import { CartContext } from "../../context/CartContext"

const PayPalPayment = ({ value, order}) => {
    const nav = useNavigate()
    const { dispatch } = useContext(CartContext)

    return (
        <PayPalScriptProvider options={{ 
            "client-id": PAYPAL_ID,
        }}>
            <PayPalButtons 
                createOrder={(_, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value,
                                },
                                custom_id: order.id
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((resp) => {
                        if (resp.status === "COMPLETED") {
                            dispatch({ type: "CLEAR_CART"})
                            nav("/pago-exitoso")    
                        } else {
                            alert("Tu pago no se procesó, intenta nuevamente")
                        }
                    })
                }} 
            />
        </PayPalScriptProvider>
    )
}

export default PayPalPayment