// Tambahkan skrip untuk deteksi scroll dan animasi fade-in
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");

  function fadeInProducts() {
    products.forEach((product) => {
      if (
        isElementInViewport(product) &&
        !product.classList.contains("fade-in")
      ) {
        product.classList.add("fade-in");
      }
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Tambahkan event listener untuk mendeteksi scroll
  window.addEventListener("scroll", fadeInProducts);

  // Panggil fungsi fadeInProducts saat halaman dimuat pertama kali
  fadeInProducts();
});
