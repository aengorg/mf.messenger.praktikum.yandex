export default `
<div class="app app--center bg bg--img-security">
  {{SLOT 'alert' }}
  <form id="form-setting-password" class="form form--page">

    {{SLOT 'title' }}

    <div class="form_wrapper-inputs">
      {{SLOT 'fieldOldPassword' }}
      {{SLOT 'fieldNewPassword' }}
      {{SLOT 'fieldNewPassword2' }}
      {{SLOT 'error' }}
    </div>

    <div class="form_buttons-group">
      {{SLOT 'buttonCancel' }}
      {{SLOT 'buttonSave' }}
    </div>
  </form>
</div>
`;
