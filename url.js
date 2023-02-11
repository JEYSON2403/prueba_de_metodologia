let url= prompt("ingresar la url")


let res="";
let posIni=0;
let posFin=0;


for( let i=0; i<url.length; i++){

    if( url.substring(i,i+2) === "d/") {
        posIni=i+2;
    }

    if(url.substring(i,i+2)=== "/v"){
            posFin=i;

    }
}

res = url.substring(posIni,posFin);
console.log("resultado del string:"+ res);

let doc= document.createElement("img");
let cadena= `https://drive.google.com/uc?export=view&id=`+ res;


console.log("resultad de string:" +res+ "url completa:"+ cadena);

doc.src= cadena;
let d = document.getElementById("ruta");
d.appendChild (doc)