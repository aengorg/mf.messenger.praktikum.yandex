export default `
<div class="app app--center bg bg--img-settings">
  {{SLOT 'alert' }}
  <form id="form-setting" class="form form--page form--size-l">

    {{SLOT 'title' }}

    <div class="setting-wrapper">
      <div class="setting-wrapper_left">
        <div class="form_wrapper-inputs">
          {{SLOT 'fieldFirstName' }}
          {{SLOT 'fieldSecondName' }}
          {{SLOT 'fieldChatName' }}
          {{SLOT 'fieldEmail' }}
          {{SLOT 'fieldLogin' }}
          {{SLOT 'fieldPhone' }}
          <component>
            <span class="field_label">Password</span>
            <br />
            {{SLOT 'linkPasswordSetting' }}
          </component>
          {{SLOT 'error' }}
        </div>
      </div>

      <div class="setting-wrapper_right">
        <div class="form_wrapper-inputs">
          {{SLOT 'avatarUpload' }}
        </div>
      </div>
    </div>

    <div class="form_buttons-group">
      {{SLOT 'buttonLogout' }}
      {{SLOT 'buttonCancel' }}
      {{SLOT 'buttonSave' }}
    </div>
  </form>
</div>
`;
