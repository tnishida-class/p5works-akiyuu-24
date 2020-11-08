// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0,69,181);
  noStroke();
  for(let i = 0; i < 12; i++){
    var theta = TWO_PI * i / 12;
    var x = 100 + cos(theta) * 50;
    var y = 100 + sin(theta) * 50;
    fill(240,240,0);
    star(x, y, 10);
  }

function star(cx, cy, r){
  beginShape();
  for(let j = 0; j < 5; j++){
    var theta = TWO_PI * j * 2/5 - HALF_PI;
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}
  }
