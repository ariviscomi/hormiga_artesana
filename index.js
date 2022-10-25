//* ========================= Menu hamburguesa: ========================= *//

let menu = document.querySelector('.menu_icon');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})

//! ============================================= Funciones ============================================= !//

const vectorCero = (vector,initial) => {

    for (let i = 0; i < initial; i++) {
    
        vector[i] = 0;
    }
    
    let j;
    
    for (let i = 0; i < initial; i++) {
    
        j = i + 1;
        console.log("elemento " + j + ": " + vector[i]);
    }
}

const iniciarSesion = () =>{
    let nombre, salida;
    
    alert("Para continuar inicie sesion!");
    
    do{
        nombre= prompt("Ingrese su nombre:");

        if((nombre != "") && ((nombre.toLowerCase()==="ariel") || (nombre.toLowerCase()==="damian") || (nombre.toLowerCase()==="florencia") || (nombre.toLowerCase()==="valentina"))){
    
            alert("Bienvenid@" + nombre + "!!");
            salida=false;
        }
        else if(nombre == ""){
            alert("No ingresaste ningun nombre!");
            salida=true;            
        }
        else{
            alert("No existe un usuario con ese nombre!");
            salida=true;
        }
    
    }while(salida)

    return nombre
}

const validarProd = (prod,stock,indice) => {

    if((prod>0 && prod<=indice) && (stock[prod-1] > 0) ){
        return true;
    }
    else{
        return false;
    }

}

const listarProd = (vector) => {

    let lista = "Su Compra fue de:\n";
    
    if (vector[0] > 0) {

        lista = lista + "\n    Mate diseño montaña: x" + vector[0];
    }
    
    if (vector[1] > 0) {
    
        lista = lista + "\n    Mate diseño MapaMundi: x" + vector[1];
    }
    
    if (vector[2] > 0) {
    
        lista = lista + "\n    Mate equipo de futbol: x" + vector[2];
    }
    
    if (vector[3] > 0) {
    
        lista = lista + "\n    Mate Mandala: x" + vector[3];
    }    

    return lista;
}

//? ============================================= Variables ============================================= ?//

let continuar = true;                          	//Condicion de salida del ciclo
let carrito = 0, prod, decision;               	//Variables enteras
let vProductos = [1000, 1500, 2000, 1600];     	//Vector de precios de productos
let vStock = [5,2,0,7];							//Stock de productos
let vContador = [];                            	//Contador de productos agregados al carrito

vectorCero(vContador,4);                       	//Inicia en cero el contenido del vector
console.log("cantidad comprada:",vContador);

//* ========================================= Carrito de Compra ========================================= *//

const nombre = iniciarSesion();

while (continuar === true) {

    do {
        prod = parseInt(prompt(`Seleccione un producto para agregar al carrito:\n    1.Mate diseño montaña\n    2.Mate diseño MapaMundi\n    3.Mate equipo de futbol\n    4.Mate Mandala`));

        if (validarProd(prod,vStock,4)) {

            carrito += vProductos[prod - 1];
			vContador[prod - 1] = vContador[prod - 1] + 1;
			vStock[prod-1] = vStock[prod-1] - 1;

			console.log("cantidad comprada:",vContador);
			console.log("stock:",vStock);
        }
        else {
            alert("No tenemos ese producto!");

			do {
				decision = parseInt(prompt(nombre + ", Desea seguir comprando?\n    1=Si;\n    2=No"))
		
				if (decision != 2 && decision != 1) {
					alert("No entendi tu respuesta!")
				}
		
			} while (decision != 2 && decision != 1);

			if(decision === 2){
				alert("Gracias!, Vuelvas prontos ;D");
				break;
			}
        }

    } while (!validarProd(prod,vStock,4));


    alert(nombre + ", \n    Su Carrito vale: $" + carrito);

    do {
        decision = parseInt(prompt(nombre + ", Desea seguir comprando?\n    1=Si;\n    2=No"))

        if (decision != 2 && decision != 1) {
            alert("No entendi tu respuesta!")
        }

    } while (decision != 2 && decision != 1);

    if (decision === 2) {
        continuar = false;
    }
}

alert(nombre + ",\nGracias por su compra!\n" + listarProd(vContador) + "\n\nEl Total fue de: $" + carrito);