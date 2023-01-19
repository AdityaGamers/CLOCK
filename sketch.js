function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(0);
  angleMode(DEGREES)
  translate(200,200)
  rotate(-90)
  h=hour()
  m=minute()
  s=second()
  sangle=map(s,0,60,0,360)
  mangle=map(m,0,60,0,360)
  hangle=map(h%12,0,12,0,360)

  push()
  rotate(sangle)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(mangle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  push()
  rotate(hangle)
  stroke("green")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  strokeWeight(10)
  noFill()
  stroke("red")
  arc (0,0,300,300,0,sangle)
  stroke("blue")
  arc (0,0,280,280,0,mangle)
  stroke("green")
  arc (0,0,260,260,0,hangle)
  drawSprites();
}