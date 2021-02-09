export default `
<li class="chat-list_item chat-item">
  <div class="chat-item_left">
    <div class="chat-item_avatar">
      {{SLOT 'avatar' 1 }}
    </div>
  </div>
  <div class="chat-item_mid">
    <div class="chat-item_name-user">{{ data.name }}</div>
    <div class="chat-item_content">{{ data.content }}</div>
  </div>
  <div class="chat-item_right">
    <div class="chat-item_date">{{ data.date }}</div>
    {{#if data.badge }}
      <div class="chat-item_badge badge">{{ data.badge }}</div>
    {{/if}}
  </div>
</li>
`;
