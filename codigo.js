lala = localStorage.getItem("");
addi = localStorage.getItem("lol");
console.log(lala);
console.log(addi);
document.getElementById("numero1").innerHTML = poker;
document.getElementById("numero2").innertext = ";)";
puntos = 0;
punto = 0;
document.getElementById("cel").innerHTML = puntos;
document.getElementById("lugar").innerHTML = punto;
function on(){
    bri=document.getElementById("sol").value;
    bonzo=document.getElementById("luna").value;
    localStorage.setItem("bri",bri);
    localStorage.setItem("bonzo",bonzo);
    window.location="respuesta.html";
 }