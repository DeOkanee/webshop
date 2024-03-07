
function toggleDropdown() {
  document.getElementById("kategoriDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-toggle')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//ini menuju dri header ke footer
function scrollToFooter() {
  var footer = document.querySelector("footer");
  footer.scrollIntoView({ behavior: "smooth" });
}

//ini memunculkan contact person
function toggleContactSection() {
  var contactSection = document.getElementById("Contact");
  if (contactSection.style.display === "none") {
    contactSection.style.display = "block";
  } else {
    contactSection.style.display = "none";
  }
}