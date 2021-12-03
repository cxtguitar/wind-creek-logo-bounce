 let x;
let y;

let xspeed;
let yspeed;

let logo;

let r,g,b;

function preload() {
  logo = loadImage("wind creek logo2.png");
}

function setup() {
  createCanvas(1920, 1080);
x = 960;
y = 540;
  xspeed = 2;
  yspeed = 2;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  // rect(x, y, 192, 108);
  // Draw the logo
  tint(r,g,b);
  image(logo, x, y, 192, 108);
  
  x = x + xspeed;
  y = y + yspeed;
  
  if (x + 192 == width || x == 0) {
    xspeed = xspeed * -1;
    pickColor();
     } 
  
    if (y + 108 == height || y == 0) {
    yspeed = yspeed * -1;
      pickColor();
    }
  
}