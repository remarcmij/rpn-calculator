import createElement from '../lib/createElement.js';
import { getImportedFunctions } from '../processor/processor.js';
import { execute } from '../actions.js';

function addCategory(select, functions, category) {
  const optGroup = createElement(select, {
    use: 'optgroup',
    label: category,
    class: 'category-header',
  });

  functions
    .filter(({ func }) => func.category === category)
    .forEach(({ name, func }) => {
      createElement(optGroup, {
        use: 'option',
        value: name,
        text: func.label,
      });
    });
}

function ExtensionMenu(parent) {
  const container = createElement(parent, { class: 'menu-container' });
  const select = createElement(container, {
    use: 'select',
    class: 'extension-select',
  });
  const button = createElement(container, {
    use: 'button',
    type: 'button',
    text: 'GO',
    class: 'extension-btn zoom',
  });

  const functions = getImportedFunctions();

  const categories = [
    ...functions.reduce((set, { func }) => {
      if (func.category) {
        set.add(func.category);
      }
      return set;
    }, new Set()),
  ];

  categories.forEach((category) => addCategory(select, functions, category));

  select.addEventListener('change', () => {
    execute(select.value);
  });

  button.addEventListener('click', () => {
    execute(select.value);
  });
}

export default ExtensionMenu;
