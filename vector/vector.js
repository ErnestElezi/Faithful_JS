/**
 * @module Vector 2d class
 * * Base of all other modules
 */
export class vector {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

    /**
     * Gets the length of the current vector
     * @returns length
     */
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

    /**
     * Gets the angle of the current vector
     * @returns angle
     */
	get angle() {
		return Math.atan2(this.y, this.x);
	}

    /**
     * Gets the direction of the current vector
     * @returns vector
     */
	get direction() {
		return this.copy().normalize();
	}

    /**
     * Creates a copy of the current vector
     * @returns Copy of current vector
     */
	copy() {
		return new vector(this.x, this.y);
	}

    /**
     * Returns a reference to current vector
     * @returns Current vector
     */
	reference() {
		return this;
	}

    /**
     * Sets the vector
     * @param {number} x X value 
     * @param {number} y Y value
     * @returns Copy of current vector
     */
	set(x = 0, y = 0) {
		this.x = x;
		this.y = y;
		return this.copy();
	}

	setV(vector = new vector()) {
		this.set(vector.x, vector.y);
		return this.copy();
	}

	add(x = 0, y = 0) {
		this.x += x;
		this.y += y;
		return this.copy();
	}

	addV(vector = new vector()) {
		this.add(vector.x, vector.y);
		return this.copy();
	}

	scale(x = 1, y = 1) {
		this.x *= x;
		this.y *= y;
		return this.copy();
	}

	scaleV(vector = new vector()) {
		this.scale(vector.x, vector.y);
		return this.copy();
	}

	normalize() {
		let length = this.length;
		let angle = this.angle;
		this.x /= length;
		this.y /= length;
		return this.copy();
	}

	within_range(min = new vector(), max = new vector()) {
		return (this.x < min.x ? false : this.x > max.x ? false : true) && (this.y < min.y ? false : this.y > max.y ? false : true);
	}

	clamp(min = new vector(), max = new vector()) {
		this.set(this.x < min.x ? min.x : this.x > max.x ? max.x : this.x, this.y < min.y ? min.y : this.y > max.y ? max.y : this.y);
		return this.copy();
	}

	rotate(angle = 0) {
		let length = this.length;
		let new_angle = this.angle + angle;
		this.setByAngle(new_angle, length);
		return this.copy();
	}

	setByAngle(angle = 0, length = 0) {
		this.set(Math.cos(angle) * length, Math.sin(angle) * length);
		return this.copy();
	}

	addOffsetByAngle(angle = 0, length = 0) {
		let original_vector = this.copy();
		let angle_offset = this.setByAngle(angle, length);
		this.setV(original_vector.addV(angle_offset));
		return this.copy();
	}

	round() {
		this.set(Math.round(this.x), Math.round(this.y));
		return this.copy();
	}

	floor() {
		this.set(Math.floor(this.x), Math.floor(this.y));
		return this.copy();
	}

	celi() {
		this.set(Math.round(this.x), Math.round(this.y));
		return this.copy();
	}

	random() {
		this.x = Math.random();
		this.y = Math.random();
		return this.copy();
	}

	randomRange(Xmin = 0, Xmax = 0, Ymin = 0, Ymax = 0) {
		this.random();
		this.scale(Xmax - Xmin, Ymax - Ymin);
		this.add(Xmin, Ymin);
		return this.copy();
	}

	randomRangeV(min = new vector(), max = new vector()) {
		this.randomRange(min.x, max.x, min.y, max.y);
		return this.copy();
	}

	randomIntRange(Xmin = 0, Xmax = 0, Ymin = 0, Ymax = 0) {
		this.randomRange(Xmin, Xmax, Ymin, Ymax);
		this.round();
		return this.copy();
	}

	randomIntRangeV(min = new vector(), max = new vector()) {
		this.randomIntRange(min.x, max.x, min.y, max.y);
		return this.copy();
	}
}
