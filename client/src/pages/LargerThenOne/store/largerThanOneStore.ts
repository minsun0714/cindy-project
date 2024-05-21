import { create } from "zustand"

type State = {
	rows: (string | number)[][]
}

type Action = {
	updateRows: (rows: State["rows"]) => void
}

const useLargerThanOneStore = create<State & Action>((set) => ({
	rows: [],
	updateRows: (rows) => set(() => ({ rows })),
}))

export default useLargerThanOneStore
