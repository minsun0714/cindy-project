const pivot = (rows: string[][], updateRows: (rows: string[][]) => void) => {
	const pivotDict: { [key: string]: number } = {}

	for (const row of rows) {
		const productCode = row[7]
		const poQuantity = Number(row[10])

		if (productCode in pivotDict) {
			pivotDict[productCode] += poQuantity
		} else {
			pivotDict[productCode] = poQuantity
		}
	}

	console.log(pivotDict)

	const newRows = [rows[0]]
	for (let i = 1; i < rows.length; i++) {
		const productCode = rows[i][7]
		const MOQ = Number(rows[i][13])
		if (pivotDict[productCode]) {
			rows[i][10] = String(pivotDict[productCode])
			// rows[i].push(String(value))
			newRows.push(rows[i])
			pivotDict[productCode] = 0
		}
	}
}
export default pivot
