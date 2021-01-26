export default `
<div class="app app--center bg bg--img-signup">
  <form id="form-signup" class="form form--page">

    {{SLOT 'title' }}

    <div class="form_wrapper-inputs">
      {{SLOT 'fieldEmail' }}
      {{SLOT 'fieldLogin' }}
      {{SLOT 'fieldFirstName' }}
      {{SLOT 'fieldSecondName' }}
      {{SLOT 'fieldPhone' }}
      {{SLOT 'fieldPassword' }}
      {{SLOT 'fieldPassword2' }}
      {{SLOT 'error'}}
    </div>

    <div class="form_buttons-group form_buttons-group--row">
      {{SLOT 'buttonSignup' }}
      {{SLOT 'linkLogin' }}
    </div>
  </form>
</div>
`;
