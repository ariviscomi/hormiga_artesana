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

/* Inicio de sesion. Aun no esta habilitado

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

const singUp = document.getElementById("singUp")
*/

const prodContainer = document.getElementById("prod_Container");

let CART = [];

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
			
			<button id="prodBtn" class="btn_solid prodBtn">
				Agregar al Carrito
			</button>
		</div>
	`

	let prodBtn = document.getElementById("prodBtn");

	prodBtn.onclick = () => {
		CART.push({
			id: prod_.id,
			title: prod_.title,
			img: prod_.img,
			desc: prod_.desc,
			price: prod_.price
		})
	}
})

let boton = document.createElement("button")
boton.innerText = "BOTON"

console.log(CART)