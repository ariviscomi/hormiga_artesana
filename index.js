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
	constructor(userId, userName, userPassword, userCart) {
		this.id = userId;
		this.name = userName;
		this.pass = userPassword;
		this.cart = userCart
	}
}

const user0 = new user(0,"Ariel", "hola","void");
const user1 = new user(1,"Profesor","Coder2022","void");

const USERS = [
	user0,
	user1
]

const singInBtn = document.getElementById("singIn_btn")
const mainIndex = document.getElementById("main_index")

singInBtn.onclick = () =>{

	mainIndex.innerHTML += `
		<section id="singIn">
			<div id="singIn_container">
				<h2>
					Iniciar Sesion
				</h2>
				<form id="singIn_form" method="get">
					<ul id="form_contain">
						<li>
							<span>Tu usuario:</span>
							<input type="text" name="usname" id="usname" placeholder="username">
						</li>
						<br>
						<li>
							<span>Tu contraseña:</span>
							<input type="password" name="uspass" id="uspass" placeholder="password">
						</li>
					</ul>
					<div id="form_btn">
						<input id="form_submit" class="btn_solid" type="submit" value="Entrar">
						<input id="form_cancel" class="btn_clear" type="button" value="Cancelar">
					</div>
				</form>
			</div>
		</section>
	`

	let formsubmit = document.getElementById("form_submit")
	let cancel = document.getElementById("form_cancel")
	let singin = document.getElementById("singIn")

	cancel.onclick = () =>{
		singin.remove();
	}
	
	const input_username = document.getElementById("usname")
	const input_userpass = document.getElementById("uspass")

	
	formsubmit.onclick = () =>{
		
		
		USERS.forEach(user_ => {
			if(user_.name === input_username.value && user_.pass === input_userpass)
			{
				let USUARIO = JSON.stringify(user_)		
				localStorage.setItem("USUARIO",USUARIO);
				console.log(USUARIO)
				console.log(input_username.value)
			}
		})
	}
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
	
	addToCart(){
		
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
			
			<button id="prodBtn${prod_.id}" class="btn_solid prodBtn">
				Agregar al Carrito
			</button>
		</div>
	`
})

//* CARRITO

let CART =[];
