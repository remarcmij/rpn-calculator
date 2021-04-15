const cm2in = (x) => x / 2.54;
const in2cm = (x) => x * 2.54;

const mile2km = (x) => x * 1.609344;
const km2mile = (x) => x / 1.609344;

const yd2m = (x) => x * 0.9144;
const m2yd = (x) => x / 0.9144;

const ft2m = (x) => x * 0.3048;
const m2ft = (x) => x / 0.3048;

const gal2l = (x) => x * 3.785411784;
const l2gal = (x) => x / 3.785411784;

const lb2kg = (x) => x * 0.45359237;
const kg2lb = (x) => x / 0.45359237;

const oz2g = (x) => x * 31.1034768;
const g2oz = (x) => x / 31.1034768;

export default {
  cm2in: { fn: cm2in, label: 'cm → in' },
  in2cm: { fn: in2cm, label: 'in → cm' },
  mile2km: { fn: mile2km, label: 'mile → km' },
  km2mile: { fn: km2mile, label: 'km → mile' },
  yd2m: { fn: yd2m, label: 'yd → m' },
  m2yd: { fn: m2yd, label: 'm → yd' },
  ft2m: { fn: ft2m, label: 'ft → m' },
  m2ft: { fn: m2ft, label: 'm → ft' },
  gal2l: { fn: gal2l, label: 'gal → l' },
  l2gal: { fn: l2gal, label: 'l → gal' },
  lb2kg: { fn: lb2kg, label: 'lb → kg' },
  kg2lb: { fn: kg2lb, label: 'kg → lb' },
  oz2g: { fn: oz2g, label: 'oz → g' },
  g2oz: { fn: g2oz, label: 'g → oz' },
};
