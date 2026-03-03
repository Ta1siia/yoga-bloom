(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-top-open]'),
    closeModalBtn: document.querySelector('[data-modal-top-close]'),
    modal: document.querySelector('[data-modal-top]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
