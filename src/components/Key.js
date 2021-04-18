import createElement from '../lib/createElement.js';
import { arcMap } from '../processor/processor.js';
import store from '../store.js';

function Key(parent, props) {
  const { keyCode, label = '', classExtras } = props;
  const text = label || keyCode.toUpperCase();
  const key = createElement(parent, {
    use: 'button',
    type: 'button',
    'data-key': keyCode,
    text,
    class: `key ${classExtras}`,
  });

  if (keyCode in arcMap) {
    store.subscribe(({ arc }) => {
      if (arc) {
        key.classList.add('arc');
      } else {
        key.classList.remove('arc');
      }
    });
  }

  return key;
}

export default Key;
