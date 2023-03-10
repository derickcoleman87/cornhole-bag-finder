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
    name: "Samurai",
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
    brand: "BG Cornhole",
    name: "Warlock",
    slowSide: 5,
    fastSide: 7,
  },
  {
    brand: "BG Cornhole",
    name: "Assassin",
    slowSide: 6,
    fastSide: 9,
  },
  {
    brand: "BG Cornhole",
    name: "Mercenary",
    slowSide: 5,
    fastSide: 9,
  },
  {
    brand: "BG Cornhole",
    name: "Dark Slide 2.0",
    slowSide: 9,
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
    name: "Shamrocks 2.0",
    slowSide: 4,
    fastSide: 7,
  },
  {
    brand: "Lucky Bags Cornhole",
    name: "O'Doyles",
    slowSide: 4,
    fastSide: 7,
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
  {
    brand: "Reynolds",
    name: "Fracture",
    slowSide: 6,
    fastSide: 9,
  },
  {
    brand: "Reynolds",
    name: "Pro-x",
    slowSide: 4,
    fastSide: 8,
  },
  {
    brand: "Reynolds",
    name: "Carpet Bag",
    slowSide: 3,
    fastSide: 8,
  },
  {
    brand: "Reynolds",
    name: "Cyclone",
    slowSide: 5,
    fastSide: 8,
  },
  {
    brand: "Reynolds",
    name: "Thunder",
    slowSide: 5,
    fastSide: 6,
  },
];

//let searchBtn = document.getElementById("search-btn");
let form = document.querySelector("form");

function search(event) {
  event.preventDefault();
  let slowSide = Number(document.querySelector("#slow-side").value);
  let fastSide = Number(document.querySelector("#fast-side").value);

  let searchResults = [];

  for (let i = 0; i < bags.length; i++) {
    if (bags[i].slowSide === slowSide && bags[i].fastSide === fastSide) {
      searchResults.push(bags[i]);
      console.log(searchResults);
    }

    let name = document.querySelector("#name").value;
    let dataName = bags[i].name.toUpperCase();
    let searchName = name.toUpperCase();

    //here down code issue for matching results by
    if (dataName.indexOf(searchName) > -1) {
      searchResults.push(bags[i]);
      let bagsThatMatchedSpeed = bagsThatMatchSpeed(
        bags[i].slowSide,
        bags[i].fastSide
      );

      for (let j = 0; j < bagsThatMatchedSpeed.length; j++) {
        if (bagsThatMatchedSpeed[j].name !== bags[i].name) {
          searchResults.push(bagsThatMatchedSpeed[j]);
          // console.log(bagsThatMatchedSpeed[j]);
        }
      }
    }
  }

  // console.log(searchResults);
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
  console.log(results);
}
form.addEventListener("submit", search);
