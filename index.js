let items = document.querySelectorAll('.box__content-2');

items.forEach(el => {
    el.addEventListener('click', e => {
        console.log(e.currentTarget);

        e.currentTarget.closest('.container__content-2').classList.toggle('active');
    });
});
