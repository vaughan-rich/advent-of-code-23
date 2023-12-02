'use strict';

import { expect } from 'chai';
import { Calibrator } from '../dist/index';

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


