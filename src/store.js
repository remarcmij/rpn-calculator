import createStore from './lib/createStore.js';
import { execute } from './processor/processor.js';

export default createStore(execute(undefined, 'noop'));
