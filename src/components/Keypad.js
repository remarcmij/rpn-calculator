import Key from './Key.js';
import createElement from '../lib/createElement.js';
import { execute } from '../actions.js';

function Keypad(parent) {
  const keypad = createElement(parent, { class: 'keypad-container' });

  // Row 1

  Key(keypad, { keyCode: 'pow', classExtras: 'key-span-4' }).innerHTML =
    '๐ฆ<sup>๐ฅ</sup>';
  Key(keypad, { keyCode: 'ln', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'log', classExtras: 'key-span-4' });
  Key(keypad, {
    keyCode: 'exp',
    classExtras: 'key-span-4 zoom',
  }).innerHTML = `๐<sup>๐ฅ</sub>`;
  Key(keypad, { keyCode: 'clr', classExtras: 'key-span-4' });

  // Row 2

  Key(keypad, { keyCode: 'sqrt', classExtras: 'key-span-4 zoom', label: 'โ๐ฅ' });
  Key(keypad, { keyCode: 'arc', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'sin', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'cos', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'tan', classExtras: 'key-span-4' });

  // Row 3

  Key(keypad, {
    keyCode: 'reciprocal',
    classExtras: 'key-span-4 zoom',
    label: 'ยน/๐ฅ',
  });
  Key(keypad, {
    keyCode: 'swap',
    classExtras: 'key-span-4 zoom',
    label: '๐ฅโ๏ธ๐ฆ',
  });
  Key(keypad, {
    keyCode: 'rollDown',
    classExtras: 'key-span-4 zoom',
    label: 'โกโ',
  });
  Key(keypad, { keyCode: 'sto', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'rcl', classExtras: 'key-span-4' });

  // Row 4

  Key(keypad, { keyCode: 'enter', classExtras: 'enter-key', label: 'ENTER โ' });
  Key(keypad, { keyCode: 'chs', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'eex', classExtras: 'key-span-4' });
  Key(keypad, { keyCode: 'clx', classExtras: 'key-span-4', label: 'CL๐ฅ' });

  // Row 5

  Key(keypad, { keyCode: 'sub', classExtras: 'key-span-5 zoom', label: 'โ' });
  Key(keypad, { keyCode: '7', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '8', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '9', classExtras: 'key-span-5' });

  // Row 6

  Key(keypad, { keyCode: 'add', classExtras: 'key-span-5 zoom', label: '+' });
  Key(keypad, { keyCode: '4', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '5', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '6', classExtras: 'key-span-5' });

  // Row 7

  Key(keypad, { keyCode: 'mul', classExtras: 'key-span-5 zoom', label: 'ร' });
  Key(keypad, { keyCode: '1', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '2', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '3', classExtras: 'key-span-5' });

  // Row 7

  Key(keypad, { keyCode: 'div', classExtras: 'key-span-5 zoom', label: 'รท' });
  Key(keypad, { keyCode: '0', classExtras: 'key-span-5' });
  Key(keypad, { keyCode: '.', classExtras: 'key-span-5', label: 'โข' });
  Key(keypad, { keyCode: 'pi', classExtras: 'key-span-5', label: '๐' });

  keypad.addEventListener('click', (event) => {
    const keyCode = event.target.dataset.key;
    keyCode && execute(keyCode);
  });
}

export default Keypad;
