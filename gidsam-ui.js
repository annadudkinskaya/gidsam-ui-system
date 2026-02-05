(() => {
  const body = document.body;
  const openClass = "is-open";
  const lockClass = "g-modal-lock";

  const lockScroll = (lock) => {
    if (lock) {
      const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
      body.style.paddingRight = scrollBarGap > 0 ? `${scrollBarGap}px` : "";
      body.style.overflow = "hidden";
      body.classList.add(lockClass);
    } else {
      body.style.paddingRight = "";
      body.style.overflow = "";
      body.classList.remove(lockClass);
    }
  };

  const getModal = (trigger) => {
    const target = trigger.getAttribute("data-modal-open");
    if (!target) return null;
    return document.querySelector(target);
  };

  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add(openClass);
    lockScroll(true);
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove(openClass);
    lockScroll(false);
  };

  document.addEventListener("click", (event) => {
    const openTrigger = event.target.closest("[data-modal-open]");
    if (openTrigger) {
      event.preventDefault();
      openModal(getModal(openTrigger));
      return;
    }

    const closeTrigger = event.target.closest("[data-modal-close]");
    if (closeTrigger) {
      event.preventDefault();
      closeModal(closeTrigger.closest(".g-modal"));
      return;
    }

    const overlay = event.target.closest(".g-modal");
    if (overlay && event.target === overlay) {
      closeModal(overlay);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openModalEl = document.querySelector(`.g-modal.${openClass}`);
    if (openModalEl) {
      closeModal(openModalEl);
    }
  });

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-toggle-active]");
    if (!toggle) return;
    event.preventDefault();
    toggle.classList.toggle("is-active");
  });
})();
