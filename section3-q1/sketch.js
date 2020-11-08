// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(1000, 1000);
  background(255);
  balloon("aaaaaaaaaaaa",100,100,color(0,0,255),color(255,255,0));
}

function balloon(t, x, y,color1,color2){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(color1);
  triangle(x + ( w + p ) , y + (h/2) ,x +  w - h , y + (h + p) ,x  + ( w + p ) + 10  , y + (h + p) + (h / 2));
  fill(color1);
  rect(x, y, w + p * 2, h + p * 2);
  fill(color2);
  text(t, p+x, h + p + y);
}
