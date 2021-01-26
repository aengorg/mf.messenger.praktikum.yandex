export default `
<div class="{{ state.styleClasses }}">
  {{#if data.url }}
    <img src="{{ data.url }}" alt="avatar" class="avatar_image">
  {{/if}}
  {{#if data.status }}
    {{SLOT 'status' }}
  {{/if}}
</div>
`;
//# sourceMappingURL=template.js.map