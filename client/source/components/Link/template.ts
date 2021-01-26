export default `
  <a
    href="{{ data.url }}" 
    class="{{ state.styleClasses }}"
  >
    {{{ data.staticContent }}}
    {{ data.text }}
  </a>
`;
