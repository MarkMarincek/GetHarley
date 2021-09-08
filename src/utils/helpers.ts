export const camelCaseToSnakeCase = (str: string) => {
  if (typeof str !== 'string') {
    return null;
  }
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

export function buildRequestParams(params: {}) {
  let str = '';
  if (!params || typeof params !== 'object') {
    return str;
  }
  Object.entries(params).forEach(([key, value]) => {
    if (value == null || !['string', 'number', 'boolean'].includes(typeof value)) return;
    str +=
      str.length === 0
        ? `?${camelCaseToSnakeCase(key)}=${value}`
        : `&${camelCaseToSnakeCase(key)}=${value}`;
  });
  return str;
}
