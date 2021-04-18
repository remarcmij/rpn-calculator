import createElement from '../lib/createElement.js';

function Key(parent, props) {
  const { keyCode, label = '', classExtras } = props;
  const text = label || keyCode.toUpperCase();
  return createElement(parent, {
    use: 'button',
    type: 'button',
    'data-key': keyCode,
    text,
    class: `key ${classExtras}`,
  });
}

export default Key;
