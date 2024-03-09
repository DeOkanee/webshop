function togglePrice(element) {
  const priceElement = element.querySelector('.price');
  priceElement.style.display = priceElement.style.display === 'none' ? 'block' : 'none';
}

let selectedProductImage; // Variabel global untuk menyimpan gambar produk

function showOrderPopup(productNameId, productPrice, productImage) {
  // Tampilkan popup order
  const orderPopup = document.getElementById("order-popup");
  orderPopup.style.display = "block";

  // Set nama barang di dalam input field
  const itemName = document.getElementById(productNameId).innerText;
  document.getElementById("item").value = itemName;

  // Set harga barang di dalam input field
  document.getElementById("item-price").value = productPrice;

  // Simpan gambar produk ke dalam variabel global
  selectedProductImage = productImage;
}
function closeOrderPopup() {
  document.getElementById("order-popup").style.display = "none";
}

function submitOrder() {
  const itemName = encodeURIComponent(document.getElementById("item").value);
  const itemPrice = encodeURIComponent(document.getElementById("item-price").value);
  const message = encodeURIComponent(document.getElementById("message").value);
  const whatsappNumber = "+6281236091001";
  
  // Sertakan gambar produk dalam link WhatsApp
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Order:%20${itemName}%0AHarga:%20${itemPrice}%0AGambar%20Produk:%20${selectedProductImage}%0APertanyaan:%20${message}`;
  
  window.open(whatsappLink, "_blank");
}

