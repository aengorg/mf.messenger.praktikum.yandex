export default `
<div class="{{ state.styleComponent }}">
  <img 
    {{#if data.url }}
      src="{{ data.url }}" 
    {{/if}}
    alt="avatar" 
    class="{{ state.styleImage }}"
  >
  {{#if data.status }}
    {{SLOT 'status' }}
  {{/if}}
</div>
`;
