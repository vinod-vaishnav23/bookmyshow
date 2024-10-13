import { Outlet } from "react-router-dom"

const Layout = () => {
    return <div className="site-layout">
        <div>Header</div>
        <Outlet />
        <div>Footer</div>
    </div>
}

export default Layout;