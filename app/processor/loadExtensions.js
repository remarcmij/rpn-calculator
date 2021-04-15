import { addFunction } from './processor.js';

export default async () => {
  try {
    const res = await fetch('./plugins/extensions.json');
    const config = await res.json();

    const promises = config.extensions.map((name) =>
      import(`/plugins/${name}.js`)
    );
    const modules = await Promise.all(promises);
    modules.forEach((module) => {
      Object.entries(module.default).forEach(([name, data]) => {
        const { fn, category = 'Miscellaneous', label } = data;
        addFunction(name, fn, category, label);
      });
    });
  } catch (err) {
    console.log(`Error loading plugins: ${err.message}`);
  }
};
