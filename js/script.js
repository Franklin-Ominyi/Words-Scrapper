// DOM Elements
const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copyBtn");
const lengthOfScrappedWords = document.querySelector("#lengthOfScrappedWords");
let scrappedWords = "";

//Setting year on the DOM
document.querySelector("#year").innerHTML = new Date().getFullYear();

// Copy text function
const copyText = () => {
 if (!scrappedWords) return;
 navigator.clipboard.writeText(scrappedWords);
 copyBtn.innerHTML = "Copied";
 copyBtn.classList.add = "copied";
};

// Scrap Words function
const scrapWords = () => {
 // DOM Elements
 let words = document.querySelector("#words").value;
 const scrap = document.querySelector("#scrap").value;
 const replaceWith = document.querySelector("#replace-with").value;
 const result = document.querySelector("#result");
 lengthOfScrappedWords.textContent = "";
 result.textContent = "";
 copyBtn.textContent = "Copy";
 lengthOfScrappedWords.textContent = "";

 document.querySelector("#words").addEventListener("keypress", () => {
  copyBtn.textContent = "Copy";
  lengthOfScrappedWords.textContent = "";
 });

 if (words.length < 1 || scrap.length < 1) {
  copyBtn.removeEventListener("click", copyText);
  return;
 }

 let splitedWords = words.split(scrap);
 scrappedWords = splitedWords.join(replaceWith);
 let replacedWordsLength =
  splitedWords.length - 1 > 0 ? splitedWords.length - 1 : 0;
 lengthOfScrappedWords.textContent =
  "The length of the scrapped word(s) is " + replacedWordsLength;
 result.textContent = scrappedWords;

 copyBtn.addEventListener("click", copyText);
};

btn.addEventListener("click", scrapWords);

// Code written by Franklin Ominyi
