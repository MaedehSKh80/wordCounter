const textareaEl = document.querySelector(".textarea");
const numbersofCharactersEl = document.querySelector(
  ".state-number--charecters"
);
const numberofwordsEl = document.querySelector(".state-number--words");
const numberoftwitterEl = document.querySelector(".state-number--twitter");
const numberoffacebookEl = document.querySelector(".state-number--facebook");

function changes() {
  //finding number of charecters
  function characters() {
    const numbersofCharacters = textareaEl.value.length;
    numbersofCharactersEl.textContent = numbersofCharacters;
  }
  characters();
}
textareaEl.addEventListener("input", changes);
