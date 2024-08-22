precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

document.getElementById("add").addEventListener("click", () => {
  let addPrice = parseInt(document.querySelector(".cantidad").innerHTML);
  addPrice++;
  document.querySelector(".cantidad").innerHTML = addPrice;
  document.querySelector(".valor-total").innerHTML = addPrice * precio;
});

document.getElementById("subtract").addEventListener("click", () => {
  let subtractPrice = parseInt(document.querySelector(".cantidad").innerHTML);
  subtractPrice--;
  document.querySelector(".cantidad").innerHTML = subtractPrice;
  document.querySelector(".valor-total").innerHTML = subtractPrice * precio;
});
