export default function hex2rgb(hex, percent = 0) {
  if (hex.length < 7) return null;
  const regEx = /#[\da-fA-F]{6,6}/;
  if (!regEx.test(hex)) return 'Ошибка!';

  if (percent) return hex2rgb(shadeColor(hex, percent));

  const r = hex.slice(1, 3);
  const g = hex.slice(3, 5);
  const b = hex.slice(5, 7);

  const R = parseInt(r, 16);
  const G = parseInt(g, 16);
  const B = parseInt(b, 16);

  return `rgb(${R}, ${G}, ${B})`;
}

export function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

export function isDarkRgb(rgb) {
  const regex = /rgb\(\d.*\d\)/;
  if (!regex.test(rgb)) return false;
  const nums = rgb.match(/\d.*\d/)[0].split(',').map(s => +s);
  const sum = nums.reduce((acc, el) => acc + el, 0);
  console.log('sum', sum);
  if (sum < 450) return true;
  return false;
}

