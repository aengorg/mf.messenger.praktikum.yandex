type TCallback = (e: Event) => void;
interface IData {
  [input: string]: FormDataEntryValue;
}

export class DataForm {
  private $form: HTMLFormElement | null;

  constructor(selector: string) {
    this.$form = document.querySelector(selector);
  }

  private submitHandler(e: Event): void {
    e.stopPropagation();
    e.preventDefault();
    console.log(this.getData());
  }

  public addHandlerToSubmit(callback?: TCallback): void {
    this.$form?.addEventListener('submit', (e) => {
      if (callback === undefined) {
        this.submitHandler(e);
      } else {
        callback(e);
      }
    });
  }

  public getData(): IData {
    const data: IData = {};
    if (this.$form) {
      const form = new FormData(this.$form);
      for (let [key, value] of form.entries()) data[key] = value;
    }
    return data;
  }
}
