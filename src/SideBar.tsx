import { Link } from "react-router-dom"
import useSideBarStore from "./store/SideBarStore"

const SideBar = () => {
	const { isOpen } = useSideBarStore()
	const isHidden = isOpen ? "w-1/5" : "hidden"
	return (
		<aside
			className={`${isHidden} min-h-screen border bg-gray-light border-gray-light`}
		>
			<ul>
				<li>
					<Link to="/largerThanOne">1보다 큰지 확인</Link>
				</li>
			</ul>
		</aside>
	)
}

export default SideBar
