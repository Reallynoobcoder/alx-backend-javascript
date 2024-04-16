export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  let result = '';
  let flag = 0;
  for (const i of set) {
    const item = String(i);
    if (item.startsWith(startString)) {
      if (flag === 1) result += '-';
      result += item.replace(startString, '');
      flag = 1;
    }
  }
  return result;
}
