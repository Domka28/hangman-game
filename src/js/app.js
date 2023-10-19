import { data } from "./data.js";

const sentence = document.querySelector(".sentence-letters")
const quantity = document.querySelector(".sentence-quantity")
const category = document.querySelector(".sentence-category")
const lettersContainer = document.querySelector(".letters-container")

quantity.innerText = data.length

let randomIndex = Math.floor(Math.random() * data.length);
console.log(randomIndex)

data.filter(element => element.id === randomIndex).forEach(element => {
    category.innerText = element.category;
    sentence.innerText = element.sentence;
})


function showLetter(e) {
    console.log(e.target)
}

const alphabet = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"]
alphabet.forEach((element, index) => {
    const letterHTML = `<div class="letter" id="letter${index}">${element}</div>`;
    lettersContainer.innerHTML += letterHTML;
});


document.addEventListener("click", showLetter);

//Co muszę zrobić?

//2.obsłużyć miejsce, w którym wyświetlane jest hasło tak, żeby na początku każda literka była przykryta prez "_"
//a) jeśli kliknięta literka nie jest w haśle, to "_" zostaje i obrazek zmienia się na kolejny, czyli s1+1 itd
//b) jeśli kliknięta literka jest w haśle, to obrazek się nie zmienia a "_" zmienia się w odpowiednią literkę
//w ten sposób zmienia się każda taka sama literka ukryta pod "_"

//3.Poprawnie odgadnięte literki zmieniają się w zielony, a niepoprawne w czerwony i nie można ich drugi raz kliknąć

//4..Jeśli wszystkie rysunki się skończą, to zamiast literek po prawej str pojawia się hasło "przegrana" i button,
//który wznawia grę

//5.Jeśli hasło zostanie odgadnięte, to wyświetlić ma się hasło o wygranej i też przycisk "losuj dalej"

//6.Przycisk pokaż całe wyświetla całe hasło tam gdzie literki po prawej i też przycisk "losuj dalej"

//7. Przycisk wylosuj inne hasło losuje nowe hasło z API i gra toczy się dalej


