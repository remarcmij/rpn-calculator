import { addFunction } from './processor.js';

export default async () => {
  try {
    const res = await fetch('./plugins/plugins.json');
    const { plugins } = await res.json();

    console.log(window.location.href);

    const promises = plugins.map((name) => import(`/plugins/${name}.js`));
    const modules = await Promise.all(promises);
    modules.forEach((module, index) => {
      Object.entries(module.default).forEach(([name, data]) => {
        const { fn, label } = data;
        addFunction(name, fn, plugins[index], label);
      });
    });
  } catch (err) {
    console.log(`Error loading plugins: ${err.message}`);
  }
};
