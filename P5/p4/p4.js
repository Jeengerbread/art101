// JavaScript Document
var random16;
var particle = 0;

function preload() {
	load_uint16();
}

function setup() {
	createCanvas(655.35,655.35);
	background(33);
	noStroke();
}

function draw() {
	frameRate(10);
	if (!random16) {
		return;
	}
	fill(0, 30);
	rect(0, 0, windowWidth, windowHeight);
	
	if (particle < 10) {
		fill(70, 232, 49);
		ellipse(random16[particle] / 100, random16[particle+1] / 100, 10, 10);
		particle++;
	}
	else {
		particle = 0;
		load_uint16();
	}
}

function load_uint16() {
	let url = 'https://qrng.anu.edu.au/API/jsonI.php?' + 'length=11&type=uint16&';
	httpGet(url, 'json', false, function(response) {
		random16 = response.data;
	});
}