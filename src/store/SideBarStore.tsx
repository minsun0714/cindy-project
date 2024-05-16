import { create } from "zustand"

type SideBarStore = {
	isOpen: boolean
	setIsOpen: () => void
}

const useSideBarStore = create<SideBarStore>()((set, get) => ({
	isOpen: false,
	setIsOpen: () => set(() => ({ isOpen: !get().isOpen })),
}))

export default useSideBarStore
