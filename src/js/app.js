import { data } from "./data.js";

const sentence = document.querySelector(".sentence-letters")
const quantity = document.querySelector(".sentence-quantity")
const category = document.querySelector(".sentence-category")
const lettersContainer = document.querySelector(".letters-container")
const gifContainer = document.querySelector(".gif-container")
const newBtn = document.querySelector(".new-sentence")
const showBtn = document.querySelector(".show-sentence")


let arrayOfLetters = [];
let counter = 1;
let currentSentence = ''

gifContainer.innerHTML = `<img src="src/img/s0.gif" alt="obrazek wisielec">`
quantity.innerText = data.length

let randomIndex = Math.floor(Math.random() * data.length);
console.log(randomIndex)

data.filter(element => element.id === randomIndex).forEach(element => {
    category.innerText = element.category;
    sentence.innerHTML = generateSentence(element.sentence);
    currentSentence = element.sentence.toUpperCase();
})

function generateSentence(sentence) {
    let result = '';
    for (let letter of sentence) {
        if (arrayOfLetters.includes(letter)) {
            result += `${letter} `
        } else if (!arrayOfLetters.includes(letter) && letter !== ' ') {
            result += `_ `
        } else {
            result += '&nbsp;&nbsp;';
        }
    }

    return result;
}

const alphabet = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"]
alphabet.forEach((element, index) => {
    const letterHTML = `<div class="letter" id="letter${index}">${element}</div>`;
    lettersContainer.innerHTML += letterHTML;
});

function showLetter(e) {
    if (!e.target.classList.contains('letter')) return;
    if (arrayOfLetters.includes(e.target.innerText)) return;
    arrayOfLetters.push(e.target.innerText)

    if (currentSentence.includes(e.target.innerText)) {
        e.target.style.color = "#a7c957";
        e.target.style.borderColor = "#a7c957";
        sentence.innerHTML = generateSentence(currentSentence)
        if (!generateSentence(currentSentence).includes("_")) {
            lettersContainer.innerHTML = youWon();
        }
    } else {
        e.target.style.color = "#bc4749";
        e.target.style.borderColor = "#bc4749";
        if (counter < 8) {
            gifContainer.innerHTML = `<img src="src/img/s${counter++}.gif" alt="obrazek wisielec">`
        } else {
            gifContainer.innerHTML = `<img src="src/img/s8.gif" alt="obrazek wisielec">`
            lettersContainer.innerHTML = youLost()
        }
    }
}

function youWon() {
    return `<div class="you-won">
<p>Udało się, wygrałeś!</p>
</div>`
}

function youLost() {
    return `<div class="you-lost">
<p>Niestety nie tym razem... Spróbuj jeszcze raz!</p>
</div>`
}

function setNewSentence() {
    location.reload()
}

function showSentence() {
    sentence.innerHTML = currentSentence;
    lettersContainer.innerHTML = youLost()
}



showBtn.addEventListener("click", showSentence)
newBtn.addEventListener("click", setNewSentence)
document.addEventListener("click", showLetter);