const PRICE = 400000;
let amount = 0;
let total = 0;

precioInicial = document.querySelector("#precioInicial");
precioInicial.innerHTML = PRICE;

cantidadProductos = document.querySelector("#cantidadProductos");
cantidadProductos.innerHTML = amount;

precioFinal = document.querySelector("#precioFinal");
precioFinal.innerHTML = total;

btnSuma = document.querySelector("#btnSuma");
btnResta = document.querySelector("#btnResta");

/*Funciones*/
function sumarItem() {
  amount++;
  cantidadProductos.innerHTML = amount;
}
function restarItem() {
  if (amount > 0) amount--;
  cantidadProductos.innerHTML = amount;
}

function mult() {
  total = amount * PRICE;
  precioFinal.innerHTML = total;
}

/*Eventos*/
btnSuma.addEventListener("click", sumarItem);
btnSuma.addEventListener("click", mult);

btnResta.addEventListener("click", restarItem);
btnResta.addEventListener("click", mult);
