export default `
<div class="app">
  {{SLOT 'alert' }}
  {{SLOT 'modalAddChat' }}
  <div class="chat">
{{!-- chat_list --}}
    <div class="chat_list chat-list">

{{!-- chat-list_top --}}
      <header class="chat-list_top">
        {{#if data.chatItems }}
          {{SLOT 'fieldSearch' }}
        {{/if}}
        <div class="chat-list_actions">
          {{SLOT 'buttonAddChat' }}
        </div>
      </header>

{{!-- chat-list_mid --}}
      {{SLOT 'chatList' }}
      {{!-- <ul class="chat-list_mid">
        {{#each data.chatItems }}
          {{SLOT 'chatItems' @index }}
        {{else}}
          {{#if data.search }}
            <li class="bg bg--img-searching bg--pos-tc bg--size-s" style="height: 100%;"></li>
          {{else}}
            <li class="bg bg--img-empty bg--pos-tc bg--size-s" style="height: 100%;"></li>
          {{/if}}
        {{/each}} 
      </ul> --}}

{{!-- chat-list_bot --}}
      <footer class="chat-list_bot">
        {{SLOT 'linkProfile' }}
      </footer>
    </div>

{{!-- chat_area --}}
    <div class="chat_area">

{{!-- chat_top --}}
      <header class="chat_top-bar top-bar">
        {{!-- <div class="top-bar_avatar">
              <div class="avatar avatar--size-s">
                <img
                  src="./assets/images/test/      .png"
                  alt="avatar"
                  class="avatar_image"
                />
                <div class="status status--online avatar_status"></div>
              </div>
        </div>
        <div class="top-bar_chat-name">Александддра Яковлееева</div>
        <div class="top-bar_actions">
          <label for="search_user" class="field">
            <input
              type="text"
              class="field_input field_input--icon field_input--icon-search"
              name="search_user"
              tabindex="1"
            />
          </label>
          <button
            class="button button--icon button--icon-add-user button--size-s"
            tabindex="2"
          ></button>
          <button
            class="button button--icon button--icon-remove button--size-s"
            tabindex="3"
          ></button>
        </div> --}}
      </header>

{{!-- chat_messages --}}
      <main class="chat_messages">
        {{#unless data.chatList }}
          <div class="bg bg--img-solo bg--size-l bg--pos-tc" style="height: 100%;">
            <div class="text-center-page">
              {{ state.textWarningChat }}
            </div>
          </div>
        {{/unless}}
        {{#unless data.selectChat }}
          <div class="bg bg--img-dou bg--size-l bg--pos-tc" style="height: 100%;">
            <div class="text-center-page">
              {{ state.textWarningChat }}
            </div>
          </div>
        {{/unless}}


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
