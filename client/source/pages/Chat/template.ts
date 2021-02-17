export default `
<div class="app">
  {{SLOT 'alert' }}
  {{SLOT 'modalCreateChat' }}
  {{SLOT 'modalAddChatUser' }}
  {{SLOT 'modalListUser' }}
  <div class="chat">
{{!-- chat_list --}}
    <div class="chat_list chat-list">

{{!-- chat-list_top --}}
      <header class="chat-list_top">
        {{#if data.chatItems }}
          {{SLOT 'fieldSearchUser' }}
        {{/if}}
        <div class="chat-list_actions">
          {{SLOT 'buttonCreateChat' }}
        </div>
      </header>

{{!-- chat-list_mid --}}
      {{SLOT 'chatList' }}

{{!-- chat-list_bot --}}
      <footer class="chat-list_bot">
        {{SLOT 'linkProfile' }}
      </footer>
    </div>

{{!-- chat_area --}}
    <div class="chat_area">

{{!-- chat_top --}}
      <header class="chat_top-bar top-bar">
        <div class="top-bar_avatar">
          {{SLOT 'userAvatar' }}
        </div>
        <div class="top-bar_chat-name">
          {{ data.userName }}
        </div>
        {{#if state.selectChatId }}
          <div class="top-bar_actions">
            {{SLOT 'fieldSearchMessage' }}
            {{SLOT 'buttonChatAddUser' }}
            {{SLOT 'buttonChatSettingUsers' }}
            {{SLOT 'buttonChatSetting' }}
          </div>
        {{/if}}
      </header>

{{!-- chat_messages --}}
      <main class="chat_messages">
        {{#unless data.chatItems }}
          <div class="bg bg--img-solo bg--size-l bg--pos-tc" style="height: 100%;">
            <div class="text-center-page">
              {{ state.textWarningChat }}
            </div>
          </div>
        {{/unless}}
        {{#unless state.selectChatId }}
          <div class="bg bg--img-dou bg--size-l bg--pos-tc" style="height: 100%;">
            <div class="text-center-page">
              {{ state.textWarningChat }}
            </div>
          </div>
        {{/unless}}
        <div class="bg bg--img-message-sent bg--size-l bg--pos-tc" style="height: 100%;">
          <div class="text-center-page">
            {{ state.textWarningChat }}
          </div>
        </div>


        {{!-- <div class="message">
          <div class="message_top">
            <div class="message_avatar">
              <div class="avatar avatar--size-xs">
                <img
                  src="./assets/images/test/photo3.png"
                  alt="avatar"
                  class="avatar_image"
                />
                <div class="status status--online avatar_status"></div>
              </div>
            </div>
            <div class="message_name-user">Александддра Яковлееева</div>
            <div class="message_date">12:15</div>
          </div>
          <div class="message_bot">
            <div class="message_content">
              Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
              Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate
              quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum
              sit amet ipsum vitae mauris mattis vulputate lacinia nec
              neque.
            </div>
          </div>
        </div> --}}
      </main>

{{!-- chat_bot --}}
      <footer class="chat_bot-bar">
        {{!-- <div class="bot-bar_actions">
          <button
            class="button button--icon button--icon-add-photo button--size-s"
          ></button>
          <button
            class="button button--icon button--icon-add-file button--size-s"
          ></button>
          <button
            class="button button--icon button--icon-location button--size-s"
          ></button>
          <button
            class="button button--icon button--icon-emoji button--size-s"
          ></button>
        </div>

        <label for="search_user" class="field bot-bar_input">
          <input
            type="text"
            class="field_input field_input--width-unlimit"
            name="search_user"
            tabindex="1"
          />
        </label>

        <button
          class="button button--icon button--icon-send button--size-s bot-bar_send"
        ></button> --}}
      </footer>
    </div>

  </div>
</div>
`;
