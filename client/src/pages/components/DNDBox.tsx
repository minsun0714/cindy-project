import * as XLSX from "xlsx"

const DNDBox = () => {
	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null
		if (!file) {
			console.log("No file selected.")
			return
		}
		console.log(file.name)

		const reader = new FileReader()

		reader.onload = (e: ProgressEvent<FileReader>) => {
			if (!e.target || !e.target.result) {
				console.error("Failed to read file.")
				return
			}
			if (typeof e.target.result === "string") {
				return
			}
			const data = new Uint8Array(e.target.result)
			const workbook = XLSX.read(data, { type: "array" })
			const worksheet = workbook.Sheets[workbook.SheetNames[0]]
			const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
			console.log(jsonData)
		}

		reader.readAsArrayBuffer(file)
	}

	return (
		<div className="flex items-center justify-center w-64 h-56 border-4 rounded-2xl border-mint">
			<input
				className="hidden"
				id="fileInput"
				type="file"
				accept=".xlsx, .xls, .csv"
				onChange={handleFileUpload}
			/>
			<label
				htmlFor="fileInput"
				className="w-10 h-10 text-white border rounded-full cursor-pointer border-mint bg-mint"
			>
				+
			</label>
		</div>
	)
}

export default DNDBox
