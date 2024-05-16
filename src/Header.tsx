import HamburgerImg from "./assets/hamburger.svg"
import useSideBarStore from "./store/SideBarStore"

const Header = () => {
	const { setIsOpen } = useSideBarStore()
	return (
		<header className="flex items-center justify-start w-screen h-16 border border-mint bg-mint">
			<img
				src={HamburgerImg}
				className="h-8 ml-2 cursor-pointer"
				onClick={() => setIsOpen()}
			/>
		</header>
	)
}

export default Header
