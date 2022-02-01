let row = 24;
var fullhtml = {};
let multiply = [190,196,125,125,100,35,108,108,100,100,100,100,50,50,29,29,29,10,10,10,10,15,15,15];
let totalValue = {};
let name = ["মাফিন (৩০গ্রাম)","লেয়ার কেক (৩০গ্রাম)","সুইস রোল (২০০গ্রাম)","ফ্রুট কেক (৩০০গ্রাম)","ফ্রুট কেক (২৬০গ্রাম)","ফ্রুট কেক (৮৫গ্রাম)","ড্রাই কেক (৩০০গ্রাম)","মার্বেল ড্রাই কেক (২৮০গ্রাম)","মার্বেল কেক (৩০০গ্রাম)","ভ্যানিলা পাউন্ড কেক (৩০০ গ্রাম)","চকলেট পাউন্ড কেক (৩০০ গ্রাম)","লেমন পাউন্ড কেক (৩০০ গ্রাম)","ভ্যানিলা প্লেইন কেক (১৫০গ্রাম)","চকলেট প্লেইন কেক(১৫০গ্রাম)","ভ্যানিলা পাউন্ড কেক (৯০ গ্রাম)","চকলেট পাউন্ড কেক (৯০ গ্রাম)","লেমন পাউন্ড কেক (৯০ গ্রাম)","সিঙ্গেল স্লাইস ভ্যানিলা (৩০ গ্রাম)","সিঙ্গেল স্লাইস চকলেট (৩০ গ্রাম)","সিঙ্গেল স্লাইস ওরেঞ্জ (৩০ গ্রাম)","সিঙ্গেল স্লাইস লেমন (৩০ গ্রাম)","ডাবল স্লাইস ভ্যানিলা (৪৫ গ্রাম)","ডাবল স্লাইস চকলেট (৪৫ গ্রাম)","মার্বেল কেক (৪০গ্রাম)"]

var html = `<input type="number" value="" autocomplete="off" class="input"><div class="x">x</div>`
var display = `<div class="display"> = 0</div>
</div>`

function loadAll(){
  for(let i=0;i<row;i++){
    totalValue[i] = 0;
    let label = `<div class="box"><label for="" class="label">${name[i]}</label>`;
    let temp = `<div class="index">${i}</div><div class="multiply">${multiply[i]}</div>`;
    fullhtml[i] = (label+html+temp+display);
    document.getElementById("container").innerHTML += fullhtml[i];
  }
}
function fulltotal(){
  let temp = 0;
  for(let i=0;i<row;i++){
    temp += totalValue[i];
  }
  document.getElementById("totalOutput").innerHTML = temp;
}

$(document).ready(function () {
  $(".input").keyup(function () {
    let output = this.parentNode.getElementsByClassName("display")[0];
    let multi = this.parentNode.getElementsByClassName("multiply")[0].innerText;
    let index = this.parentNode.getElementsByClassName("index")[0].innerText;
    let total = this.value*multi
    totalValue[index] = total;
    output.innerText = " = "+total;
    fulltotal();
  });
});