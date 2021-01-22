export default `
<label for="{{= data.name }}" class="field">
  <span class="field_label">{{= data.label }}</span>
  <input
    type="{{= data.type }}"
    class="field_input"
    value=""
    placeholder="{{= data.placeholder }}"
    name="{{= data.name }}"
  />
</label>
`;
