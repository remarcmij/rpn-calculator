const degreesToRadians = (x) => (x * Math.PI) / 180.0;
const radiansToDegrees = (x) => (x * 180.0) / Math.PI;

export default {
  radiansToDegrees: { fn: radiansToDegrees, label: 'radians → degrees' },
  degreesToRadians: { fn: degreesToRadians, label: 'degrees → radians' },
};
