import DNDBox from "./components/DNDBox"

const LargerThanOne = () => {
	return (
		<div>
			<DNDBox />
			<div className="flex items-center justify-center w-64 h-12 my-6 border rounded-xl bg-mint border-mint">
				<button>result</button>
			</div>
		</div>
	)
}

export default LargerThanOne
