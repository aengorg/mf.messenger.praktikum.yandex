export default `
<div class="app app--center bg bg--img-{{= data.bg }} bg--pos-tc bg--size-l">
  {{= SLOT('title') }}
  {{= SLOT('link') }}
</div>
`;
