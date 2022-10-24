//Name GENERATOR JAVASCRIPT CODE
// done with assistance from my private tutor


//NOUNS ARRAY GOES HERE (taken from google)
let nouns = [
  "ace",
  "adjudicator",
  "adventurer",
  "Ambassador",
  "ape",
  "argus",
  "Artist",
  "Assassin",
  "assassin",
  "attacker",
  "authority",
  "bachelor",
  "bagman",
  "Bandit",
  "Beggar",
  "believerwader",
  "bell toad",
  "big cat",
  "block Warrior",
  "brainiac",
  "bravo",
  "breaker",
  "Buddist",
  "cadger",
  "cat",
  "cavalier",
  "chiliast",
  "Commander",
  "Conqueror",
  "controller",
  "corvus",
  "coyote",
  "Crane",
  "creator",
  "criminal",
  "crooked alligator",
  "crow",
  "danger",
  "Demon",
  "designer",
  "Desperado",
  "Destroyer",
  "devil",
  "diplomatist",
  "diviner",
  "doge",
  "Dominator",
  "Dr.",
  "Draco",
  "Dragon",
  "drifer",
  "educator",
  "enchanter",
  "evil",
  "expert",
  "fiend",
  "fighter",
  "firedrake",
  "fist",
  "floater",
  "freebooter",
  "general",
  "genius",
  "genus Mustela",
  "governor",
  "Grus americana",
  "hand",
  "hoodoo",
  "Hunter",
  "illusionist",
  "Iron Toad",
  "jaguar",
  "judge",
  "killer",
  "Killer pop",
  "King",
  "Knight",
  "lamp eye ",
  "lansquenet",
  "leader",
  "leopard",
  "Lion",
  "lord",
  "Magician",
  "magician",
  "marten",
  "master",
  "Master",
  "Mastermind",
  "Menace",
  "Mercenary",
  "mercenary",
  "mink",
  "mitt",
  "monal",
  "monkey",
  "monwhooper",
  "moocher",
  "mugger",
  "murderer",
  "nasty eagle ",
  "needy",
  "Ninja",
  "ninja",
  "nobility",
  "occultist",
  "officer",
  "panther",
  "panthera",
  "parrot",
  "paw",
  "Pheasant",
  "pioneer",
  "plastic frog",
  "predictor",
  "Professional",
  "prophesier",
  "Prophet",
  "Quack",
  "Queen",
  "Quince",
  "Quid",
  "Rascal",
  "Raven",
  "recorder",
  "robber",
  "romanticist",
  "ruler",
  "Samurai",
  "scratch",
  "Seeker",
  "short ferret",
  "simian",
  "Sir",
  "soldier",
  "sorecerer",
  "Specialist",
  "spokesperson",
  "stylist",
  "superior",
  "threat",
  "thug",
  "Tiger",
  "Tiger fist",
  "togue",
  "Tormenter",
  "tough",
  "tough",
  "Tracker",
  "traveler",
  "tree toad",
  "turkey",
  "Udder",
  "Uncle",
  "Underdog",
  "Unicon",
  "vanquisher",
  "venturer",
  "victor",
  "villain",
  "Wanderer",
  "Warlock",
  "warrior",
  "waster",
  "wildcat",
  "witch",
  "witch doctor",
  "Wizard",
  "wolf",
  "wrecker",
  "wyvern",
  "X-Ray",
  "X-Wing",
  "Xyster",
  "yellow peril",
  "Zealot",
  "Zebra",
  "Zephyr",
  "Zit",
  "Zoot",
  "Zoster",
];


//the array of adjectives will go here (found on google)
let adjectives = [
  "active",
  "Aggressive",
  "alarming",
  "Amazing",
  "angry",
  "Annoying",
  "Arrogant",
  "awesome",
  "awing",
  "bad",
  "barbed",
  "beamish",
  "bibulous",
  "Bitter",
  "blessedupleasant",
  "bold",
  "boozy",
  "brave",
  "brave",
  "calloused",
  "charitable",
  "cheerful",
  "chesty",
  "chilly",
  "chromatic",
  "chromatic",
  "common",
  "crappy",
  "Crazy",
  "crazy",
  "dark",
  "deafening",
  "dedicatedresentful",
  "dopey",
  "Drunken",
  "Dynamic",
  "educated",
  "empathetic",
  "energising",
  "Erratic",
  "Excessive",
  "faineant",
  "Fanatical",
  "far",
  "fast",
  "Fearless",
  "fickle",
  "Foolish",
  "foremost",
  "fortunate",
  "gallant",
  "galling",
  "gilded",
  "gilt",
  "golden",
  "golden",
  "goosy",
  "governing",
  "great",
  "hard",
  "hardy",
  "heroic",
  "hexed",
  "holly",
  "honored",
  "hostile",
  "hot",
  "humble",
  "illusional",
  "imposing",
  "impressive",
  "indolent",
  "Insane",
  "insensitive",
  "Intellectual",
  "invasive",
  "key",
  "kind",
  "Lazy-Assed",
  "little",
  "loco",
  "long",
  "loopy",
  "loud",
  "luckless",
  "Lucky",
  "mad",
  "Mad Mad",
  "Master",
  "mean",
  "mercurial",
  "Midnight",
  "Mighty",
  "minatory",
  "musty",
  "mythic",
  "niffy",
  "nighttime",
  "noetic",
  "oblong",
  "ocular",
  "offtensive",
  "optical",
  "overweening",
  "overzealous",
  "passionate",
  "pesky",
  "pestering",
  "Phantom",
  "philosophic",
  "philosophical",
  "pinkie",
  "pinkish",
  "Pinky",
  "powerful",
  "proud",
  "quick",
  "Quiet",
  "rabid",
  "raging",
  "rapid",
  "rational",
  "reputable",
  "Respected",
  "sanctity",
  "Sarcastic",
  "sardonic",
  "satiric",
  "savage",
  "scrappy",
  "self-important",
  "sick",
  "silent",
  "silly",
  "sinister",
  "slashing",
  "slothful",
  "small",
  "Smiling",
  "sorrowful",
  "sottish",
  "speedy",
  "spunky",
  "stinky",
  "strong",
  "sturdy",
  "sunset",
  "sympathetic",
  "tall",
  "tame",
  "teensy",
  "thankless",
  "Threatening ",
  "Thunderous",
  "thundery",
  "tiny",
  "tiptoe",
  "Tough",
  "tough",
  "twinkly",
  "unappreciative",
  "undue",
  "unemotional",
  "unfortunable",
  "Ungrateful",
  "unhinged",
  "Unlucky",
  "unpleasant",
  "unreal",
  "unreasonable",
  "Violent",
  "visible",
  "Visual",
  "Vulgar",
  "wacky",
  "wandering",
  "well-thought-of",
  "wild",
];


//javascript code begins here

let wuname =
  nouns[Math.floor(Math.random() * nouns.length)] +
  " " +
  adjectives[Math.floor(Math.random() * adjectives.length)];

// function is called when load state of html document changes. So when the page loads this is called
//This was learned from my tutor
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    // then we will get our 3 selectors
    let letterSelector = document.querySelector("#letterSelector");
    let continentSelector = document.querySelector("#continentSelector");
    let colorSelector = document.querySelector("#colorSelector");

    // three selector variables will now grab element values from the array
    let lettr = letterSelector.options[letterSelector.selectedIndex].value;
    let cont = continentSelector.options[continentSelector.selectedIndex].value;
    let colr = colorSelector.options[colorSelector.selectedIndex].value;

    // this is where the refresh button will go
    let regenerateElement = document.querySelector("#wutangGenerator");

    // when letter selection input field changes this will happen
    letterSelector.addEventListener("change", event => {
      let letter = event.target.value;
      lettr = letter; // update lettr because it  will be used by other selector events
      generateWutangName(lettr, cont, colr);
    });

    // when continent selection input field changes this will happen
    continentSelector.addEventListener("change", event => {
      let continent = event.target.value;
      cont = continent;
      generateWutangName(lettr, cont, colr);
    });

    // when color selection input field changes this will happen
    colorSelector.addEventListener("change", event => {
      let color = event.target.value;
      colr = color;
      generateWutangName(lettr, cont, colr);
    });

    // when refresh button is clicked, then generate a name
    regenerateElement.addEventListener("click", event => {
      generateWutangName(lettr, cont, colr);
    });

    // refresh and create a new name
    generateWutangName(lettr, cont, colr);
  }
};

// name generator function logic goes here
const generateWutangName = (letter, continent, color) => {
  //this lets us only target a specific letter character in the array by using filter
  let subsetNouns = nouns.filter(
    noun => noun.charAt(0).toUpperCase() === letter
  );
  let wuname =
  //the logic to shuffle the letters and spit out a random one
    subsetNouns[Math.floor(Math.random() * subsetNouns.length)] +
    " " +
    adjectives[Math.floor(Math.random() * adjectives.length)];

  let gender = document.querySelector("#gender").value;
  let country = document.querySelector("#country").value.trim();
  let vowels = ["a", "e", "i", "o", "u"];
  let thirdName;
  //we are going to define the thirdname variable later, hence the semicolon

  // check if country is in our specified aray and if it's there then use it
  //here is where the name shuffling logic is placed
  if (country) {
    //here is where we define the third name
    thirdName =
      gender[0] + // get first letter of the gender
      vowels[Math.floor(Math.random() * vowels.length)] + // randomly select vowels
      country[Math.floor(Math.random() * country.length)]; // randomly get a letter from the country name
  } else {
    thirdName =
      gender[0] +
      vowels[Math.floor(Math.random() * vowels.length)] +
      continent[Math.floor(Math.random() * continent.length)]; // randomly get letter from the continent name
  }

  // add thirdname to wuname and reasign to wuname
  wuname = wuname + " " + thirdName;

  document.querySelector("#wutangName").innerHTML = `
        <h2>Your New Name Is:  <span style="color: ${color};">${wuname}</span></h2> `;
};
