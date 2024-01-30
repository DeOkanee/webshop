var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var header = document.querySelector("header.fixed");

    if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "0"; /* Sesuaikan dengan tinggi header Anda */
    }

    prevScrollPos = currentScrollPos;
};
