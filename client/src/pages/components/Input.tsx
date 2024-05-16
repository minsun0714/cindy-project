type InputType = {
	label: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, value, onChange }: InputType) => {
	return (
		<div className="flex flex-col items-start justify-start text-gray">
			<label>{label}</label>
			<input
				className="h-12 p-2 border-4 rounded-l w-60 border-mint focus:outline-none"
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default Input
