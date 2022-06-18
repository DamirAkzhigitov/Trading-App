import { read, utils } from "xlsx";
import { readFileSync } from "fs";

const readExcel = () => {
    const buf = readFileSync("src/utils/si-9.22.txt");
    const workbook = read(buf, { cellDates: true });
    const sheet = workbook.Sheets.Sheet1;
    return utils.sheet_to_json(sheet, { raw: false })
}

export { readExcel }
// emulateResponse(ticks)