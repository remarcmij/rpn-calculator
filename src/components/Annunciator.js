import createElement from '../lib/createElement.js';
import store from '../store.js';

function Annunciator(parent) {
  const container = createElement(parent, { class: 'annunciator' });

  store.subscribe(({ error }) => {
    if (error) {
      container.textContent = error.message;
      setTimeout(() => {
        container.textContent = '';
      }, 2000);
    }
  });
}

export default Annunciator;
