export default `
<div class="modal modal--show-{{ data.show }}">
  <div class="modal_content modal_content--size-l">
    {{SLOT 'title' }}
    <div class="form_wrapper-inputs">
      {{SLOT 'fieldLogin' }}
    </div>
    {{SLOT 'userList' @index }}
    <br>
    {{SLOT 'buttonClose' }}
  </div>
</div>
`;
