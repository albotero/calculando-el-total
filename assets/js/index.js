// Constants declaration
const precio = 400000
const precioSpan = document.querySelector(".precio-inicial")
const cantidadP = document.querySelector(".cantidad")
const valorTotalSpan = document.querySelector(".valor-total")
const plusButton = document.querySelector(".plus-button")
const minusButton = document.querySelector(".minus-button")

// Variables declaration
let selectedQty = 0

// Functions
const updateValues = () => {
  precioSpan.innerHTML = precio.toLocaleString()
  cantidadP.innerHTML = selectedQty
  valorTotalSpan.innerHTML = (precio * selectedQty).toLocaleString()
  // Disable minus button if no items are selected
  minusButton.disabled = selectedQty === 0
}

// Event listeners
plusButton.addEventListener("click", () => {
  selectedQty++
  updateValues()
})

minusButton.addEventListener("click", () => {
  if (selectedQty > 0) {
    selectedQty--
    updateValues()
  }
})

// Initialization
updateValues()
