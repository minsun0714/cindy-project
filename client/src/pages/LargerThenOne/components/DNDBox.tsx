import { useEffect, useState } from "react"
import * as XLSX from "xlsx"
import pivot from "../pivot"
import useLargerThanOneStore from "../store/largerThanOneStore"

const DNDBox = () => {
	const [fileName, setFileName] = useState("")
	const { rows, updateRows } = useLargerThanOneStore()

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null
		if (!file) {
			console.log("No file selected.")
			return
		}
		setFileName(file.name)

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
			const jsonData: string[][] = XLSX.utils.sheet_to_json(worksheet, {
				header: 1,
			})
			updateRows(jsonData)
		}

		reader.readAsArrayBuffer(file)
	}

	useEffect(() => {
		pivot(rows, updateRows)
	}, [rows, updateRows])

	return (
		<div className="flex items-center justify-center w-64 h-56 border-4 rounded-2xl border-mint">
			<input
				className="hidden"
				id="fileInput"
				type="file"
				accept=".xlsx, .xls, .csv"
				onChange={handleFileUpload}
			/>
			{fileName ? (
				<div className="flex flex-row">
					<label
						htmlFor="fileInput"
						className="underline cursor-pointer"
					>
						{fileName}
					</label>
					<span className="flex items-center justify-center ml-1">
						<button
							className="flex items-center justify-center w-4 h-4 text-white rounded-full bg-gray-light"
							onClick={() => setFileName("")}
						>
							x
						</button>
					</span>
				</div>
			) : (
				<label
					htmlFor="fileInput"
					className="flex items-center justify-center w-10 h-10 text-white border rounded-full cursor-pointer border-mint bg-mint"
				>
					+
				</label>
			)}
		</div>
	)
}

export default DNDBox
