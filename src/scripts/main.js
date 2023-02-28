const choices = new Choices('.form__select', {
    allowHTML: true,
    searchEnabled: false,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,
});

document.addEventListener('DOMContentLoaded', () => {
    const percent = document.querySelector('.range__percent');
    const input = document.querySelector('.range__input');
    percent.innerHTML = `${input.value}&nbsp;%`;
    input.oninput = function(e) {
        percent.innerHTML = `${e.target.value}&nbsp;%`;
    }

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation');
    burger.onclick = function() {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
    }
});