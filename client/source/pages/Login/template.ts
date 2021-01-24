export default `
<div class="app app--center bg bg--img-login">
  <form id="form-login" class="form form--page form--error">

    {{= SLOT('title') }}

    <div class="form_wrapper-inputs">
      {{= SLOT('fieldLogin') }}
      {{= SLOT('fieldPassword') }}
      <div class="text--size-4 form-error_message">Form error</div>
    </div>

    <div class="form_buttons-group form_buttons-group--row">
      {{= SLOT('buttonLogin') }}
      <br />
      {{= SLOT('linkSignup') }}
    </div>
  </form>
</div>
`;
