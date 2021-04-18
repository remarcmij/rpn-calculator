import DisplayRow from './DisplayRow.js';
import store from '../store.js';

const format = (x) => {
  const absX = Math.abs(x);
  return (absX > 1e10 || absX < 1e-2) && x !== 0
    ? x.toExponential()
    : x.toString();
};

function Display(parent) {
  const tRegister = DisplayRow(parent, { register: '𝑡' });
  const zRegister = DisplayRow(parent, { register: '𝑧' });
  const yRegister = DisplayRow(parent, { register: '𝑦' });
  const xRegister = DisplayRow(parent, { register: '𝑥' });

  store.subscribe(({ stack: [x, y, z, t], buffer }) => {
    tRegister.textContent = format(t);
    zRegister.textContent = format(z);
    yRegister.textContent = format(y);
    xRegister.textContent = buffer || format(x);
  });
}

export default Display;
