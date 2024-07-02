function selectNewMeals(amount) {
  let meals = getRandomMeals(amount);
  let list = document.getElementById("meals");

  list.innerHTML = "";

  for (let index in meals) {
    const meal = meals[index];
    let entry = document.createElement("li");
    entry.className = "mealItem";
    entry.id = index;

    createReplaceIcon(entry);
    createMealEntry(entry, meal);
    list.appendChild(entry);
  }

  document.getElementById("copy").disabled = false;
}

function replaceMeal(id) {
  let entry = document.getElementById(id).parentElement;
  entry.innerHTML = "";

  let meals = getRandomMeals(1);
  let meal = meals[0];

  createReplaceIcon(entry);
  createMealEntry(entry, meal);
}

function copyMeals() {
  const mealList = document.getElementById("meals");
  const mealsText = Array.from(mealList.children)
    .map((li) => document.getElementById(li.id+"-text").textContent)
    .join("\n");

  navigator.clipboard
    .writeText(mealsText)
    .then(() => {
      showSnackbar("Meals copied to clipboard");
    })
    .catch((err) => {
      showSnackbar("Failed to copy meals", true);
    });
}

function getRandomMeals(n) {
  // Shuffle array
  const shuffled = meals.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, n);
  return selected;
}

function createReplaceIcon(parent) {
  var button = document.createElement("button");
  button.innerHTML = "autorenew";
  button.id = parent.id + "-button";
  button.className = "material-symbols-outlined";
  button.onclick = function () {
    replaceMeal(this.id);
  };
  parent.appendChild(button);
}

function createMealEntry(parent, meal) {
  var entry = document.createElement("div");
  entry.innerHTML = meal;
  entry.id = parent.id + "-text";
  entry.className = "mealEntry";
  parent.appendChild(entry);
}

function showSnackbar(message, isAlert = false) {
  var x = document.getElementById("snackbar");
  x.hidden = false;
  x.innerHTML = message;

  setTimeout(function () {
    x.hidden = true;
  }, 3000);
}

const meals = [
  "Kikhernepasta",
  "Makaroonilaatikko",
  "Tofu-nuudeliwokki",
  "Halloumpasta",
  "Gnocchivuokajuttu",
  "Tofu-nuudelikeitto",
  "Currylinssikeitto",
  "Porkkana-tomaattirisotto",
  "Ahvenfileet + perunamuussi + kermaviilikastike",
  "Täytetyt pitaleivät",
  "Munakoiso uunipastavuoka",
  "Punajuurisosekeitto + patonki",
  "Chili con härkis",
  "Vegenugetit + riisi",
  "Bataatti-nachopelti",
  "Tomaattirisotto",
  "Linssikeitto + patonki",
  "Munakoiso uunipasta kikherneillä",
  "Perunamuusi + kalapuikot + salaatti",
  "Quornpiirakka",
  "Vihapullavuoka",
  "Kasvis-gnocchipannu",
  "Uunifetapasta",
  "Salaatti + patonki",
  "Halloumstroganoff + riisi",
  "Lohisalaatti",
  "Uunifeta-perunasalaatti",
  "Soijarouhelasagne",
  "Tonnikalasalaatti",
  "Tortellonisalaatti (kirjasta)",
  "Quorn-piirakka ja salaatti",
  "Gnocchipyttipannu (kirjasta)",
  "Tonnikalavuoka",
  "Tomaatti-cashewpasta",
  "Vegekanakastike + riisi",
  "Tomaattikikhernekeitto + patonki",
  "Hampparit ja lohkoperunat",
  "Punajuuripasta ja feta",
  "Lohipiirakka",
  "Parsa, kala, perunamuussi, bernaisekastike",
  "Tortellonivuoka",
  "Tomaattirisotto ja mozzarella",
  "Tomaatti-kikhernekeitto",
  "Hodarivuoka",
  "Nakit + perunasalaatti",
  "Sitruunarisotto",
  "Parsa-sitruunapasta",
  "Palak paneer",
  "Tortillat",
  "Pinaatti-pestopasta",
  "Kuuma nachodippi",
  "Peruna, kalapalat ja kermaviilikastike",
  "Punajuuripasta",
  "Uuniperunat + tonnikalatäyte",
  "Fetasalaatti + patonki",
  "Kalatacot",
  "Sieni-gnocchipelti",
  "Munakoisopasta",
  "Vegekanakiusaus",
  "Sitruunainen tofu-perunapelti (kirjasta)",
  "Raviolisalaatti (kirjasta)",
  "Viikonlopuksi Kuuma nachodippi + nachot (kirjasta)",
  "Vihapullavuoka (AKlla resepti)",
  "Paahdettu juures-kikhernesalaatti",
  "Riisi-halloumvuoka",
  "Wokki",
  "Munakoiso-linssivuoka",
  "Kurpitsatortillat",
  "Kurpitsarisotto",
  "Nachopelti",
  "Kesäkurpitsapasta",
  "Riisihalloumvuoka",
  "Pasta bolognese + pasta",
  "Tofu-korma + riisi",
  "Pitsa (pesto-mozzarella)",
  "Texmex piirakka",
  "Bataatti-kikhernesalaatti",
  "Halloum-stroganoff",
  "Halloumwrapit",
  "Täytetyt paprikat",
  "Pastasalaatti",
  "Mozzarella/avocadotaskut",
  "Kasvispiirakka + salaatti",
  "Pinaattiletut + puolukkahillo ja salaatti",
  "Punajuuripasta + tofu ja bimi",
  "Sitruuna-vuohenjuustorisotto",
  "Munakoiso-linssibolognese",
  "Nyhtökaura-gnocchivuoka",
  "Porkkanapihvit ja perunamuussi",
  "Tahini-pastasalaatti",
  "Chili sin carnella täytetyt tortillat",
  "Meksikolainen tomaattikeitto",
  "Kasvispiirakka",
  "Pasta alfredo",
  "Bao bun sämpylät + itsetehty coleslaw",
  "Tofu-kookoskorma riisillä",
];
