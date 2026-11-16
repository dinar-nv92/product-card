export class Modal {
  #boundOverlayClick;
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#boundOverlayClick = this.#onOverlayClick.bind(this);
    
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => this.open());
    }

     const closeButton = this.modal.querySelector('#modal-close-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.close());
    }
  }


  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.#boundOverlayClick);
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.#boundOverlayClick);
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
  
  #onOverlayClick() {
    this.close();
  }
}