import { Outlet } from "react-router-dom"
import AdminMenu from "../molecules/header/AdminMenu"
import MainHeader from "../organisms/MainHeader"

const Admin = () => {
  return (
    <div>
        <MainHeader>
            <AdminMenu />
        </MainHeader>
        {/* Imprimir lo que la página quiera */}
        <div className="pt-16 max-w-256 m-auto">
          <Outlet />
        </div>
    </div>
  )
}

export default Admin