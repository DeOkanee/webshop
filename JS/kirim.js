function togglePrice(element) {
  // Implement toggle logic for price display
}

function showPopup(image, itemName, itemDescription) {
  // Implement logic to show detail popup
}

function showOrderPopup(productNameId, itemPrice) {
  // Show the order popup
  document.getElementById("order-popup").style.display = "block";

  // Set the item name in the input field
  document.getElementById("item").value =
    document.getElementById(productNameId).innerText;

  // Set the item price in the input field (optional)
  document.getElementById("item-price").value = `Rp${itemPrice}`;
}

function closeOrderPopup() {
  // Close the order popup
  document.getElementById("order-popup").style.display = "none";
}

function submitOrder() {
    // Implement logic to send order details to WhatsApp
    let itemName = document.getElementById("item").value;
    let message = document.getElementById("message").value;
    let whatsappNumber = "+6285738187967";
    let whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Order:%20${itemName}%0APertanyaan:%20${message}`;
  
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  }
  