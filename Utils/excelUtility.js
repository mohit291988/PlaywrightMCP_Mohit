const XLSX = require('xlsx');

/**
 * Reads headers and rows from an Excel file and returns them as objects.
 * @param {string} filePath - Path to the Excel file
 * @param {number} [sheetIndex=0] - Index of the sheet to read
 * @returns {{ headers: string[], rows: object[] }}
 */
function readExcel(filePath, sheetIndex = 0) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[sheetIndex];
    const worksheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    const headers = rows[0];
    const dataRows = [];
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row) {
            let rowData = {};
            for (let j = 0; j < headers.length; j++) {
                rowData[headers[j]] = row[j];
            }
            dataRows.push(rowData);
        }
    }
    return { headers, rows: dataRows };
}

module.exports = { readExcel };
