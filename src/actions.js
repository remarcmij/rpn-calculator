import * as processor from './processor/processor.js';
import store from './store.js';

export function execute(keyCode) {
  const state = processor.execute(store.getState(), keyCode);
  store.updateState(state);
  if (state.error) {
    store.updateState(processor.execute(state, 'noop'));
  }
}
