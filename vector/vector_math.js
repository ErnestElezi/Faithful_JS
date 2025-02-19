import { vector } from './vector.js';

export function add(...vectors) {
	let result = new vector();
	for (const vector of vectors) {
		result.addV(vector);
	}
	return result;
}

export function multiply(...vectors) {
	let result = new vector(1, 1);
	for (const vector of vectors) {
		result.scaleV(vector);
	}
	return result;
}

export function avarage(...vectors) {
	let sum = add(...vectors);
	return sum.scale(1 / vectors.length, 1 / vectors.length);
}
