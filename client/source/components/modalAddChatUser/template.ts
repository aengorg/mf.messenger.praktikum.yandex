export default `
<div class="modal modal--show-{{ data.show }}">
  <form id="form-add-chat-user" class="form">
    <div class="modal_content">

      {{SLOT 'title' }}

      <div class="form_wrapper-inputs">
        {{SLOT 'fieldLogin' }}
        {{SLOT 'error' }}
      </div>

      <div class="form_buttons-group">
        {{SLOT 'buttonCancel' }}
        {{SLOT 'buttonAdd' }}
      </div>
    </div>
  </form>
</div>
`;
