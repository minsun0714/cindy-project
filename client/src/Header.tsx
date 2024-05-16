import { Link } from "react-router-dom"
import HamburgerImg from "./assets/hamburger.svg"
import useSideBarStore from "./store/SideBarStore"

const Header = () => {
	const { setIsOpen } = useSideBarStore()
	return (
		<header className="flex items-center justify-between w-screen h-16 border border-mint bg-mint">
			<img
				src={HamburgerImg}
				className="h-8 ml-8 cursor-pointer"
				onClick={() => setIsOpen()}
			/>
			<ul className="mx-8 text-white cursor-pointer">
				<li>
					<Link to={"/auth"}>Login</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
