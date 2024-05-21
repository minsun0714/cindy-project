import * as Excel from "exceljs/dist/exceljs.min.js"
import { saveAs } from "file-saver"
import useLargerThanOneStore from "../store/largerThanOneStore"

const DownloadButton = () => {
	const { rows } = useLargerThanOneStore()

	const handleDownload = async () => {
		const wb = new Excel.Workbook()

		const sheet = wb.addWorksheet("sheet 1")

		sheet.addRow(rows[0])

		rows.forEach((row) => {
			sheet.addRow(row)
		})

		const fileData = await wb.xlsx.writeBuffer()

		const blob = new Blob([fileData], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		})
		saveAs(blob, `Work less`)
	}

	return (
		<div className="flex items-center justify-center w-64 h-12 my-6 border rounded-xl bg-mint border-mint">
			<button onClick={handleDownload}>result</button>
		</div>
	)
}

export default DownloadButton
