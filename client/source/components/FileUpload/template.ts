export default `
<div class="file-upload">
  <label for="{{ data.name }}" class="file-upload_label text--size-3">
    {{ data.text }}
  </label>
  <input type="file" name="{{ data.name }}" class="file-upload_input">
</div>
`;
