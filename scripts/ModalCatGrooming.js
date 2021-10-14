const openCatModal = document.querySelector('.Cat__cta');
const modalC = document.querySelector('.modalCat');
const closeCatModal = document.querySelector('.modalCat__close');

openCatModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modalC.classList.add('modalCat--show');
});

closeCatModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modalC.classList.remove('modalCat--show');
});