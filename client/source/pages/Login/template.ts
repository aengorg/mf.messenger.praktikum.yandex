export default `
<div class="app app--center bg bg--img-login">
  <form id="form-login" class="form form--page">

    {{SLOT 'title' }}

    <div class="form_wrapper-inputs">
      {{SLOT 'fieldLogin' }}
      {{SLOT 'fieldPassword' }}
      {{SLOT 'error' }}
    </div>

    <div class="form_buttons-group form_buttons-group--row">
      {{SLOT 'buttonLogin' }}
      {{SLOT 'linkSignup' }}
    </div>

  </form>
</div>
`;
