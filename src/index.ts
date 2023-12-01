'use strict';

import { Logger } from 'sitka';
import * as fs from 'fs';

export class Calibrator {

	private _logger: Logger;

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	public calibrate(input: string): number {
		this._logger.debug('Received input of: ' + input);
		
		const filePath = './src/day-1/'+input+'.txt';
		const inputFile = fs.readFileSync(filePath, 'utf8');

		const calibrationArray = inputFile.split('\n');
		const lettersRemoved = calibrationArray.map((element) => {
			return element.replace(/\D/g, '');
		})

		const calibrationValues: number[] = lettersRemoved.map((element) => {
			const first: string  = element.slice(0,1);
			const last: string = element.slice(-1);
			return Number(first + last);
		})
		const calibrationSum = calibrationValues.reduce((runningTotal, current) => runningTotal + current, 0);

		this._logger.debug('Sum of Calibration Values: ' + calibrationSum);
		
		return calibrationSum;
	}
}
