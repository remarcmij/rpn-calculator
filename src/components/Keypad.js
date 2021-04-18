import Key from './Key.js';
import createElement from '../lib/createElement.js';
import { execute } from '../actions.js';

function Keypad(parent) {
  const keypad = createElement(parent, { class: 'keypad-container' });

  // Row 1

  Key(keypad, { keyCode: 'pow', classExtras: 'key-span-4' }).innerHTML =
    '𝑦<sup>𝑥</sup>';
  Key(keypad, { keyCode: 'ln', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'log', classExtras: 'key-span-4' });
  Key(keypad, {
    keyCode: 'exp',
    classExtras: 'key-span-4 zoom',
  }).innerHTML = `>𝑒<sup>𝑥</sub>`;
  Key(keypad, { keyCode: 'clr', classExtras: 'key-span-4' });

  // Row 2

  Key(keypad, { keyCode: 'sqrt', classExtras: 'key-span-4 zoom', label: '√𝑥' });
  Key(keypad, { keyCode: 'arc', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'sin', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'cos', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'tan', classExtras: 'key-span-4' });

  // Row 3

  Key(keypad, {
    keyCode: 'reciprocal',
    classExtras: 'key-span-4 zoom',
    label: '¹/𝑥',
  });
  Key(keypad, {
    keyCode: 'swap',
    classExtras: 'key-span-4 zoom',
    label: '𝑥↔︎𝑦',
  });
  Key(keypad, {
    keyCode: 'rollDown',
    classExtras: 'key-span-4 zoom',
    label: '≡↓',
  });
  Key(keypad, { keyCode: 'sto', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'rcl', classExtras: 'key-span-4' });

  // Row 4

  Key(keypad, { keyCode: 'enter', classExtras: 'enter-key', label: 'ENTER ↑' });
  Key(keypad, { keyCode: 'chs', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'eex', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'clx', classExtras: 'key-span-4', label: 'CL𝑥' });

  // Row 5

  Key(keypad, { keyCode: 'sub', classExtras: 'key-span-5 zoom', label: '−' });
  Key(keypad, { keyCode: '7', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '8', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '9', classExtras: 'key-span-5' });

  // Row 6

  Key(keypad, { keyCode: 'add', classExtras: 'key-span-5 zoom', label: '+' });
  Key(keypad, { keyCode: '4', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '5', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '6', classExtras: 'key-span-5' });

  // Row 7

  Key(keypad, { keyCode: 'mul', classExtras: 'key-span-5 zoom', label: '×' });
  Key(keypad, { keyCode: '1', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '2', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '3', classExtras: 'key-span-5' });

  // Row 7

  Key(keypad, { keyCode: 'div', classExtras: 'key-span-5 zoom', label: '÷' });
  Key(keypad, { keyCode: '0', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '.', classExtras: 'key-span-5', label: '•' });
  Key(keypad, { keyCode: 'pi', classExtras: 'key-span-5', label: '𝜋' });

  keypad.addEventListener('click', (event) => {
    const keyCode = event.target.dataset.key;
    execute(keyCode);
  });
}

export default Keypad;
