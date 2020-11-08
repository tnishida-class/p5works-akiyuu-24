// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(400, 400);
  calendar(2016,3);

  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let p = 20;
  let t = 0;
  let count = 0;
  push();
  fill(230,230,250);
  rect(16,10,175,192);
  pop();
  line(16,53,190,53);
  line(16,40,190,40);
  line(40,40,40,202);
  line(65,40,65,202);
  line(90,40,90,202);
  line(115,40,115,202);
  line(140,40,140,202);
  line(165,40,165,202);
  line(16,77,190,77);
  line(16,102,190,102);
  line(16,126,190,126);
  line(16,151,190,151);
  line(16,178 ,190,178)
;  textSize(15);
  text(y + "年"+"  "+ m + "月", 58, 30);
  textSize(9);
  for(i = 0; i < 7; i++){
    let a = dayOfWeekAsString(i);
    text(a, 24.7* (i + 1), 50);


  }


  for(let d = 1; d <= daysInMonth(y, m); d++){
    dow = dayOfWeek(y, m, d);
    console.log(dow)
    if(dow == 6){
      fill(0,0,255);
    }
    else if(dow == 0){
      fill(255,0,0);
    }

    textSize(14);
    if(d < 10){
      text(d, (dow * 25 + p + 4), t + 70 );
    }
    else text(d, (dow * 25 + p ), t + 70  );
    fill(0);
    if(dow ==6){
       t += 25;
         }
  }

}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let t = 1970; t < y; t++){
    count += daysInYear(t)
  }
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d - 1;
}

function dayOfWeek(y, m, d){
  let a =  dayOfYear(y, m, d) % 7;
  console.log(a);
  if(a >= 0 && a <= 2) return a+4;
  else return a-3;

}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
