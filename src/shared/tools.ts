/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";

export const getJsonFromFile = (pathAndFileName: string): any => {
	const jsonData = fs.readFileSync(pathAndFileName, "utf8");
	const objOrArray = JSON.parse(jsonData);
	return objOrArray;
};

export const extractPortNumber = (text: string) => {
	const regex = /(\d+)/;
	const match = text.match(regex);
	return match ? parseInt(match[0], 10) : 0;
}
