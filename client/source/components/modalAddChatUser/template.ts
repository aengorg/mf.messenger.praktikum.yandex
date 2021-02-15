export default `
<div class="modal modal--show-{{ data.show }}">
  <form id="form-add-chat-user">
    <div class="modal_content">
      {{SLOT 'title' }}
      {{SLOT 'fieldLogin' }}
      <div class="form_buttons-group">
        {{SLOT 'buttonCancel' }}
        {{SLOT 'buttonAdd' }}
      </div>
    </div>
  </form>
</div>
`;
