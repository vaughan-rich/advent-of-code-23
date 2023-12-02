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
		this._logger.info('Reading file: ' + filePath);
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

	private wordsToDigits(array: string[]): string[] {
		return array.map((string) => {
			return string.split('')
				.map((char, index) => {
					const slicedString = string.slice(index);
					if (slicedString.startsWith('one')) return '1';
					if (slicedString.startsWith('two')) return '2';
					if (slicedString.startsWith('three')) return '3';
					if (slicedString.startsWith('four')) return '4';
					if (slicedString.startsWith('five')) return '5';
					if (slicedString.startsWith('six')) return '6';
					if (slicedString.startsWith('seven')) return '7';
					if (slicedString.startsWith('eight')) return '8';
					if (slicedString.startsWith('nine')) return '9';
					return char;
				}).join('');
		});
	}

	public calibrate(input: string): number {
		const arrayFromFile = this.parseInputFile(input);
		const lettersRemoved = this.removeLetters(arrayFromFile);
		const calibrationValues: number[] = this.sliceFirstAndLast(lettersRemoved);
		const calibrationSum = this.sum(calibrationValues);

		this._logger.info('Sum of calibration values: ' + calibrationSum);

		return calibrationSum;
	}

	public calibrateBetter(input: string): number {
		const arrayFromFile = this.parseInputFile(input);
		const wordDigitsAdded = this.wordsToDigits(arrayFromFile);
		const lettersRemoved = this.removeLetters(wordDigitsAdded);
		const calibrationValues: number[] = this.sliceFirstAndLast(lettersRemoved);
		const calibrationSum = this.sum(calibrationValues);
		
		this._logger.info('Sum of better calibration values: ' + calibrationSum);

		return calibrationSum;
	}
}
