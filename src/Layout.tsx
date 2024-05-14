import { Outlet } from "react-router-dom"

function Layout() {
	return (
		<div>
			<header>
				<ul>
					<li></li>
				</ul>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
