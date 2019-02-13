//________________Array för lagring av regler_____________________
let header = ["\nheader{\n","","","}",];
console.log(header);
//[1] bg-color
let h1 = ["\nh1{\n","","","","","","}",]; 
console.log(h1);
// [1][2][3][4]
let nav_bc = ["\nnav{\n","","","","","","}",];
console.log(nav_bc);
//[1] bg-color
let nav_anchor = ["\nnav a{\n","","","","","","}",];
console.log(nav_anchor);
// [1][2][3][4]
let section_bc = ["\nsection{\n","","","","","","}",];
console.log(section_bc);
// [1] bg-color
let section_h2 = ["\nsection h2{\n","","","","","","}",];
console.log(section_h2);
// [1][2][3][4]
let section_p = ["\nsection p{\n","","","","","","}",];
console.log(section_p);
// [1][2][3][4]
let footer_h2 = ["\nfooter h2{\n","","","","","","}",];
console.log(footer_h2);
//[1][2][3][4]
let footer_bc = ["\nfooter{\n","","","","","","}",];
console.log(footer_bc);
// [1] bg-color
// _______________________font-family_______________________________

document.getElementById("arial1").addEventListener('click', function(){
let h1_arial = document.querySelectorAll("h1");
for(let i = 0; i < h1_arial.length; i ++){
  h1_arial[i].style.fontFamily = "Arial";
}
h1[1] = "\tfont-family: 'Arial';\n";
});
document.getElementById("times").addEventListener('click', function () {
  let h1_time = document.querySelectorAll("h1");
  for(let i = 0; i < h1_time.length; i ++){
    h1_time[i].style.fontFamily = "Times New Roman";
  }
  h1[1] = "\tfont-family: 'Times New Roman';\n";
});

document.getElementById("verdana").addEventListener('click', function () {
  let h1_verdana = document.querySelectorAll("h1");
  for(let i = 0; i < h1_verdana.length; i ++){
    h1_verdana[i].style.fontFamily = "Verdana";
  }
  h1[1] = "\tfont-family: 'Verdana';\n";
});
// ________________________Font Size______________________

document.getElementById("r1").addEventListener('click', function(){
  let r1 = document.querySelectorAll("h1");
  for(let i = 0; i < r1.length; i++){
    r1[i].style.fontSize = "1rem";
  }
  h1[2] = "\tfont-size: 1rem;\n";
});
document.getElementById("r2").addEventListener('click', function () {
  let r2 = document.querySelectorAll("h1");
  for(let i = 0; i < r2.length; i++){
    r2[i].style.fontSize = "2rem";
  }
  h1[2] = "\tfont-size: 2rem;\n"; //Innehåll
});
document.getElementById("r3").addEventListener('click', function(){
  let r3 = document.querySelectorAll("h1");
  for(let i = 0; i < r3.length; i++){
    r3[i].style.fontSize = "3rem";
  }
  h1[2] = "\tfont-size: 3rem;\n";
});
document.getElementById("r4").addEventListener('click', function () {
  let r4 = document.querySelectorAll("h1");
  for(let i = 0; i < r4.length; i++){
    r4[i].style.fontSize = "4rem";
  }
  h1[2] = "\tfont-size: 4rem;\n";
});

// __________________________Header Border______________________________________
document.getElementById("underline1").addEventListener('click', function(){
  let underline1 = document.querySelectorAll("h1");
  for(let i = 0; i < underline1.length; i++){
  underline1[i].style.textDecoration = "underline";
  }
  h1[3] = "\ttext-decoration: underline;\n";
});
document.getElementById("underline2").addEventListener('click', function(){
  let underline2 = document.querySelectorAll("h1");
  for(let i = 0; i < underline2.length; i++){
  underline2[i].style.textDecoration = "underline wavy";
  }
  h1[3] = "\ttext-decoration: underline wavy;\n";
});
document.getElementById("underline3").addEventListener('click', function(){
  let underline3 = document.querySelectorAll("h1");
  for(let i = 0; i < underline3.length; i++){
  underline3[i].style.textDecoration = "underline double";
  }
  h1[3] = "\ttext-decoration: underline double;\n";
});



// __________________________Navbar font-family______________________________________
document.getElementById("arial2").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Arial";
  }
  nav_anchor[1] = "\tfont-family: 'Arial';\n";
});
document.getElementById("times2").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Times New Roman";
  }
  nav_anchor[1] = "\tfont-family:'Times New Roman';\n"; //Innehåll
});
document.getElementById("verdana2").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontFamily = "Verdana";
  }
  nav_anchor[1] = "\tfont-family:'Verdana';\n";
});
  

//_______________________Navbar size_________________________________
document.getElementById("s12px1").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "12px";
  }
  nav_anchor[2] = "\tfont-size: 12px;\n";
});
document.getElementById("s14px1").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "14px";
  }
  nav_anchor[2] = "\tfont-size: 14px;\n"; //Innehåll
});
document.getElementById("s16px1").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "16px";
  }
  nav_anchor[2] = "\tfont-size: 16px;\n";
});
document.getElementById("s18px1").addEventListener('click', function () {
  let a = document.querySelectorAll("nav a");
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontSize= "18px";
  }
  nav_anchor[2] = "\tfont-size: 18px;\n";
});

// __________________________nav Border______________________________________
document.getElementById("underline4").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for(let i = 0; i < a.length; i++){
    a[i].style.textDecoration = "underline";
  }
  nav_anchor[3] = "\ttext-decoration: underline;\n";
});
document.getElementById("underline5").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for(let i = 0; i < a.length; i++){
    a[i].style.textDecoration = "underline wavy";
  }
  nav_anchor[3] = "\ttext-decoration: underline wavy;\n";
});
document.getElementById("underline6").addEventListener('click', function(){
  let a = document.querySelectorAll("nav a");
  for(let i = 0; i < a.length; i++){
    a[i].style.textDecoration = "underline double";
  }
  nav_anchor[3] = "\ttext-decoration: underline double;\n";
});



//_________________________Main__________________________________________


// _______________________font-family- Main_______________________________

document.getElementById("arial3").addEventListener('click', function(){
  let arial3 = document.querySelectorAll("section h2");
for(let i = 0; i < arial3.length; i ++){
  arial3[i].style.fontFamily = "Arial";
}
  section_h2[1] = "\tfont-family: 'Arial';\n";
});
document.getElementById("times3").addEventListener('click', function () {
  let times3 = document.querySelectorAll("section h2");
for(let i = 0; i < times3.length; i ++){
  times3[i].style.fontFamily = "Times New Roman";
}
  section_h2[1] = "\tfont-family: 'Times New Roman';\n";
});
document.getElementById("verdana3").addEventListener('click', function () {
  let verdana3 = document.querySelectorAll("section h2");
  for(let i = 0; i < verdana3.length; i ++){
    verdana3[i].style.fontFamily = "Verdana";
  }
  section_h2[1] = "\tfont-family: 'Verdana';\n";
});
// ________________________Font Size - Main______________________

document.getElementById("s26px2").addEventListener('click', function(){
  let s26px2 = document.querySelectorAll("section h2");
  for(let i = 0; i < s26px2.length; i ++){
    s26px2[i].style.fontSize = "26px";
  }
  section_h2[2] = "\tfont-size: 26px;\n";
});
document.getElementById("s28px2").addEventListener('click', function () {
  let s28px2 = document.querySelectorAll("section h2");
  for(let i = 0; i < s28px2.length; i ++){
    s28px2[i].style.fontSize = "28px";
  }
  section_h2[2] = "\tfont-size: 28px;\n"; //Innehåll
});
document.getElementById("s30px2").addEventListener('click', function(){
  let s30px2 = document.querySelectorAll("section h2");
  for(let i = 0; i < s30px2.length; i ++){
    s30px2[i].style.fontSize = "30px";
  }
  section_h2[2] = "\tfont-size: 30px;\n";
});
document.getElementById("s32px2").addEventListener('click', function () {
  let s32px2 = document.querySelectorAll("section h2");
  for(let i = 0; i < s32px2.length; i ++){
    s32px2[i].style.fontSize = "32px";
  }
  section_h2[2] = "\tfont-size: 32px;\n";
});

// __________________________Main Border headline ______________________________________
document.getElementById("underline7").addEventListener('click', function(){
  let underline7 = document.querySelectorAll("section h2");
  for(let i = 0; i < underline7.length; i++){
    underline7[i].style.textDecoration = "underline";
  }
  section_h2[3] = "\ttext-decoration: underline;\n";
});
document.getElementById("underline8").addEventListener('click', function(){
  let underline8 = document.querySelectorAll("section h2");
  for(let i = 0; i < underline8.length; i++){
    underline8[i].style.textDecoration = "underline wavy";
  }
  section_h2[3] = "\ttext-decoration: underline wavy;\n";
});
document.getElementById("underline9").addEventListener('click', function(){
  let underline9 = document.querySelectorAll("section h2");
  for(let i = 0; i < underline9.length; i++){
    underline9[i].style.textDecoration = "underline double";
  }
  section_h2[3] = "\ttext-decoration: underline double;\n";
});

// _______________________Main <p>_________________________________

// _______________________font-family_______________________________

document.getElementById("arial4").addEventListener('click', function(){
  let arial4 = document.querySelectorAll("section p");
for(let i = 0; i < arial4.length; i ++){
  arial4[i].style.fontFamily = "Arial";
}
  section_p[1] = "\tfont-family: 'Arial';\n";
});
document.getElementById("times4").addEventListener('click', function () {
  let times4 = document.querySelectorAll("section p");
  for(let i = 0; i < times4.length; i ++){
    times4[i].style.fontFamily = "Times New Roman";
  }
  section_p[1] = "\tfont-family: 'Times New Roman';\n";
});
document.getElementById("verdana4").addEventListener('click', function () {
  let verdana4 = document.querySelectorAll("section p");
  for(let i = 0; i < verdana4.length; i ++){
    verdana4[i].style.fontFamily = "Verdana";
  }
  section_p[1] = "\tfont-family: 'Verdana';\n";
});
// ________________________Font Size______________________

document.getElementById("s12px3").addEventListener('click', function(){
  let s12px3 = document.querySelectorAll("section p");
  for(let i = 0; i < s12px3.length; i ++){
    s12px3[i].style.fontSize = "12px";
  }
  section_p[2] = "\tfont-size: 12px;\n";
});
document.getElementById("s14px3").addEventListener('click', function () {
  let s14px3 = document.querySelectorAll("section p");
  for(let i = 0; i < s14px3.length; i ++){
    s14px3[i].style.fontSize = "14px";
  }
  section_p[2] = "\tfont-size: 14px;\n"; //Innehåll
});
document.getElementById("s16px3").addEventListener('click', function(){
  let s16px3 = document.querySelectorAll("section p");
  for(let i = 0; i < s16px3.length; i ++){
    s16px3[i].style.fontSize = "16px";
  }
  section_p[2] = "\tfont-size: 16px;\n";
});
document.getElementById("s18px3").addEventListener('click', function () {
  let s18px3 = document.querySelectorAll("section p");
  for(let i = 0; i < s18px3.length; i ++){
    s18px3[i].style.fontSize = "18px";
  }
  section_p[2] = "\tfont-size: 18px;\n";
});

// __________________________Main Border Plain text ______________________________________

document.getElementById("underline10").addEventListener('click', function(){
  let underline10 = document.querySelectorAll("section p");
  for(let i = 0; i < underline10.length; i++){
    underline10[i].style.textDecoration = "underline";
  }
  section_p[3] = "\ttext-decoration: underline;\n";
});
document.getElementById("underline11").addEventListener('click', function(){
  let underline11 = document.querySelectorAll("section p");
  for(let i = 0; i < underline11.length; i++){
    underline11[i].style.textDecoration = "underline wavy";
  }
  section_p[3] = "\ttext-decoration: underline wavy;\n";
});
document.getElementById("underline12").addEventListener('click', function(){
  let underline12 = document.querySelectorAll("section p");
  for(let i = 0; i < underline12.length; i++){
    underline12[i].style.textDecoration = "underline double";
  }
  section_p[3] = "\ttext-decoration: underline double;\n";
});


//_______________________Footer______________________

// _______________________font-family_______________________________

document.getElementById("arial5").addEventListener('click', function(){
  let arial5 = document.querySelectorAll("footer h2");
for(let i = 0; i < arial5.length; i ++){
  arial5[i].style.fontFamily = "Arial";
}
  footer_h2[1] = "\tfont-family: 'Arial';\n";
});
document.getElementById("times5").addEventListener('click', function () {
  let times5 = document.querySelectorAll("footer h2");
  for(let i = 0; i < times5.length; i ++){
    times5[i].style.fontFamily = "Times New Roman";
  }
  footer_h2[1] = "\tfont-family: 'Times New Roman';\n";
});
document.getElementById("verdana5").addEventListener('click', function () {
  let verdana5 = document.querySelectorAll("footer h2");
  for(let i = 0; i < verdana5.length; i ++){
    verdana5[i].style.fontFamily = "Verdana";
  }
  footer_h2[1] = "\tfont-family: 'Verdana';\n";
});
// ________________________Font Size______________________

document.getElementById("s26px4").addEventListener('click', function(){
  let s26px4 = document.querySelectorAll("footer h2");
  for(let i = 0; i < s26px4.length; i ++){
    s26px4[i].style.fontSize = "26px";
  }
  footer_h2[2] = "\tfont-size: 26px;\n";
});
document.getElementById("s28px4").addEventListener('click', function () {
  let s28px4 = document.querySelectorAll("footer h2");
  for(let i = 0; i < s28px4.length; i ++){
    s28px4[i].style.fontSize = "28px";
  }
  footer_h2[2] = "\tfont-size: 28px;\n"; //Innehåll
});
document.getElementById("s30px4").addEventListener('click', function(){
  let s30px4 = document.querySelectorAll("footer h2");
  for(let i = 0; i < s30px4.length; i ++){
    s30px4[i].style.fontSize = "30px";
  }
  footer_h2[2] = "\tfont-size: 30px;\n";
});
document.getElementById("s32px4").addEventListener('click', function () {
  let s32px4 = document.querySelectorAll("footer h2");
  for(let i = 0; i < s32px4.length; i ++){
    s32px4[i].style.fontSize = "32px";
  }
  footer_h2[2] = "\tfont-size: 32px;\n";
});

// __________________________Footer Border ______________________________________
document.getElementById("underline13").addEventListener('click', function(){
  let underline13 = document.querySelectorAll("footer h2");
  for(let i = 0; i < underline13.length; i++){
    underline13[i].style.textDecoration = "underline";
  }
  footer_h2[3] = "\ttext-decoration: underline;\n";
});
document.getElementById("underline14").addEventListener('click', function(){
  let underline14 = document.querySelectorAll("footer h2");
  for(let i = 0; i < underline14.length; i++){
    underline14[i].style.textDecoration = "underline wavy";
  }
  footer_h2[3] = "\ttext-decoration: underline wavy;\n";
});
document.getElementById("underline15").addEventListener('click', function(){
  let underline15 = document.querySelectorAll("footer h2");
  for(let i = 0; i < underline15.length; i++){
    underline15[i].style.textDecoration = "underline double";
  }
  footer_h2[3] = "\ttext-decoration: underline double;\n";
});

//--------------------------Reset----------------------------------------
document.getElementById("reset").addEventListener('click',function(){
  location.reload()});





                                    /*color*/
let color;
let color2;
let color3;
let color4;
let color_bg_header;
let color_bg_nav;
let color_bg_main;
let color_bg_footer;
let color5;
                                   
                                   
let defaultColor = "#ffffff";
                                   
window.addEventListener("load", start, false);
window.addEventListener("load", start2, false);
window.addEventListener("load", start3, false);
window.addEventListener("load", start4, false);
window.addEventListener("load", start5, false);
window.addEventListener("load", start6, false);
window.addEventListener("load", start7, false);
window.addEventListener("load", start8, false);
window.addEventListener("load", start9, false);
                                   
function start() {
color = document.querySelector("#color_h1");
color.value = defaultColor;
color.addEventListener("input", updateFirst, false);
color.select(); // Om webbläsare inte har stöd för colorpicker
}
function start2() {
    color2 = document.querySelector("#color_nav");
    color2.value = defaultColor;
    color2.addEventListener("input", updateFirst2, false);
    color2.select();
}

function start3() {
    color3 = document.querySelector("#color_main");
    color3.value = defaultColor;
    color3.addEventListener("input", updateFirst3, false);
    color3.select();

}
                                   

function start4() {

    color4 = document.querySelector("#color_footer");
    color4.value = defaultColor;
    color4.addEventListener("input", updateFirst4, false);
    color4.select();

}

function start5() {

    color_bg_header = document.querySelector("#bg_header");
    color_bg_header.value = defaultColor;
    color_bg_header.addEventListener("input", updateFirst5, false);
    color_bg_header.select();

}

function start6() {

    color_bg_nav = document.querySelector("#bg_nav");
    color_bg_nav.value = defaultColor;
    color_bg_nav.addEventListener("input", updateFirst6, false);
    color_bg_nav.select();

}

function start7() {

    color_bg_main = document.querySelector("#bg_main");
    color_bg_main.value = defaultColor;
    color_bg_main.addEventListener("input", updateFirst7, false);
    color_bg_main.select();

}
function start8() {                                 
color_bg_footer = document.querySelector("#bg_footer");
color_bg_footer.value = defaultColor;
color_bg_footer.addEventListener("input", updateFirst8, false);
color_bg_footer.select();                               
}

function start9() {                                 
color5 = document.querySelector("#color_text");
color5.value = defaultColor;
color5.addEventListener("input", updateFirst9, false);
color5.select();                                
}
                                    
                                   
function updateFirst(event) {
let header_text = document.querySelectorAll("h1");
for(let i= 0; i < header_text.length; i++){
  header_text[i].style.color = event.target.value;
}
h1[4] = "\tcolor:"+ event.target.value+";\n";
}
                                   
function updateFirst2(event) {
let nav = document.querySelectorAll("nav a");
for(let i = 0; i < nav.length; i++){
nav[i].style.color = event.target.value;
}          
nav_anchor[4] = "\tcolor:"+event.target.value+";\n";                               
}
                                   
function updateFirst3(event) {
let main = document.querySelectorAll("section h2");
for(let i = 0; i < main.length; i++){
  main[i].style.color = event.target.value;
}
section_h2[4] = "\tcolor:"+ event.target.value+";\n";    
}
                                   
function updateFirst4(event) {
let foter = document.querySelectorAll("footer h2");
for(let i = 0; i < foter.length; i++)
foter[i].style.color = event.target.value;
footer_h2[4] = "\tcolor:"+event.target.value+";\n";
}
                                   
function updateFirst5(event) {
let bg_header = document.querySelectorAll("header");
for(let i = 0; i < bg_header.length; i++){
  bg_header[i].style.backgroundColor = event.target.value;
}
header[1] = "\tbackground-color:"+event.target.value+";\n";      
}

function updateFirst6(event) {
let bg_nav = document.querySelectorAll("nav");
for(let i = 0; i < bg_nav.length; i++){
  bg_nav[i].style.backgroundColor = event.target.value;
}
nav_bc[1] = "\tbackground-color:"+event.target.value+";\n";                      
}
                                   
function updateFirst7(event) {
let bg_main = document.querySelectorAll("section");
for(let i = 0; i < bg_main.length; i++){
  bg_main[i].style.backgroundColor = event.target.value;
}
section_bc[1] = "\tbackground-color:"+event.target.value+";\n";
}
                                   
function updateFirst8(event) {
let bg_footer = document.querySelectorAll("footer");
for(let i = 0; i < bg_footer.length; i++){
  bg_footer[i].style.backgroundColor = event.target.value;
}
footer_bc[1] = "\tbackground-color:"+event.target.value+";\n";
}

function updateFirst9(event) {
let color_text = document.querySelectorAll("section p");
for(let i = 0; i < color_text.length; i++){
  color_text[i].style.color = event.target.value;
}
section_p[4] = "\tcolor:"+event.target.value+";\n";
}



 // -------------------Preview 1-----------------------------------
    

  let style1 = new Object();
  
  style1.body1 = "\nbody {\nwidth: 100%;\ndisplay: inline-block;\nwidth: 100%;\nmargin: 0 auto;\npadding: 0;\nbox-sizing: border-box;\n}";
  style1.h1h2 = "\nh1,h2{\nmargin: 0;\npadding: 30px 0;\ntext-align: center;\n}";
  style1.nav = "\nnav{\ndisplay: flex;\njustify-content: space-around;\nborder-bottom: 1px solid black;\nborder-bottom: 90%;\nwidth: 100%;\npadding: 30px 0;\n}";
  style1.nav_a = "\nnav > a{\ntext-decoration: none; \ncolor: black;\n}";
  style1.container_one_header = "\n.container-one header{\nmargin: 0 5%;\nwidth: 90%;\n}";
  style1.section = "\nsection{\nwidth: 90%;\npadding-bottom: 2%;\nmargin: auto;\n}";
  style1.p = "\np{\nwidth: 70%;\nmargin: auto;\nline-height: 2em;\nmargin-bottom: 2%;\n}";
  style1.footer = "\nfooter{\nborder-top: 1px solid black;\nwidth: 90%;\nmargin: 0 auto;\n}";
  style1.info = function(){
    return(this.body1 + "\n" + this.h1h2 +"\n" + this.nav + "\n" + this.nav_a + "\n" + this.container_one_header + "\n" + this.section + "\n" + this.p + "\n" + this.footer );
  };


// //------------------------preview 2----------------------------
let style2 = new Object();

  style2.body1 = "\nbody {\nwidth: 100%;\ndisplay: inline-block;\nwidth: 100%;\nmargin: 0 auto;\npadding: 0;\nbox-sizing: border-box;\n}";
  style2.h1h2 = "\nh1,h2{\nmargin: 0;\npadding: 30px 0;\ntext-align: center;\n}";
  style2.nav = "\nnav{\ndisplay: flex;\njustify-content: space-around;\nborder-bottom: 1px solid black;\nborder-bottom: 90%;\nwidth: 100%;\npadding: 30px 0;\n}";
  style2.nav_a = "\nnav > a{\ntext-decoration: none; \ncolor: black;\n}";
  style2.container_one_header = "\n.container-one header{\nmargin: 0 5%;\nwidth: 90%;\n}";
  style2.section = "\nsection{\nwidth: 90%;\npadding-bottom: 2%;\nmargin: auto;\n}";
  style2.p = "\np{\nwidth: 70%;\nmargin: auto;\nline-height: 2em;\nmargin-bottom: 2%;\n}";
  style2.footer = "\nfooter{\nborder-top: 1px solid black;\nwidth: 90%;\nmargin: 0 auto;\n}";
  style2.container_header = "\n.container-header{\ndisplay: flex;\nflex-direction: row;\n}";
  style2.navigering = "\n.navigering{\njustify-content: space-around;\npadding: 40px 0;\nborder-bottom:  none;\n}"; 
    
  style2.info = function(){
    return(this.body1 + "\n" + this.h1h2 +"\n" + this.nav + "\n" + this.nav_a + "\n" + this.container_one_header + "\n" + this.section + "\n" + this.p + "\n" + this.footer + "\n" + this.container_header + "\n" + this.navigering);
  };
  
  //-----------------------Preview 3 ----------------------------------

    let style3 = new Object();
    
    style3.body1 = "\nbody {\nwidth: 100%;\ndisplay: inline-block;\nwidth: 100%;\nmargin: 0 auto;\npadding: 0;\nbox-sizing: border-box;\n}";
    style3.h1h2 = "\nh1,h2{\nmargin: 0;\npadding: 30px 0;\ntext-align: center;\n}";
    style3.nav = "\nnav{\ndisplay: flex;\njustify-content: space-around;\nborder-bottom: 1px solid black;\nborder-bottom: 90%;\nwidth: 100%;\npadding: 30px 0;\n}";
    style3.nav_a = "\nnav > a{\ntext-decoration: none; \ncolor: black;\n}";
    style3.container_one_header = "\n.container-one header{\nmargin: 0 5%;\nwidth: 90%;\n}";
    style3.section = "\nsection{\nwidth: 90%;\npadding-bottom: 2%;\nmargin: auto;\n}";
    style3.p = "\np{\nwidth: 70%;\nmargin: auto;\nline-height: 2em;\nmargin-bottom: 2%;\n}";
    style3.footer = "\nfooter{\nborder-top: 1px solid black;\nwidth: 90%;\nmargin: 0 auto;\n}";
    style3.container_header = "\n.container-header{\ndisplay: flex;\nflex-direction: row;\n}";
    style3.navigering = "\n.navigering{\njustify-content: space-around;\npadding: 40px 0;\nborder-bottom:  none;\n}"; 
    style3.container_three = "\n.container-three{\nwidth: 90%;\nmargin: 0 auto;\n}";
    style3.nav_3 = "\n#nav3{\norder: -1;\n}";
    style3.container_three_footer = "\n.container-three footer{\nwidth: 100%;\n}";
    style3.header_3 = "\n#header3{\ndisplay: flex;\ntext-align: center;\n}";
    style3.main_3 = "\n#main3{\display: flex;\nflex-direction: row;\ntext-align: center;\nwidth: 100%;\}";
    style3.container_3 = "\n.container3{\nwidth: 50%;\n}";
    style3.container_picture = "\n#container-pictures{\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nwidth: 100%;\nmargin: 50px auto;\n}";
    style3.info = function(){
      return(this.body1 + "\n" + this.h1h2 +"\n" + this.nav + "\n" + this.nav_a + "\n" + this.container_one_header + "\n" + this.section + "\n" + this.p + "\n" + this.footer + "\n" + this.container_header + "\n" + this.navigering + "\n" + this.container_three + "\n" + this.nav_3 + "\n" + this.container_three_footer + "\n" + this.header_3 + "\n" + this.main_3 + "\n" + this.container_3 + "\n" + this.container_picture);
    };





//__________________Download function__________________________

let btn = document.getElementById("dwnld");
btn.addEventListener('click', function() {
  let ipt = ["/*------------------------Layout1-----------------------------*/"+(header.concat(style1.info(),h1,nav_bc,nav_anchor,section_bc,section_h2,section_p,footer_bc,footer_h2).join(""))+"\n/*------------------------Layout2-----------------------------*/"+(header.concat(style2.info(),h1,nav_bc,nav_anchor,section_bc,section_h2,section_p,footer_bc,footer_h2).join(""))+ "\n/*------------------------Layout3-----------------------------*/"+(header.concat(style3.info(),h1,nav_bc,nav_anchor,section_bc,section_h2,section_p,footer_bc,footer_h2).join(""))];
  let file1 = new Blob([ipt], {type: "text/css; charset=utf-8}"});  //constructor([innehåll] , {typ: texts som html})
  console.log(file1);
  let a = document.getElementById("a");
  a.href = URL.createObjectURL(file1); //href="blob:null/8c7a0f22-53b8-440a-99c9-480a3f5e5cf4"
  a.download = "style.css"; // "style.css"
});

 

