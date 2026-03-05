(() => {
  const openBtns = document.querySelectorAll('[data-modal-open]');
  const modals = document.querySelectorAll('[data-modal]');

  const closeAll = () => {
    modals.forEach(m => m.classList.add('is-hidden'));
    document.body.classList.remove('no-scroll');
  };

  const openByName = name => {
    closeAll();
    const modal = document.querySelector(`[data-modal="${name}"]`);
    if (!modal) return;
    modal.classList.remove('is-hidden');
    document.body.classList.add('no-scroll');
  };

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => openByName(btn.dataset.modalOpen));
  });

  // Close by X
  document.addEventListener('click', e => {
    if (e.target.closest('[data-modal-close]')) closeAll();
  });

  // Close by backdrop click (only if clicked on backdrop, not inside modal)
  modals.forEach(backdrop => {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeAll();
    });
  });

  // Close by ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAll();
  });
})();
