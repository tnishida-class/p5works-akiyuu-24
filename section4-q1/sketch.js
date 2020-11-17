// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 1;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 5) % cycle;
  let size = count
  if (count > 50){
    size = 40;}
  else {size = 20;}
  ellipse(width / 2, height / 2, size);

}
