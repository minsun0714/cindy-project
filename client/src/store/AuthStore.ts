import { create } from "zustand"

type State = {
	userId: string
	password: string
}
type Action = {
	setUserId: (userId: State["userId"]) => void
	setPassword: (password: State["password"]) => void
}

const useAuthStore = create<State & Action>()((set) => ({
	userId: "",
	password: "",
	setUserId: (userId) => set({ userId }),
	setPassword: (password) => set({ password }),
}))

export default useAuthStore
