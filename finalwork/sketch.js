let x, y, vx, vy, paddlex, paddley,r;

let grabbed; // 円をつかんでいるかどうかを記憶するために使う変数

function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
}

function reset(){
  x = width / 2;
  y = height *3/4;
  vx = 0;
  vy = 0;
  r=30;
  paddlex=(windowWidth-75)/2;
  paddley=windowHeight-10;
  grabbed = false;
}

function draw(){
  background(160, 192, 255);
  rect(windowWidth/6,windowHeight/10,windowWidth*4/6,windowHeight/10);
  ellipse(x, y, r);
  if(!grabbed){
    x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; }
    else if(y + vy > windowHeight - r){
      if(x > paddlex && x < paddlex + 75){
        vy = -0.8 * vy;
      }
      else {
        reset();
      }
    }
   if(y > windowHeight/10 && y <windowHeight/10 * 2 && x>0 && windowWidth/6 <= x){
     vx = -0.8 * vx; 
   }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
 fill(0,0,255);
  rect(paddlex,paddley,75,10);
  if(keyIsDown(RIGHT_ARROW)){
        paddlex +=7
    }
    else if(keyIsDown(LEFT_ARROW)){
        paddlex +=-7
    }

}


function keyPressed(){
  if(key == " "){ reset(); }
}

function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 30;
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx = mouseX - pmouseX;
    vy = mouseY - pmouseY;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
