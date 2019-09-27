let datos = [10,9,8,10,9];

function suma_promedio(sp){
let suma = 0;
let pro;

for (let i = 0; i < sp.length; i++){
    suma = sp[i]  + suma;

}

pro = suma/sp.length;

console.log("la suma es:" +suma+ "el primedio es" +pro);
}