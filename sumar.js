
document.getElementById("sumar").addEventListener("click", function(){
    let numeroA =document.getElementById("numero1").value;

    console.log (`el valor del numero A es: ${numeroA}`);
        let numeroB =document.getElementById("numero2").value;
    console.log (`el valor del numero b es: ${numeroB}`);
    let resultadoo = sumar(parseFloat(numeroA), parseFloat (numeroB));
    console.log ("el resultado es:"+resultadoo);

    document.getElementById("resultadoo").innerHTML= resultadoo;
    document.getElementById("algores").style.display="block";
});
   
function sumar (a,b){
return a+b;
}

document.getElementById("multiplicas").addEventListener("click", function(){

    let numeroC=document.getElementById("numero3").value;
    console.log (`el valor del numero C es: ${numeroC}`);

    let numeroD=document.getElementById("numero4").value;
    console.log (`el valor del numero D es: ${numeroD}`);
    let resultado1 = multiplicar(parseInt(numeroC), parseInt (numeroD));
    console.log ("el resultado es:"+resultado1);

    document.getElementById("resultado1").innerHTML= resultado1;
    document.getElementById("algomul").style.display="block";
});
   
function multiplicar (c,d){
return c*d;
}
