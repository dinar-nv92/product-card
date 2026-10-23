export class Form {
  constructor(formId) {
    this.formId = formId;
    this.element = document.getElementById(formId);
  }
  getValues() {
    const formData = new FormData(this.element);
    const values = {};
    for (const [key, value] of formData.entries()) {
      values[key] = value;
    }
    return values;
  };

  isValid() {
    return this.element.checkValidity();
  };

  reset() {
    this.element.reset();
  }
}