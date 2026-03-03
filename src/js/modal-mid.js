(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-mid-open]'),
    closeModalBtn: document.querySelector('[data-modal-mid-close]'),
    modal: document.querySelector('[data-modal-mid]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
