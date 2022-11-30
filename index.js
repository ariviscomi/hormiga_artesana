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
	}
}

const singIn = document.getElementById("singIn")

singIn.onclick = () =>{
	
	let n = prompt("Ingresa tu usuario:")
	let p = prompt("Ingresa contraseña:")
	const Usuario = new user(n,p)

	const usName = document.getElementsByClassName("usName")
	let usMsg = document.getElementsByClassName("usMsg")
	let usBtn = document.getElementsByClassName("usBtn")

	usName[0].innerText = `Bienvenide ${Usuario.name} ♥`
	usMsg[0].remove()
	usBtn[0].remove()
}

class product {
	constructor(id, title, image, description, price, stock) {
		this.id = id;
		this.title = title;
		this.img = image;
		this.desc = description;
		this.price = price;
		this.stock = stock;
	}
}

const prod1 = new product(1, "Mate Montañas", "./images/montaña.jpeg","Mate de algarrobo con diseño de montañas", 500, 4);
const prod2 = new product(2, "Mate Futbol", "./images/futbol.jpeg","Mate de algarrobo con escudo de equipo de futbol a eleccion", 600, 7);
const prod3 = new product(3, "Mate Argento", "./images/argentina.jpeg","Mate de algarrobo con motivo de Argentina", 400, 5);
const prod4 = new product(4, "Mate Minimal","./images/minimal.jpeg", "Mate de algarrobo con diseño minimalista", 450, 8);
const prod5 = new product(5, "Mate Mandala","./images/mandala.jpeg", "Mate de algarrobo con diseño de Mandalas", 500, 7);
const prod6 = new product(6, "Mate Pets", "./images/pets.jpeg", "Mate de algarrobo con diseño de tu mascota", 650, 3);

const PRODS = [
	prod1,
	prod2,
	prod3,
	prod4,
	prod5,
	prod6
];

const singUp = document.getElementById("singUp")

//* ====> Productos

const prodContainer = document.getElementById("prod_Container");

PRODS.forEach(prod_ => {

	prodContainer.innerHTML += `
		<div id="prod${prod_.id}" class="prod_Card boxPointer">	
			<div>
				<h3>${prod_.title}</h3>
			</div>
			
			<div>
				<img src="${prod_.img}">
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

//* CARRITO

const Carrito = [];

const prodBtn = document.getElementById('prod1')

prodBtn.onclick = () =>{
	console.log("Producto agregado al carrito")
}