export default `
{{ if(data.text !== null) { }}
  <span class="field_error">{{= data.text }}</span>
{{ } }}
`;
