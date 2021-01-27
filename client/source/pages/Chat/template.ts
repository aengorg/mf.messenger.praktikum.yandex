export default `
<div class="app">
  <div class="chat">
{{!-- chat_list --}}
    <div class="chat_list chat-list">

{{!-- chat-list_top --}}
      <header class="chat-list_top">
        {{SLOT 'fieldSearch' }}
        <div class="chat-list_actions">
          {{SLOT 'buttonAddUser' }}
          {{SLOT 'buttonCreateGroup' }}
        </div>
      </header>

{{!-- chat-list_mid --}}
      <ul class="chat-list_mid">
        <li class="chat-list_item chat-item">
          <div class="chat-item_left">
            <div class="chat-item_avatar">
              {{SLOT 'avatar' }}
            </div>
          </div>
          <div class="chat-item_mid">
            <div class="chat-item_name-user">Тимофей Козлов</div>
            <div class="chat-item_content">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>
          </div>
          <div class="chat-item_right">
            <div class="chat-item_date">01:17</div>
            <div class="chat-item_badge badge">3</div>
          </div>
        </li>
      </ul>

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
              <div class="avatar avatar--size-s">
                <img
                  src="../public/assets/images/test/photo3.png"
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
        </div>
      </header>

{{!-- chat_messages --}}
      <main class="chat_messages">
        <div class="message">
          <div class="message_top">
            <div class="message_avatar">
              <div class="avatar avatar--size-xs">
                <img
                  src="..//public/assets/images/test/photo3.png"
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
        </div>
      </main>

{{!-- chat_bot --}}
      <footer class="chat_bot-bar">
        <div class="bot-bar_actions">
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
        ></button>
      </footer>
    </div>

  </div>
</div>
`;
