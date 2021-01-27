export default `
<div class="modal">
  <form id="add-user">
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
//# sourceMappingURL=template.js.map