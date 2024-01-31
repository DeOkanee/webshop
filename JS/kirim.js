function togglePrice(element) {
  const priceElement = element.querySelector('.price');
  priceElement.style.display = priceElement.style.display === 'none' ? 'block' : 'none';
}

function showOrderPopup(productNameId, productPrice) {
  // Tampilkan popup order
  const orderPopup = document.getElementById("order-popup");
  orderPopup.style.display = "block";

  // Set nama barang di dalam input field
  const itemName = document.getElementById(productNameId).innerText;
  document.getElementById("item").value = itemName;

  // Set harga barang di dalam input field
  document.getElementById("item-price").value = productPrice;
}

function closeOrderPopup() {
  document.getElementById("order-popup").style.display = "none";
}

function submitOrder() {
  const itemName = document.getElementById("item").value;
  const itemPrice = document.getElementById("item-price").value;
  const message = document.getElementById("message").value;
  const whatsappNumber = "+6285738187967";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Order:%20${itemName}%20Harga:%20${itemPrice}%0APertanyaan:%20${message}`;
  window.open(whatsappLink, "_blank");
}
