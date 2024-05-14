import HamburgerImg from "./assets/hamburger.svg"

const Header = () => {
	return (
		<header className="flex items-center justify-start h-16 border border-mint bg-mint">
			<img src={HamburgerImg} className="h-8 ml-2" />
		</header>
	)
}

export default Header
