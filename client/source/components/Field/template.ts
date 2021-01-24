export default `
<label for="{{= data.name }}" class="field">
  <span class="field_label">{{= data.label }}</span>
  <input
    type="{{= data.type }}"
    class="{{= state.inputClasses }}"
    placeholder="{{= data.placeholder }}"
    name="{{= data.name }}"
  />
  {{ if(data.error) { }}
    <span class="field_error">{{= data.error }}</span>
  {{ } }}
</label>
`;
