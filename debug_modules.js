import { Brush, can } from './brush/brush.js';
import { Color } from './color/color.js';
import { palette } from './color/color_constants.js';
import { clear_keys, get_last_keys, get_sequence, is_key_changed, is_key_down, update_input } from './input/input.js';
import { Label, Panel } from './UI/user_interface.js';
import { vector } from './vector/vector.js';
import { add, avarage, multiply } from './vector/vector_math.js';

export function debug_vector() {
	// Creating a new vector
	console.log('Test 1:');
	console.log('New Vector');
	let test_vector = new vector(10, 10);
	console.log(test_vector);

	// Geting the length of a vector
	console.log('Test 2:');
	console.log('Length of the vector');
	console.log(test_vector.length);

	// Getting the angle of a vector
	console.log('Test 3:');
	console.log('Angle of the vector');
	console.log(test_vector.angle);

	// Getting the direction of a vector
	console.log('Test 4:');
	console.log('Direction of the vector');
	console.log(test_vector.direction);

	// Copy a vector
	console.log('Test 5:');
	console.log('Copy of the vector');
	console.log(test_vector.copy());

	// Get a reference to a vector
	console.log('Test 6:');
	console.log('Reference to the vector');
	console.log(test_vector.reference());

	// Set the vector
	console.log('Test 7:');
	console.log('Set the vector');
	console.log(test_vector.set(5.5, 5.6));

	// Set the vector by new vector
	console.log('Test 8:');
	console.log('Set the vector by another vector');
	console.log(test_vector.setV(new vector(5.5, 5.6)));

	// Add a offset to the original vector
	console.log('Test 9:');
	console.log('Add a offset to the original vector');
	console.log(test_vector.add(10, 10));

	// Add a vector to the original vector
	console.log('Test 10:');
	console.log('Add a vector to the original vector');
	console.log(test_vector.addV(new vector(10, 10)));

	// Scale the vector
	console.log('Test 11:');
	console.log('Scale the vector');
	console.log(test_vector.scale(2, 2));

	// Scale the vector by another vector
	console.log('Test 12:');
	console.log('Scale the vector by another vector');
	console.log(test_vector.scaleV(new vector(0.5, 0.5)));

	// Normalize the vector
	console.log('Test 13:');
	console.log('Normalize the vector');
	console.log(test_vector.normalize());

	// Check if the vector is within defined range
	console.log('Test 14:');
	console.log('Check if the vector is within defined range');
	console.log(test_vector.within_range(new vector(), new vector(2, 2)));

	// Clamp vector to defined range
	console.log('Test 15:');
	console.log('Clamp vector to defined range');
	console.log(test_vector.clamp(new vector(10, 10), new vector(100, 100)));

	// Rotate the vector
	console.log('Test 16:');
	console.log('Rotate the vector');
	console.log(test_vector.rotate(Math.PI));

	// Set the vector by angle and length
	console.log('Test 17:');
	console.log('Set the vector by angle and length');
	console.log(test_vector.setByAngle(Math.PI / 4, 1));

	// Add an offset by angle and length
	console.log('Test 18:');
	console.log('Add an offset by angle and length');
	console.log(test_vector.addOffsetByAngle(Math.PI / 4, 1));

	// Round the vector
	console.log('Test 19:');
	console.log('Round the vector');
	console.log(test_vector.round());

	// Floor the vector
	console.log('Test 20:');
	console.log('Floor the vector');
	console.log(test_vector.floor());

	// Celing the vector
	console.log('Test 21:');
	console.log('Celing the vector');
	console.log(test_vector.celi());

	// Randomize the vector
	console.log('Test 22:');
	console.log('Randomize the vector');
	console.log(test_vector.random());

	// Randomize within range
	console.log('Test 23:');
	console.log('Randomize the vector within range');
	console.log(test_vector.randomRange(0, 10, 0, 10));

	// Randomize within range defined by vectors
	console.log('Test 24:');
	console.log('Randomize the vector within range defined by vectors');
	console.log(test_vector.randomRangeV(new vector(0, 0), new vector(10, 10)));

	// Randomize to integers within range
	console.log('Test 25:');
	console.log('Randomize the vector to integers within range');
	console.log(test_vector.randomIntRange(0, 10, 0, 10));

	// Randomize to integers within range defined by vectors
	console.log('Test 26:');
	console.log('Randomize the vector to integers within range defined by vectors');
	console.log(test_vector.randomIntRangeV(new vector(0, 0), new vector(10, 10)));
}

export function debug_vector_math() {
	console.log(add(new vector(100, 100), new vector(-1, -1)));

	console.log(multiply(new vector(1, 1), new vector(100, 100), new vector(2, 2)));

	console.log(avarage(new vector(10, 10), new vector(20, 20)));
}

export function debug_color() {
	let can = new Brush();
	can.resize();

	// Normal
	const red = new Color(255, 0, 0, 1);
	const black = new Color(0, 0, 0, 1);
	can.drawRect(0, 0, 100, 100, red, black, 10);
	// Transparent
	const transparentRed = new Color(255, 0, 0, 0.5);
	can.drawRect(0, 0, 100, 100, transparentRed, black, 10);

	// Mix
	const transparentBlue = new Color(0, 0, 255, 0.5);
	can.drawRect(100, 0, 100, 100, transparentBlue, black, 10);
	can.drawRect(100, 0, 100, 100, transparentRed, black, 10);

	// Add
	const purple = transparentRed.copy().add(transparentBlue);
	can.drawRect(200, 0, 100, 100, purple, black, 10);

	// Mul
}

export function debug_brush() {
	let can = new Brush();
	can.resize();
	can.setFillColor(new Color(255, 0, 0, 1));
	can.pathRect(0, 0, 100, 100);
	can.fill();

	can.drawRoundRect(100, 0, 100, 100, 25, new Color(0, 255, 0, 1), new Color(0, 0, 0, 1), 0);
}

let panel = new Panel(
	new vector(40, 20),
	new vector(500, 350),
	palette.blackDim,
	palette.lime,
	4,
	25,
	() => {},
	() => {},
	() => {
		panel.shift(new vector(40, 20), 100, 'inOutCubic');
	},
	[new Label('Hello', 'center', 'center', new vector(250, 20), palette.white, palette.black, 1, 1, palette.red)],
	false
);

let frame = 0;
function loop() {
	requestAnimationFrame(loop);
	if (frame % 1 == 0) {
		can.c.clearRect(0, 0, can.c.canvas.width, can.c.canvas.height);
		panel.update();
		panel.draw();
	}

	if (get_sequence('ShiftA')) {
		panel.shift(new vector(40, 20), 100, 'inOutCubic');
	}

	can.c.fillStyle = 'white';
	can.c.font = '20px Arial';
	can.c.fillText(get_last_keys(), 10, 20);

	update_input();
	frame++;
}

// debug_vector()
// debug_vector_math();
// debug_color();
// debug_brush();
// debug_panel();

loop();
