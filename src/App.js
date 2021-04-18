import DisplayWrapper from './components/DisplayWrapper.js';
import Keypad from './components/Keypad.js';
import ExtensionMenu from './components/ExtensionMenu.js';
import loadPlugins from './processor/loadPlugins.js';
import store from './store.js';
import createElement from './lib/createElement.js';

async function App(parent) {
  await loadPlugins();

  const mainContainer = createElement(parent, {
    use: 'main',
    class: 'main-container',
  });

  DisplayWrapper(mainContainer);
  ExtensionMenu(mainContainer);
  Keypad(mainContainer);

  // show state changes in the console
  store.subscribe((state) => console.log(state));
}
export default App;