let x;
let	y;

let xSpeed;
let	ySpeed;

let r,g,b;
let dvd;

function preload() {
  dvd = loadImage("./dvd-logo.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
	x = random(width);
	y = random(height);
	xSpeed = 4;
  ySpeed = 4;
  changeColor();
}

function draw() {
  background(0);
  tint(r, g, b);
  image(dvd, x, y);
	x = x + xSpeed;
  y = y + ySpeed;
	if (x + dvd.width >= width) {
		xSpeed = -xSpeed;
    x = width - dvd.width;
    changeColor();
	} else if (x <= 0) {
		xSpeed = -xSpeed;		
    x = 0;
    changeColor();
	}
	if (y + dvd.height >= height) {
		ySpeed = -ySpeed;
    y = height - dvd.height;
    changeColor();
	} else if (y <= 0) {
		ySpeed = -ySpeed;
    y = 0;
    changeColor();
	}
}

function changeColor() {
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
}