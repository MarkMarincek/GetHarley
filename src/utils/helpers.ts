import { UserPreview } from 'models/interfaces';

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

export function capitalizeFirstLetter(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function fillArgumentsForPath(route: string, args: string | string[]) {
  if (!route) return '';
  const argsArray = Array.isArray(args) ? args : [args];

  let argsCounter = 0;

  return route
    .split('/')
    .map((slice) => {
      if (slice.charAt(0) !== ':') return slice;
      return argsArray[argsCounter++];
    })
    .join('/');
}

export function getFullName(user: UserPreview) {
  return `${capitalizeFirstLetter(user.title)}. ${user.firstName} ${user.lastName}`;
}
