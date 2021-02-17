export default `
<ul class="user-list">
  {{#each data.userItems }}
    {{SLOT 'userItems' @index }}
  {{else}}
    <li class="user-item user-item--empty">
      {{ data.textEmpty }}
    </li>
  {{/each}} 
</ul>
`;
