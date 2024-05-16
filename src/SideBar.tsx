import useSideBarStore from "./store/SideBarStore"

const SideBar = () => {
	const { isOpen } = useSideBarStore()
	const isHidden = isOpen ? "w-1/5" : "hidden"
	return (
		<aside
			className={`${isHidden} min-h-screen border bg-gray-light border-gray-light`}
		>
			<ul>
				<li>1보다 큰지 확인</li>
			</ul>
		</aside>
	)
}

export default SideBar
