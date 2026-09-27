const search = document.getElementById("search");

search.addEventListener("input", function () {
  const value = search.value.toLowerCase();

  const cards = document.querySelectorAll(".place-card");

  cards.forEach(function (card) {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
