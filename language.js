const buttons = document.querySelectorAll('.language-switcher__button');

function switchLanguage(event) {
  const lang = event.target.dataset.lang;
  // здесь можно добавить код для изменения языка на странице
  console.log(`Выбран язык: ${lang}`);
}

buttons.forEach(button => {
  button.addEventListener('click', switchLanguage);
});
