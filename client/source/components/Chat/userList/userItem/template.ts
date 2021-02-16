export default `
<li class="{{ data.className }} {{ state.styleClasses }}" data-key={{ data.id }}>
  <div class="user-item_avatar">
    {{SLOT 'avatar' }}
  </div>
  <div class="user-item_name">
    {{ data.fullName }} 
    <div class="user-item_chat-name">
      {{#if data.chatName }}
        ({{ data.chatName }})
      {{/if}}
    </div>
  </div>
  <div class="user-item_action">
    {{#unless state.isAdmin }}
      {{SLOT 'button' }}
    {{/unless}}
  </div>
</li>
`;
