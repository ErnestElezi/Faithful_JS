import { vector } from '../vector/vector';
import { deg } from '../vector/vector_math';

export class Brush {
	constructor(canvas_element = document.querySelector('canvas'), anti_aliasing = true) {
		this.canvas_element = canvas_element;
		this.c = canvas_element.getContext('2d');
		this.anti_aliasing = anti_aliasing;
	}

	// Context methods

	lineTo(x = 0, y = 0) {
		this.c.lineTo(x, y);
	}
	lineToV(point = new vector()) {
		this.c.lineTo(point.x, point.y);
	}
	moveTo(x = 0, y = 0) {
		this.c.moveTo(x, y);
	}
	moveToV(point = new vector()) {
		this.c.moveTo(point.x, point.y);
	}

	// Drawing Paths

	pathRect(x = 0, y = 0, w = 0, h = 0) {
		this.c.rect(x, y, w, h);
	}
	pathRectV(position = new vector(), size = new vector()) {
		this.c.rect(position.x, position.y, size.x, size.y);
	}

	pathCircle(x = 0, y = 0, radius = 0) {
		this.arc(x, y, radius, 0, Math.PI * 2, false);
	}
	pathCircleV(position = new vector(), radius = 0) {
		this.arc(position.x, position.y, radius, 0, Math.PI * 2, false);
	}

	pathArc(x = 0, y = 0, radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false) {
		this.arc(x, y, radius, starAnge, endAngle, counterClockwise);
	}
	pathArcV(position = new vector(), radius = 0, starAnge = 0, endAngle = Math.PI * 2, counterClockwise = false) {
		this.arc(position.x, position.y, radius, starAnge, endAngle, counterClockwise);
	}

	pathLine(x0 = 0, y0 = 0, x1 = 0, y1 = 0) {
		this.c.moveTo(x0, y0);
		this.c.lineTo(x1, y1);
	}
	pathLineV(start = new vector(), end = new vector()) {
		this.c.moveTo(start.x, start.y);
		this.c.lineTo(end.x, end.y);
	}

	pathArrow(x0 = 0, y0 = 0, x1 = 0, y1 = 0, headLength = 0, headAngle = 0) {
		let dierction = new vector(x1 - x0, y1 - y0);
		let length = dierction.length;
		let angle = dierction.angle;

		let body = new vector(length);

		let offset1 = new vector().setByAngle(180 * deg - headAngle, headLength).add(length);
		let offset2 = new vector().setByAngle(180 * deg + headAngle, headLength).add(length);

		body.rotate(angle);
		body.add(x0, y0);

		offset1.rotate(angle);
		offset1.add(x0, y0);

		offset2.rotate(angle);
		offset2.add(x0, y0);

		this.pathLine(x0, y0, x1, y1);
		this.pathLineV(offset1, new vector(body));
		this.pathLineV(offset2, new vector(body));
	}
	pathArrowV(start = new vector(), end = new vector(), headLength = 0, headAngle = 0) {
		let dierction = end.copy().add(start.scale(-1, -1));
		let length = dierction.length;
		let angle = dierction.angle;

		let body = new vector(length);

		let offset1 = new vector().setByAngle(180 * deg - headAngle, headLength).add(length);
		let offset2 = new vector().setByAngle(180 * deg + headAngle, headLength).add(length);

		body.rotate(angle);
		body.addV(start);

		offset1.rotate(angle);
		offset1.addV(start);

		offset2.rotate(angle);
		offset2.addV(start);

		this.pathLineV(start, end);
		this.pathLineV(offset1, new vector(body));
		this.pathLineV(offset2, new vector(body));
	}

	pathStar(x = 0, y = 0, points = 0, minRadius = 0, maxRadius = 0) {
		let increment = (360 / points) * deg;
	}
	pathStarV() {}

	pathPolygon() {}
	pathPolygonV() {}

	pathShapeV() {}

	// Rendering

	setFillColor() {}

	setStrokeColor() {}

	setLineWidth() {}

	// Modifiers

	save() {
		this.c.save();
	}

	restore() {
		this.c.restore();
	}

	translate(x = 0, y = 0) {
		this.c.translate(x, y);
	}
	translateV(offset = new vector()) {
		this.c.translate(offset.x, offset.y);
	}

	rotate(angle = 0) {
		this.c.rotate(angle);
	}
	rotateDeg(angle = 0) {
		this.c.rotate(angle * deg);
	}
}
