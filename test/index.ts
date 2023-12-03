'use strict';

import { expect } from 'chai';
import { Calibrator, CubesCalculator } from '../dist/index';

describe('Day 1', () => {
	describe('Part One', () => { 
		it('should calculate the sum of the calibration values, using example input', () => {
			// the answer is 142, as per the task in the README
			const calibrator: Calibrator = new Calibrator();
			const input = 'part-1-example';
			const returnValue: number = calibrator.calibrate(input);
			expect(returnValue).to.equal(142, 'returns the sum of all calibration values');
		});

		it('should calculate the sum of the calibration values, using actual input', () => {
			// my puzzle answer is 54597
			const calibrator: Calibrator = new Calibrator();
			const input = 'puzzle-input';
			const returnValue: number = calibrator.calibrate(input);
			expect(returnValue).to.equal(54597, 'returns the sum of all calibration values');
		});
	});

	describe('Part Two', () => { 
		it('should better calculate the sum of the calibration values, using example input', () => {
			// the answer is 281, as per the task in the README
			const calibrator: Calibrator = new Calibrator();
			const input = 'part-2-example';
			const returnValue: number = calibrator.calibrateBetter(input);
			expect(returnValue).to.equal(281, 'returns the sum of all calibration values');
		});

		it('should better calculate the sum of the calibration values, using actual input', () => {
			// my puzzle answer is 54504
			const calibrator: Calibrator = new Calibrator();
			const input = 'puzzle-input';
			const returnValue: number = calibrator.calibrateBetter(input);
			expect(returnValue).to.equal(54504, 'returns the sum of all calibration values');
		});
	});
});

describe('Day 2', () => {
	describe('Part One', () => { 
		it('should calculate the sum of the possible game ids, using example input', () => {
			// the answer is 8, as per the task in the README
			const cubeCalculator: CubesCalculator = new CubesCalculator();
			const input = 'part-1-example';
			const bagContents = {
				'red': 12,
				'green': 13,
				'blue': 14
			};
			const returnValue: number = cubeCalculator.getPossibilitySum(input, bagContents);
			expect(returnValue).to.equal(8, 'returns the sum of all possible game ids');
		});

		it('should calculate the sum of the possible game ids, using actual input', () => {
			// my puzzle answer is 2006
			const cubeCalculator: CubesCalculator = new CubesCalculator();
			const input = 'puzzle-input';
			const bagContents = {
				'red': 12,
				'green': 13,
				'blue': 14
			};
			const returnValue: number = cubeCalculator.getPossibilitySum(input, bagContents);
			expect(returnValue).to.equal(2006, 'returns the sum of all possible game ids');
		});
	});
});


