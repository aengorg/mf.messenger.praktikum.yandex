export default `
<div class="modal modal--show-{{ data.show }}">
  <form id="form-create-chat">
    <div class="modal_content">
      {{SLOT 'title' }}
      {{SLOT 'fieldTitle' }}
      <div class="form_buttons-group">
        {{SLOT 'buttonCancel' }}
        {{SLOT 'buttonCreate' }}
      </div>
    </div>
  </form>
</div>
`;
