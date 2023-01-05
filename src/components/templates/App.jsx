import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
  return (
    <div>
        <MainHeader />
        {/* Imprimir lo que la página quiera */}
        <Outlet />
    </div>
  )
}

export default App