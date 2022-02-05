let row = 33;
let dname = [];
let dmultiply = [];
let dtotalValue = [];
let index = 0;
let multiply = [
  190, 190, 24.5, 24.5, 196, 196, 125, 125, 108, 84, 35, 108, 108, 100, 100, 100, 100, 50, 50, 30, 30, 30, 10, 10, 10, 10, 15, 15, 15, 33, 100, 100, 100,
];
let totalValue = [];
let totalOrder = [];
let totalBounce = [];
let name = [
  "ভ্যানিলা মাফিন (৩০গ্রাম)",
  "চকলেট মাফিন (৩০গ্রাম)",
  "ভ্যানিলা মাফিন (৫০গ্রাম)",
  "চকলেট মাফিন (৫০গ্রাম)",
  "ভ্যানিলা লেয়ার কেক (৩০গ্রাম)",
  "চকলেট লেয়ার কেক (৩০গ্রাম)",
  "সুইস রোল স্ট্রবেরি (২০০গ্রাম)",
  "সুইস রোল চকলেট (২০০গ্রাম)",
  "ফ্রুট কেক (৩০০গ্রাম)",
  "ফ্রুট কেক (২৬০গ্রাম)",
  "ফ্রুট কেক (৮৫গ্রাম)",
  "ড্রাই কেক (৩০০গ্রাম)",
  "মার্বেল ড্রাই কেক (২৮০গ্রাম)",
  "মার্বেল কেক (৩০০গ্রাম)",
  "ভ্যানিলা পাউন্ড কেক (৩০০ গ্রাম)",
  "চকলেট পাউন্ড কেক (৩০০ গ্রাম)",
  "লেমন পাউন্ড কেক (৩০০ গ্রাম)",
  "ভ্যানিলা প্লেইন কেক (১৫০গ্রাম)",
  "চকলেট প্লেইন কেক(১৫০গ্রাম)",
  "ভ্যানিলা পাউন্ড কেক (৯০ গ্রাম)",
  "চকলেট পাউন্ড কেক (৯০ গ্রাম)",
  "লেমন পাউন্ড কেক (৯০ গ্রাম)",
  "সিঙ্গেল স্লাইস ভ্যানিলা (৩০ গ্রাম)",
  "সিঙ্গেল স্লাইস চকলেট (৩০ গ্রাম)",
  "সিঙ্গেল স্লাইস ওরেঞ্জ (৩০ গ্রাম)",
  "সিঙ্গেল স্লাইস লেমন (৩০ গ্রাম)",
  "ডাবল স্লাইস ভ্যানিলা (৪৫ গ্রাম)",
  "ডাবল স্লাইস চকলেট (৪৫ গ্রাম)",
  "মার্বেল কেক (৪০গ্রাম)",
  "ক্লাসিক ব্রাউনিস (৪০গ্রাম)",
  "ব্লাক সিড কুকিজ (০০গ্রাম)",
  "কাপুচিনো কুকিজ (০০গ্রাম)",
  "বাটার কুকিজ (০০গ্রাম)",
];
var html = ``;
let newdiv = ``;
let htmlbounce = `<div class="x">-</div><input type="number" value="" autocomplete="off" class="bounce">`;
let dlt = `<div class="dlt_item"><button class="dlt_btn"></button></div>`

function builtHtml(name,multiply,cname, cprice, index, bounce,dltbtn) {
  return `<div class="box"><label for="" class="label">${cname[index]}</label>
<input type="number" value="" autocomplete="off" class="${name}">
${bounce}<div class="x">x</div><div class="index">${index}</div>
<div class="${multiply}">${cprice[index]}</div>
<div class="display">= 0</div>${dltbtn}</div>`;
}

function loadAll() {
  document.getElementById("date").innerText = (new Date().toLocaleDateString());
  let sname = document.getElementById("dname");
  for (let i = 0; i < row; i++) {
    sname.innerHTML += `<option value="${name[i]}">${name[i]}</option>`;
    totalValue[i] = 0;
    dtotalValue[i] = 0;
    html += builtHtml("input","multiply",name, multiply, i, htmlbounce,``);
  }
  document.getElementById("container").innerHTML = html;
  Start();
}

function fulltotal() {
  let temp = 0;
  let dtemp = 0;
  let order = 0;
  let bounce = 0;
  for(let i of totalValue){
    if(i!=null)temp+=i;
  }
  for(let i of totalBounce){
    if(i!=null)bounce+=i;
  }
  for(let i of totalOrder){
    if(i!=null)order+=i;
  }
  for(let i of dtotalValue){
    if(i!=null)dtemp+=i;
  }
  console.log(totalOrder);
  document.getElementById("totalOrder").innerText = order;
  document.getElementById("totalBounce").innerText = bounce;
  document.getElementById("totalDamage").innerText = dtemp;
  document.getElementById("fullTotal").innerText = temp - dtemp;
}

function setValue(point, cname) {
  let output = point.parentNode.getElementsByClassName("display")[0];
  let multi = point.parentNode.getElementsByClassName("multiply")[0].innerText;
  let index = point.parentNode.getElementsByClassName("index")[0].innerText;
  let inVal = point.parentNode.getElementsByClassName(cname)[0].value;
  let total;
  if (cname == "bounce") {
    total = (point.value - inVal) * multi;
    totalOrder[index] = point.value*multi;
    console.log("order");
  }
  if (cname == "input") {
    total = (inVal - point.value) * multi;
    totalBounce[index] = point.value*multi;
    console.log("bounce");
  }
  totalValue[index] = total;
  output.innerText = " = " + total;
  fulltotal();
}
function dsetValue(point) {
  let output = point.parentNode.getElementsByClassName("display")[0];
  let multi = point.parentNode.getElementsByClassName("dmultiply")[0].innerText;
  let index = point.parentNode.getElementsByClassName("index")[0].innerText;
  let total;
  total = point.value * multi;
  dtotalValue[index] = total;
  output.innerText = " = " + total;
  fulltotal();
}

function Start() {
  $(document).ready(function () {
    $(".input").keyup(function () {
      setValue(this, "bounce");
    });
    $(".bounce").keyup(function () {
      setValue(this, "input");
    });
  });
}
function dStart() {
  $(document).ready(function () {
    $(".dinput").keyup(function () {
      dsetValue(this);
    });
    $(".dlt_btn").click(function(){
      this.parentNode.parentNode.style.display = "none";
      let index = this.parentNode.parentNode.getElementsByClassName("index")[0].innerText;
      dtotalValue[index] = 0;
      fulltotal();
    });
  });
}

$(document).ready(function () {
  let newName;
  let newPrice;
  let dnewName;
  let dnewPrice;
  $(".name").keyup(function () {
    if (this.value != "") {
    newName = this;
    }
  });
  $(".price").keyup(function () {
    newPrice = this;
  });
  $(".dprice").keyup(function () {
    dnewPrice = this;
  });
  $("#submit").click(function() {
    name[row] = newName.value;
    multiply[row] = parseInt(newPrice.value);
    document.getElementById("container").innerHTML += builtHtml(
      "input",
      "multiply",
      name,
      multiply,
      row,
      htmlbounce,
      ``
    );
    row++;
    Start();
  });
  $("#dsubmit").click(function () {
    location.href="#dsubmit";
    dname[index] = $(".dname").val();
    dmultiply[index] = parseInt(dnewPrice.value);
    document.getElementById("damage").innerHTML += builtHtml("dinput","dmultiply",dname,dmultiply, index,``, dlt);
    console.log();
    index++;
    dStart();
  })
});
