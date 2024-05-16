import HamburgerImg from "./assets/hamburger.svg"
import useSideBarStore from "./store/SideBarStore"

const Header = () => {
	const { setIsOpen } = useSideBarStore()
	return (
		<header className="flex items-center justify-start h-16 border border-mint bg-mint">
			<img
				src={HamburgerImg}
				className="h-8 ml-2"
				onClick={() => setIsOpen()}
			/>
		</header>
	)
}

export default Header
