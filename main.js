console.log("Day 3 Gamze & Mike Pair Project homework");
console.log("beans beans the magical fruit the more you eat the more you toot");
// Ex 15) Create a function that adds a "HOT" badge to all the "Welcome Summer" offers
window.onload = function () {
  let hotFellas = document.querySelectorAll(
    ".welcome-summer-wrap .row .col .card"
  );
  for (let i = 0; i < hotFellas.length; i++) {
    let badge = document.createElement("span");
    badge.classList.add("badge");
    badge.classList.add("badge-danger");
    badge.style.position = "absolute";
    badge.style.top = "20px";
    badge.style.right = "0px";
    badge.innerText = "hot as hell";
    hotFellas[i].appendChild(badge);
  }
};

// Ex 16) Create a function to delete all "cards" from the page
