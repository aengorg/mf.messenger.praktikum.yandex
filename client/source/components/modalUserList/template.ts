export default `
<div class="modal modal--show-{{ data.show }}">
    <div class="modal_content">
      {{SLOT 'title' }}

      <ul>
        {{#each data.userItems }}
          {{SLOT 'userItems' @index }}
        {{else}}
          <div>Empty</div>
        {{/each}} 
      </ul>

      {{SLOT 'buttonClose' }}
    </div>
  </form>
</div>
`;
