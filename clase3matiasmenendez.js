/*Romina practica tiro al blanco con su gomera y se encuentra frente a 2 objetivos, un arbol a 30 km y una columna a 20 km (con un obstaculo a mitad de camino).
Este simulador teniendo en cuenta que Romina dispara a una velocidad de 2 km por segundo la ayudara a saber cuantos kilometros le faltan al proyectil 
para llegar al blanco */

let objetivo = prompt ('Dispararle al arbol o a la columna')

if (objetivo == "arbol"){
    alert('la distancia es de 30km');
    for (let i=30;i>=0;i-=2){
        alert(i)
        if (i===0){
        alert('El proyectil dio en el arbol')}
    }    
}

else if (objetivo == "columna"){
    alert('la distancia es de 20km');
    for (let i=20;i>=0;i-=2){
        alert(i)
        if (i===10) {
            alert('el proyectil dio contra el obstaculo');
            break;
        }
    }    
}