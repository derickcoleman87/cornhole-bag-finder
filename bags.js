// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// function logArr() {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j]);
//     }
//   }
// }
//logArr();
const bags = [
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
    name: "Pro Advantage",
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
//   for (let i = 0; i < bags.length; i++) {
//     //find bags object by name then check speeds then return bags with matching speeds
//     if ( ) {
//       searchResults.push(bags[i]);
//     }
//   }
// }

function search(event) {
  event.preventDefault();
  let slowSide = Number(document.querySelector("#slow-side").value);
  let fastSide = Number(document.querySelector("#fast-side").value);

  let searchResults = [];
  for (let i = 0; i < bags.length; i++) {
    if (bags[i].slowSide === slowSide && bags[i].fastSide === fastSide) {
      searchResults.push(bags[i]);
    }
    let name = document.querySelector("#name").value;
    let dataName = bags[i].name.toUpperCase();
    let searchName = name.toUpperCase();
    if (dataName.indexOf(searchName) > -1) {
      searchResults.push(bags[i]);
      let bagsThatMatchedSpeed = bagsThatMatchSpeed(
        bags[i].slowSide,
        bags[i].fastSide
      );
      for (let j = 0; j < bagsThatMatchedSpeed.length; j++) {
        if (bagsThatMatchedSpeed[j].name !== bags[i].name) {
          searchResults.push(bagsThatMatchedSpeed[j]);
        }
      }
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
function bagsThatMatchSpeed(slowSpeed, fastSpeed) {
  let results = [];
  for (let i = 0; i < bags.length; i++) {
    if (bags[i].slowSide === slowSpeed && bags[i].fastSide === fastSpeed) {
      results.push(bags[i]);
    }
  }
  return results;
}
form.addEventListener("submit", search);

/* can you create a function that when user enters bags used app returns bags with matching slow side and fast side? */

/* make function work on enter key press */
