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

  // letters alowed for twitter
  function twitter() {
    const numberofTwitter = 280 - textareaEl.value.length;
    numberoftwitterEl.textContent = numberofTwitter;
    if (numberofTwitter < 0) {
      numberoftwitterEl.classList.add("state-number--limite");
    } else {
      numberoftwitterEl.classList.remove("state-number--limite");
    }
  }

  // letters alowed for facebook
  function facebook() {
    const numberofFacebook = 2200 - textareaEl.value.length;
    numberoffacebookEl.textContent = numberofFacebook;

    if (numberofFacebook < 0) {
      numberoffacebookEl.classList.add("state-number--limite");
    } else {
      numberoffacebookEl.classList.remove("state-number--limite");
    }
  }

  function words() {
    const numberofwords = textareaEl.value.split(" ").length;
    numberofwordsEl.textContent = numberofwords;
    if (textareaEl.value.length === 0) {
      numberofwordsEl.textContent = 0;
    }
  }

  characters();
  twitter();
  facebook();
  words();
}
textareaEl.addEventListener("input", changes);
