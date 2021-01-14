interface IData {
  [input: string]: string;
}

export class DataForm {
  private $form: HTMLFormElement;

  constructor(selector: string) {
    this.$form = document.querySelector(selector);
  }

  private submitHandler(e: Event): void {
    e.stopPropagation();
    e.preventDefault();
    console.log(this.getData());
  }

  public initEventListeners(): void {
    this.$form.addEventListener('submit', (e) => this.submitHandler(e));
  }

  public getData(): IData {
    const data = {};
    const form = new FormData(this.$form);
    for (let [key, value] of form.entries()) data[key] = value;
    return data;
  }
}
