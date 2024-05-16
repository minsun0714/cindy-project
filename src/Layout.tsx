import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"

function Layout() {
	return (
		<div>
			<Header />
			<SideBar />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
