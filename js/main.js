const cartBtn = document.querySelector('.cart-btn');
const modal = document.querySelector('.modal');

const openModal = event => {
  event.preventDefault();
  modal.classList.add('modal-active');
  document.addEventListener('keyup', closeModal);
};

const closeModal = event => {
  const target = event.target
  if (target === modal || target.classList.contains('modal-close') || target.classList.contains('button-cancel') || event.keyCode === 27) {
    modal.classList.remove('modal-active');
    document.removeEventListener('keyup', closeModal);
  }
};

cartBtn.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);

new WOW().init();