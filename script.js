'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closeModalFunction = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModalFunction = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    openModalFunction();
  });
}

closeModal.addEventListener('click', function () {
  closeModalFunction();
});

overlay.addEventListener('click', function () {
  closeModalFunction();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModalFunction();
  }
});
