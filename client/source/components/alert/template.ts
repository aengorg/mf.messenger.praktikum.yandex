export default `
<div>
  {{#if data.text }}
    <div class="{{ state.styleClasses }}">
      {{ data.text }}
    </div>
  {{/if}}
</div>
`;
