export class Form {
  constructor(selector) {
    this.$form = document.querySelector(selector);
  }

  initEventListeners() {
    this.$form.addEventListener('submit', (e) => this.submitHandler(e));
  }

  submitHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(this.getData());
    return this.getData();
  }

  getData() {
    const data = {};
    const form = new FormData(this.$form);
    for (let [key, value] of form.entries()) data[key] = value;
    return data;
  }
}
