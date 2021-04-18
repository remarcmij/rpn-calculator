import createElement from '../lib/createElement.js';

function DisplayRow(parent, props) {
  const { register } = props;
  const row = createElement(parent, {
    class: 'display-row',
  });
  createElement(row, { text: register });
  return createElement(row, { text: '0' });
}

export default DisplayRow;
