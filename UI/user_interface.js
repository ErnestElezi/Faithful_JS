import { can } from '../brush/brush.js';
import { Color } from '../color/color.js';
import { vector } from '../vector/vector.js';
import { AnimationValue, AnimationVector } from './animation.js';

export class Panel {
	constructor(
		position = new vector(),
		size = new vector(),
		fill = new Color(),
		stroke = new Color(),
		lineWidth = 0,
		borderRadius = 10,
		idleFunc = () => {},
		hoverFunc = () => {},
		clickFunc = () => {},
		children = []
	) {
		this.position = position;
		this.size = size;
		this.fill = fill;
		this.stroke = stroke;
		this.lineWidth = lineWidth;
		this.borderRadius = borderRadius;
		this.idleFunc = idleFunc;
		this.hoverFunc = hoverFunc;
		this.clickFunc = clickFunc;
		this.children = children;
		this.animations = [];
	}

	move(offset = new vector()) {
		this.position.addV(offset);
	}

	shift(x = new vector(), time = 1) {
		this.animations.push(new AnimationVector(this.position.copy(), this.position.copy(), this.position.copy().addV(x), time, 'outCubic'));
	}

	draw() {
		can.drawRoundRectV(this.position, this.size, 10, this.fill, this.stroke, this.lineWidth, this.borderRadius);
		this.children.forEach((child) => child.draw());
	}

	update() {
		this.animations.forEach((animation) => {
			let result = animation.update();
			this.position.setV(result);
		});
		this.children.forEach((child) => child.update());
	}
}
