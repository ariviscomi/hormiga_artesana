//* ====> Menu Hamburguesa

const toggleButton = document.getElementById("button_menu");
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
	toggleButton.classList.toggle("close");
	navWrapper.classList.toggle("show");
});

navWrapper.addEventListener("click", e => {
	if (e.target.id === "nav") {
		navWrapper.classList.remove("show");
		toggleButton.classList.remove("close");
	}
});

//* ====> Objetos

class user {
	constructor(userName, userPassword, userCart) {
		this.name = userName;
		this.pass = userPassword;
		this.cart = userCart;
		this.saludo = function () { alert("Bienveni@\n            " + this.name) };
	}
}

const user1 = new user("Florencia", "Flor.2022", 0);
const user2 = new user("Ariel", "Contraseña123", 0);
const user3 = new user("Profesor", "Coder123", 0);

const USERS = [
	user1,
	user2,
	user3
];

class product {
	constructor(id, title, description, price, stock) {
		this.id = id;
		this.title = title;
		this.desc = description;
		this.price = price;
		this.stock = stock;
	}
}

const prod1 = new product(1, "Mate Montañas", "Mate de algarrobo con diseño de montañas", 500, 4);
const prod2 = new product(2, "Mate Futbol", "Mate de algarrobo con escudo de equipo de futbol a eleccion", 600, 7);
const prod3 = new product(3, "Mate Clean", "Mate de algarrobo barnizado al natural", 400, 5);
const prod4 = new product(4, "Mate Minimal", "Mate de algarrobo con diseño minimalista", 450, 8);
const prod5 = new product(5, "Mate Mandala", "Mate de algarrobo con diseño de Mandalas", 500, 7);
const prod6 = new product(6, "Mate Pets", "Mate de algarrobo con diseño de tu mascota", 650, 3);

const PRODS = [
	prod1,
	prod2,
	prod3,
	prod4,
	prod5,
	prod6
];

const searchObj = (objList, element, attr) => {	//Buscar Objetos en una lista
	let e, found = null;
	for (let i = 0; i < objList.length; i++) {
		e = objList[i];
		if (element === e[attr]) {
			found = e;
			console.log(found);
			break;
		}
	}
	return found;
}

//* ====> Iniciar sesion

function logIn() {

	let notApproved, dat, us;

	alert("Debes iniciar sesion primero!");
	do {
		notApproved = false
		dat = prompt("Pon tu usuario:");
		us = searchObj(USERS, dat, "name")
		if (us === null) {
			notApproved = true;
			alert("No Existe un usuario con este nombre!");
		}
	} while (notApproved)

	do {
		notApproved = false
		dat = prompt(us.name + "\n    Por favor, pon tu contraseña:");

		if (us.pass != dat) {
			notApproved = true;
			alert("Contraseña incorrecta!");
		}
	} while (notApproved)

	us.saludo;
	return us;
}

const us = logIn();

//* ====> Productos

const prodContainer = document.getElementById("prod_Container");

PRODS.forEach(prod_ => {

	prodContainer.innerHTML += `
		<div id="prod${prod_.id}" class="prod_Card boxPointer">	
			<div>
				<h3>${prod_.title}</h3>
			</div>
			
			<div>
				<img src="./images/mate.jpg" alt="Imagen del producto">
			</div>
			
			<div>
				<p>${prod_.desc}</p>
			</div>
			
			<div>
				<span>Precio: $${prod_.price}</span>
				<span><br>Aun quedan: ${prod_.stock}</span>
			</div>
			
			<button id="prodBtn${prod_.id}" class="btn_solid">
				Agregar al Carrito
			</button>
		</div>
	`
})
