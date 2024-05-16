type InputType = {
	label: string
}

const Input = ({ label }: InputType) => {
	return (
		<div className="flex flex-col items-start justify-start text-gray">
			<label>{label}</label>
			<input className="h-12 p-2 border-4 rounded-l w-60 border-mint focus:outline-none" />
		</div>
	)
}

export default Input
