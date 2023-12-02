'use strict';

import { Logger } from 'sitka';
import * as fs from 'fs';

export class Calibrator {

	private _logger: Logger;

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	private parseInputFile(input: string): string[] {
		const filePath = './test/fixtures/day-1/'+input+'.txt';
		this._logger.debug('Reading file: ' + filePath);
		const inputFile = fs.readFileSync(filePath, 'utf8');
		return inputFile.split('\n');
	}

	private removeLetters(array: string[]): string[] {
		return array.map((element) => {
			return element.replace(/\D/g, '');
		});
	}

	private sliceFirstAndLast(digitOnlyArray: string[]): number[] {
		return digitOnlyArray.map((element) => {
			const first: string  = element.slice(0,1);
			const last: string = element.slice(-1);
			return Number(first + last);
		});
	}

	private sum(numberArray: number[]): number {
		return numberArray.reduce((runningTotal, current) => runningTotal + current, 0);
	}

	public calibrate(input: string): number {
		const arrayFromFile = this.parseInputFile(input);
		const lettersRemoved = this.removeLetters(arrayFromFile);
		const calibrationValues: number[] = this.sliceFirstAndLast(lettersRemoved);
		const calibrationSum = this.sum(calibrationValues);

		this._logger.debug('Sum of Calibration Values: ' + calibrationSum);

		return calibrationSum;
	}

	public calibrateBetter(input: string): number {
		const arrayFromFile = this.parseInputFile(input);
		
		// Here, before removing surplus letters, need to do lookup and replace with numbers
		
		const lettersRemoved = this.removeLetters(arrayFromFile);
		const calibrationValues: number[] = this.sliceFirstAndLast(lettersRemoved);
		const calibrationSum = this.sum(calibrationValues);
		
		this._logger.debug('Sum of Calibration Values: ' + calibrationSum);

		return calibrationSum;
	}
}
