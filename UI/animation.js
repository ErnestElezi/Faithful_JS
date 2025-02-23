import { vector } from '../vector/vector.js';
import { lerp, lerp_vector } from '../vector/vector_math.js';

function easeInSine(x) {
	return 1 - Math.cos((x * Math.PI) / 2);
}

function easeInOutSine(x) {
	return -(Math.cos(Math.PI * x) - 1) / 2;
}

function easeOutCubic(x) {
	return 1 - Math.pow(1 - x, 3);
}

const easeFunctions = {
	sine: easeInSine,
	inOutSine: easeInOutSine,
    outCubic: easeOutCubic,
};

export class AnimationValue {
	constructor(value = 0, start = 0, end = 0, length = 0, ease = 'linear') {
		this.value = value;
		this.start = start;
		this.end = end;
		this.length = length;
		this.t = 0;
		this.frame = 0;
		this.ease = ease;
	}
	update() {
		this.frame++;
		this.t = easeFunctions[this.ease](this.frame / this.length);

		this.value = lerp(this.start, this.end, this.t);
		console.log(this.value);
	}
}

export class AnimationVector {
	constructor(value = new vector(), start = new vector(), end = new vector(), length, ease = 'inOutSine') {
		this.value = value;
		this.start = start;
		this.end = end;
		this.length = length;
		this.t = 0;
		this.frame = 0;
		this.ease = ease;
	}
	update() {
		this.frame++;

		if (this.frame > this.length) {
			this.frame = this.length;
		}

		this.t = easeFunctions[this.ease](this.frame / this.length);
		this.offset = lerp_vector(this.start, this.end, this.t);
		this.value.setV(this.offset);
		return this.value;
	}
}
