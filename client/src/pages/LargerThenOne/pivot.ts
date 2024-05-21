const pivot = (rows: (number | string)[][]) => {
	const pivotDict: { [key: string]: number } = {}

	for (let i = 1; i < rows.length; i++) {
		const productCode = rows[i][7]
		const poQuantity = Number(rows[i][10])

		if (productCode in pivotDict) {
			pivotDict[productCode] += poQuantity
		} else {
			pivotDict[productCode] = poQuantity
		}
	}
	const formerColumns = rows[0].slice(0, 11)
	const latterColumns = rows[0].slice(11)
	const newColumns = [
		...formerColumns,
		"consuming month",
		"total consuming month",
		...latterColumns,
	]
	const newRows: (number | string)[][] = [newColumns]
	for (let i = 1; i < rows.length; i++) {
		const productCode = rows[i][7]
		const poQuantity = pivotDict[productCode]
		const MOQ = Number(rows[i][13])
		const quarterlyAvgUsage = Number(rows[i][14])
		const stockAvaillable = Number(rows[i][15])
		const orderedPO = Number(rows[i][17])
		if (pivotDict[productCode]) {
			rows[i][10] = Math.ceil(poQuantity / MOQ) * MOQ
			const upperPO = Number(rows[i][10])
			const former = rows[i].slice(0, 11)
			const latter = rows[i].slice(11, 32)
			const consumingMonth = upperPO / quarterlyAvgUsage
			const totalConsumingMonth =
				(upperPO + stockAvaillable + orderedPO) / quarterlyAvgUsage
			newRows.push([
				...former,
				consumingMonth,
				totalConsumingMonth,
				...latter,
			])
			pivotDict[productCode] = 0
		}
	}
	return newRows
}
export default pivot
