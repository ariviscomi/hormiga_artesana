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

//TODO ====> INICIO DE SESION

//* ====> CARRITO

let CART = [];

const btnCart = document.getElementById("btn_cart")
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

	prodBtn.addEventListener("click", () => {
		CART.push({
			id: prod_.id,
			title: prod_.title,
			img: prod_.img,
			desc: prod_.desc,
			price: prod_.price,
			stock: prod_.stock
		});
		
		console.log(CART)
		
		let cartCont = document.getElementById("cartcont");
		if(CART.length){cartCont.innerText = `${CART.length}`}else{cartCont.remove();}

		localStorage.setItem("CART", JSON.stringify(CART))
	})
});

const cartItem = document.getElementById("cart_item")
const cartFooter = document.getElementById("cart_footer")

btnCart.addEventListener("click", () => {

	const CART_ = JSON.parse(localStorage.getItem("CART"));

	if (CART_ == undefined) {

		cartItem.innerHTML = `
		<span>Aun no hay nada en el carrito.</span>`

	} else {
		let total = 0;
		cartItem.innerHTML = "";
		cartFooter.innerHTML = "";

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
			total += prod.price;
		})

		let btnFinish = document.createElement("button");
		btnFinish.className = "btn btn_solid linkStyle";
		btnFinish.innerHTML = `
			<i class="fi fi-rr-shopping-cart"></i>
			Realizar Compra
		`;

		let totalDiv = document.createElement("div")
		totalDiv.innerHTML = `
			<h2>Tu Carrito vale: $${total}</h2>
		`;

		cartFooter.append(totalDiv, btnFinish);

		btnFinish.addEventListener("click", () => {
			localStorage.removeItem("CART");
			cartItem.innerHTML = `
				<span>Aun no hay nada en el carrito.</span>`;
			cartFooter.innerHTML = "";
			swal("Listo!", "Gracias por tu compra UwU", "success");
		})
	}

})