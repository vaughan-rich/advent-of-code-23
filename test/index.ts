'use strict';

import { expect } from 'chai';
import { Calibrator } from '../dist/index';

describe('Day 1', () => {
	describe('Part One', () => { 
		it('should calculate the sum of the calibration values', () => {
			// the answer is 54597
			const calibrator: Calibrator = new Calibrator();
			const input = 'puzzle-input';
			const returnValue: number = calibrator.calibrate(input);
			expect(returnValue).to.equal(54597, 'returns the sum of all calibration values');
		});
	});
});


