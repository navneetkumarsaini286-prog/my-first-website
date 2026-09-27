
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Menu open and close
menuBtn.addEventListener("click", function () {

  navLinks.classList.toggle("show");

  const isOpen = navLinks.classList.contains("show");

  menuBtn.innerHTML = isOpen ? "✕" : "☰";

  menuBtn.setAttribute("aria-expanded", isOpen);

});

// Close menu when a link is clicked
const links = document.querySelectorAll(".nav-link");

links.forEach(function (link) {

  link.addEventListener("click", function () {

    navLinks.classList.remove("show");

    menuBtn.innerHTML = "☰";

    menuBtn.setAttribute("aria-expanded", "false");

  });

});
