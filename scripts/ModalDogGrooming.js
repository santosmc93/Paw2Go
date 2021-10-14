const openDogModal = document.querySelector('.hero__cta');
const modalD = document.querySelector('.modal');
const closeDogModal = document.querySelector('.modal__close');

openDogModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modalD.classList.add('modal--show');
});

closeDogModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modalD.classList.remove('modal--show');
});

