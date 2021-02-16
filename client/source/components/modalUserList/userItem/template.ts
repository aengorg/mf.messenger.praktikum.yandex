export default `
<li class="{{ data.className }} {{ state.styleClasses }}" data-key={{ data.id }}>
  {{SLOT 'avatar' }}
  {{ data.fullName }} {{ data.chatName }}
  {{#unless state.isAdmin }}
    {{SLOT 'buttonDelete' }}
  {{/unless}}
</li>
`;
