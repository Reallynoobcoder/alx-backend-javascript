const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);
  const num = weakMap.get(endpoint);
  if (num < 4) weakMap.set(endpoint, num + 1);
  else throw new Error('Endpoint load is high');
}

export { weakMap, queryAPI };
