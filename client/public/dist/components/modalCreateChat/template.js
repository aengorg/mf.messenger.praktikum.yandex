export default `
<div class="modal modal--show-{{ data.show }}">
  <form id="form-create-chat"  class="form">
    <div class="modal_content">

      {{SLOT 'title' }}

      <div class="form_wrapper-inputs">
        {{SLOT 'fieldTitle' }}
        {{SLOT 'error' }}
      </div>

      <div class="form_buttons-group">
        {{SLOT 'buttonCancel' }}
        {{SLOT 'buttonCreate' }}
      </div>
    </div>
  </form>
</div>
`;
//# sourceMappingURL=template.js.map