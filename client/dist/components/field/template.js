export default `
<label for="{{ data.name }}" class="{{ state.fieldClasses }}">
  <span class="{{ state.labelClasses }}">{{ data.label }}</span>
  <input
    type="{{ data.type }}"
    class="{{ state.inputClasses }}"
    placeholder="{{ data.placeholder }}"
    name="{{ data.name }}"
  />
  {{SLOT 'error' }}
</label>
`;
//# sourceMappingURL=template.js.map