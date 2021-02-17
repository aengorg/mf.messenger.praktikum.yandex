export default `
<div class="fast-links">
  {{#each state.links }}
    {{SLOT 'links' @index }}
  {{/each }}
</div>
`;
//# sourceMappingURL=template.js.map