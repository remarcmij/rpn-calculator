import Annunciator from './Annunciator.js';
import Display from './Display.js';
import createElement from '../lib/createElement.js';

function DisplayWrapper(parent) {
  const displayContainer = createElement(parent, {
    class: 'displayContainer',
  });
  Annunciator(displayContainer);
  Display(displayContainer);
}

export default DisplayWrapper;
