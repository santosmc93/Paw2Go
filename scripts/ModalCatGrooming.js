const openCatModal = document.querySelector('.hero__cta');
const modalC = document.querySelector('.modal');
const closeCatModal = document.querySelector('.modal__close');

openCatModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modalC.classList.add('modal--show');
});

closeCatModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modalC.classList.remove('modal--show');
});