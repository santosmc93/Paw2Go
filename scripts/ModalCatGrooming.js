const openCatModal = document.querySelector('.Cat__cta');
const openCatModal2 = document.querySelector('.Cat__cta2');
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

openCatModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modalC.classList.add('modalCat--show');
});

closeCatModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    modalC.classList.remove('modalCat--show');
});