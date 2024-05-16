import { create } from "zustand"

type State = {
	userId: string
	password: string
}
type Action = {
	setUserId: (userId: State["userId"]) => void
	setPassword: (password: State["password"]) => void
}

const AuthStore = create<State & Action>()((set) => ({
	userId: "",
	password: "",
	setUserId: () => (userId: State["userId"]) =>
		set(() => ({ userId: userId })),
	setPassword: () => (password: State["password"]) =>
		set(() => ({ password: password })),
}))

export default AuthStore
