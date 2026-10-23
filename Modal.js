export class Modal {
  constructor(modalId) {
    this.modalId = modalId;
    this.element = document.getElementById(modalId);
    this.closeButton = this.element.querySelector('.close');
    this.overlay = document.querySelector('.modal-overlay');
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.close());
    }
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    } 
  }
  open() {
    this.element.classList.add('modal-showed');
    this.overlay.classList.add('overlay-active');
  }
  close() {
    this.element.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-active');
  }
}

