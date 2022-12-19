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

//* ====> CARRITO

let CART = [];

const prodContainer = document.getElementById("prod_Container");

PRODS.forEach(prod_ => {

	let content = document.createElement("div")
	content.className = "prod_Card boxPointer"
	content.innerHTML = `
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
		</div>`

		const prodBtn = document.createElement("button")
		prodBtn.innerText = "Agregar al Carrito";
		prodBtn.className = "btn_solid";
	
		content.append(prodBtn);

	prodContainer.append(content) 

	prodBtn.addEventListener("click",() =>{
		CART.push({
			id: prod_.id,
			title: prod_.title,
			img: prod_.img,
			desc: prod_.desc,
			price: prod_.price
			
		})
		console.log(CART)
		localStorage.setItem("CART",JSON.stringify(CART))
	})
});

const btnCart = document.getElementById("btn_cart")
const cartItem = document.getElementById("cart_item")

btnCart.addEventListener("click",()=>{

	const CART_ = JSON.parse(localStorage.getItem("CART"));

	if (CART_ == undefined) {

		cartItem.innerHTML = `
		<span>Aun no hay nada en el carrito.</span>`

	} else {

		cartItem.innerHTML = "";
		
		CART_.forEach((prod) => {
			let prodCart = document.createElement("div")
			prodCart.className = "prodCart"
			prodCart.innerHTML = `
				<div class="cartImg">
					<img src="${prod.img}"></img>
				</div>
				<div class="cartTitle">
					<span>${prod.title}</span>
				</div>
				<div class="cartPrice">
					<span>$ ${prod.price}</span>
				</div>
			`
			cartItem.append(prodCart);

		})
	}

})