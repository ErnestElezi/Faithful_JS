export class Color {
	constructor(r = 0, g = 0, b = 0, a = 1) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	get color() {
		return `rgba(${this.r},${this.g},${this.b},${this.a})`;
	}

	get color_array() {
		return [this.r, this.g, this.b, this.a];
	}

	set_rgb(r = 0, g = 0, b = 0) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	set_rgba(r = 0, g = 0, b = 0, a = 1) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}

	add(color = new Color()) {
		this.r += color.r;
		this.g += color.g;
		this.b += color.b;
		this.a += color.a;
	}

	subtract(color = new Color()) {
		this.r -= color.r;
		this.g -= color.g;
		this.b -= color.b;
		this.a -= color.a;
	}
    
	multiply(color = new Color()) {
		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;
		this.a *= color.a;
	}

	devide(color = new Color()) {
		this.r /= color.r;
		this.g /= color.g;
		this.b /= color.b;
		this.a /= color.a;
	}
}
