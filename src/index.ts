'use strict';

import { Logger } from 'sitka';
import * as fs from 'fs';

export class Calibrator {

	private _logger: Logger;

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	private parseInputFile(fileInput: string): string[] {
		const filePath = './test/fixtures/day-1/'+fileInput+'.txt';
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

interface Bag {
	red: number;
	blue: number;
	green: number;
}  

export class CubesCalculator {

	private _logger: Logger;

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	private parseGameData(input: string): Bag[][] {
		const filePath = './test/fixtures/day-2/'+input+'.txt';
		this._logger.info('Reading file: ' + filePath);
		const inputFile = fs.readFileSync(filePath, 'utf8').split('\n');
		
		const strippedStringStructure = inputFile.map((game) => {
			const splitGame = game.split(';');
			splitGame[0] = splitGame[0].replace(/Game \d+: /g, '');
			return splitGame;
		});

		return strippedStringStructure.map((game) => {
			return game.map((set) => {
				const redMatch = set.match(/(\d+) red/g);
				const greenMatch = set.match(/(\d+) green/g);
				const blueMatch = set.match(/(\d+) blue/g);	
				return {
					'red': redMatch ? Number(redMatch[0].replace('red','')) : 0,
					'green': greenMatch ? Number(greenMatch[0].replace('green','')) : 0,
					'blue': blueMatch ? Number(blueMatch[0].replace('blue','')) : 0
				}
			})
		})
	}

	private getGamePossibilities(gameData: Bag[][], bagContents: Bag): boolean[] {
		return gameData.map((game) => {
			const setPossibilities = game.map((set) => {
				if (set.red > bagContents.red || set.blue > bagContents.blue || set.green > bagContents.green) return false
				else return true
			})
			return setPossibilities.every(Boolean);
		})
	}

	private sumPossibleGameIds(gamePossibilities: boolean[]): number {
		let sum = 0;
		gamePossibilities.forEach((game, index) => {
			if (game) sum += index + 1
		});
		this._logger.info('Sum of possible game ids: ' + sum);
		return sum;
	}

	private getGamePowers(gameData: Bag[][]): number[] {
		return gameData.map((game) => {
			const minimumSet = {
				'red': 0,
				'green': 0,
				'blue': 0,
			}
			game.map((set) => {
				if (set.red > minimumSet.red) minimumSet.red = set.red;
				if (set.green > minimumSet.green) minimumSet.green = set.green;
				if (set.blue > minimumSet.blue) minimumSet.blue = set.blue;
				return minimumSet;
			})
			return minimumSet.red * minimumSet.green * minimumSet.blue;
		})
	}

	private sum(numberArray: number[]): number {
		return numberArray.reduce((runningTotal, current) => runningTotal + current, 0);
	}

	public getPossibilitySum(fileInput: string, bagContents: Bag): number {
		const gameData = this.parseGameData(fileInput);
		const gamePossibilities = this.getGamePossibilities(gameData, bagContents);
		return this.sumPossibleGameIds(gamePossibilities);
	}
	
	public getPowerSum(fileInput: string): number {
		const gameData = this.parseGameData(fileInput);
		const gamePowers = this.getGamePowers(gameData);
		const powerSum = this.sum(gamePowers);
		this._logger.info('Sum of powers: ' + powerSum);
		return powerSum;
	}
}

export class GondolaSchematic {

	private _logger: Logger;

	constructor() {
		this._logger = Logger.getLogger({ name: this.constructor.name });
	}

	private parseInputFile(fileInput: string): string[] {
		const filePath = './test/fixtures/day-3/'+fileInput+'.txt';
		this._logger.info('Reading file: ' + filePath);
		const inputFile = fs.readFileSync(filePath, 'utf8');
		return inputFile.split('\n');
	}

	// private sum(numberArray: number[]): number {
	// 	return numberArray.reduce((runningTotal, current) => runningTotal + current, 0);
	// }

	public getPartNumbersSum(input: string): number {
		const arrayFromFile = this.parseInputFile(input);

		this._logger.info('Array from file: ' + arrayFromFile);

		return 5;
	}
}
