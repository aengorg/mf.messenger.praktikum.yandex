export default `
<button
  name="{{= data.name }}"
  type="{{= data.type }}"
  class="{{= state.styleClasses }}"
>
  {{= data.text }}
</button>
`;
