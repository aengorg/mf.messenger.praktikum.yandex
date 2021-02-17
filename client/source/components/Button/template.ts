export default `
<button
  name="{{ data.name }}"
  type="{{ data.type }}"
  class="{{ state.styleClasses }}"
  {{#if data.disabled }}
    disabled
  {{/if}}
  value="{{ data.value }}"
>
  {{ data.text }}
</button>
`;
