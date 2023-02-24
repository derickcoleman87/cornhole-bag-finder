const bag = [
  {
    brand: "BG Cornhole",
    name: "Viking",
    slowSide: 4,
    fastSide: 8,
  },
  {
    brand: "BG Cornhole",
    name: "Wizard",
    slowSide: 6,
    fastSide: 9,
  },
  {
    brand: "BG Cornhole",
    name: "Samarai",
    slowSide: 4,
    fastSide: 9,
  },
  {
    brand: "BG Cornhole",
    name: "Shapeshifter",
    slowSide: 6,
    fastSide: 9,
  },
  {
    brand: "Lucky Bags Cornhole",
    name: "Surefire",
    slowSide: 5,
    fastSide: 8,
  },
  {
    brand: "Lucky Bags Cornhole",
    name: "Pro Sniper",
    slowSide: 6,
    fastSide: 9,
  },
  {
    brand: "Ultra",
    name: "Viper",
    slowSide: 6,
    fastSide: 9,
  },
  {
    brand: "Ultra",
    name: "Viper-R",
    slowSide: 4,
    fastSide: 9,
  },
  {
    brand: "Reynolds",
    name: "Pro-Advantage",
    slowSide: 4,
    fastSide: 7,
  },
  {
    brand: "Reynolds",
    name: "Typhoon",
    slowSide: 5,
    fastSide: 8,
  },
];

//let searchBtn = document.getElementById("search-btn");
let form = document.querySelector("form");

// function resultsByBagName(event) {
//   event.preventDefault();
//   let slowSide = Number(document.querySelector("#slow-side").value);
//   let fastSide = Number(document.querySelector("#fast-side").value);
//   let name = document.querySelector("#name").value;
//   let searchResults = [];
//   for (let i = 0; i < bag.length; i++) {
//     //find bag object by name then check speeds then return bags with matching speeds
//     if ( ) {
//       searchResults.push(bag[i]);
//     }
//   }
// }

function search(event) {
  event.preventDefault();
  let slowSide = Number(document.querySelector("#slow-side").value);
  let fastSide = Number(document.querySelector("#fast-side").value);

  let searchResults = [];
  for (let i = 0; i < bag.length; i++) {
    if (bag[i].slowSide === slowSide && bag[i].fastSide === fastSide) {
      searchResults.push(bag[i]);
    }
    let name = document.querySelector("#name").value;
    let dataName = bag[i].name.toUpperCase();
    let searchName = name.toUpperCase();

    if (dataName.indexOf(searchName) > -1) {
      //check if input field is empty
      if (
        slowSide == null ||
        (slowSide == "" && fastSide == null) ||
        fastSide == ""
      )
        // bag[i].slowSide === slowSide && bag[i].fastSide === fastSide
        searchResults.push(bag[i]);
      console.log(searchName.slowSide);
    }
  }

  document.querySelector(".results-container").innerHTML = "";

  for (let i = 0; i < searchResults.length; i++) {
    let results = document.createElement("div");
    results.classList.add("results");
    results.innerHTML = `
        <h2>${searchResults[i].brand}</h2>
        <p>${searchResults[i].name}</p>
        <p>Slow Side: ${searchResults[i].slowSide}</p>
        <p>Fast Side: ${searchResults[i].fastSide}</p>`;
    document.querySelector(".results-container").append(results);
  }
}
form.addEventListener("submit", search);

/* can you create a function that when user enters bag used app returns bags with matching slow side and fast side? */

/* make function work on enter key press */
