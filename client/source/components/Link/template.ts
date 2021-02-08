export default `
  <a
    target="{{ data.target }}"
    href="{{ data.url }}" 
    class="{{ state.styleClasses }}"
  >
    {{{ data.staticContent }}}
    {{ data.text }}
  </a>
`;
