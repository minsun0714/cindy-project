import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"

function Layout() {
	return (
		<div>
			<Header />
			<div className="flex flex-row">
				<SideBar />
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default Layout
