import {
  camelCaseToSnakeCase,
  buildRequestParams,
  capitalizeFirstLetter,
  fillArgumentsForPath,
} from 'utils/helpers';

describe('helpers camelCaseToSnakeCase tests', () => {
  it('all tests should pass', () => {
    expect(camelCaseToSnakeCase('page')).toEqual('page');
    expect(camelCaseToSnakeCase('perPage')).toEqual('per_page');
    expect(camelCaseToSnakeCase('perPageP')).toEqual('per_page_p');
    expect(camelCaseToSnakeCase('cAmElCaSe')).toEqual('c_am_el_ca_se');
    expect(camelCaseToSnakeCase('PerPage')).toEqual('_per_page');
    expect(camelCaseToSnakeCase('FOOBAR')).toEqual('_f_o_o_b_a_r');
    expect(camelCaseToSnakeCase(null as unknown as string)).toEqual(null);
    expect(camelCaseToSnakeCase(undefined as unknown as string)).toEqual(null);
    expect(camelCaseToSnakeCase({} as unknown as string)).toEqual(null);
    expect(camelCaseToSnakeCase(1 as unknown as string)).toEqual(null);
    expect(camelCaseToSnakeCase(false as unknown as string)).toEqual(null);
  });
});

describe('helpers buildRequestParams tests', () => {
  it('all tests should pass', () => {
    expect(buildRequestParams(null as unknown as object)).toEqual('');
    expect(buildRequestParams(undefined as unknown as object)).toEqual('');
    expect(buildRequestParams({})).toEqual('');
    expect(buildRequestParams(1)).toEqual('');
    expect(buildRequestParams(true)).toEqual('');
    expect(buildRequestParams({ page: null })).toEqual('');
    expect(buildRequestParams({ page: undefined })).toEqual('');
    expect(buildRequestParams({ page: 1 })).toEqual('?page=1');
    expect(buildRequestParams({ page: '1' })).toEqual('?page=1');
    expect(buildRequestParams({ page: false })).toEqual('?page=false');
    expect(buildRequestParams({ page: {} })).toEqual('');
    expect(buildRequestParams({ page: {}, perPage: '123' })).toEqual('?per_page=123');
    expect(buildRequestParams({ page: 'page', perPage: '123' })).toEqual('?page=page&per_page=123');
    expect(buildRequestParams({ page: 'page', perPage: '123', tagId: 'id' })).toEqual(
      '?page=page&per_page=123&tag_id=id'
    );
    expect(buildRequestParams({ page: 'page', perPage: '123', tagId: undefined })).toEqual(
      '?page=page&per_page=123'
    );
    expect(buildRequestParams({ page: 'page', perPage: null, tagId: 'id' })).toEqual(
      '?page=page&tag_id=id'
    );
    expect(buildRequestParams({ page: {}, perPage: '123', tagId: 'id' })).toEqual(
      '?per_page=123&tag_id=id'
    );
  });
});

describe('helpers capitalizeFirstLetter tests', () => {
  it('all should properly handle different input strings', () => {
    expect(capitalizeFirstLetter('rabbit')).toEqual('Rabbit');
    expect(capitalizeFirstLetter('RABBIT')).toEqual('RABBIT');
    expect(capitalizeFirstLetter('rabbit space')).toEqual('Rabbit space');
    expect(capitalizeFirstLetter('r')).toEqual('R');
  });
  it('all should properly handle invalid or empty input', () => {
    expect(capitalizeFirstLetter('')).toEqual('');
    expect(capitalizeFirstLetter(null as unknown as string)).toEqual('');
    expect(capitalizeFirstLetter(undefined as unknown as string)).toEqual('');
  });
});

describe('helpers fillArgumentsForPath tests', () => {
  it('all should properly handle different input strings', () => {
    expect(fillArgumentsForPath('/path/path', [])).toEqual('/path/path');
    expect(fillArgumentsForPath('/:id/path', ['555'])).toEqual('/555/path');
    expect(fillArgumentsForPath('/path/:hash', ['234', '33'])).toEqual('/path/234');
    expect(fillArgumentsForPath('/:p1/p2', ['33'])).toEqual('/33/p2');
    expect(fillArgumentsForPath('/path/:id', '33')).toEqual('/path/33');
    expect(fillArgumentsForPath('/path/:', '33')).toEqual('/path/33');
    expect(fillArgumentsForPath('path/:id', '33')).toEqual('path/33');
  });
  it('all should properly handle invalid or empty input', () => {
    expect(fillArgumentsForPath(null as unknown as string, '33')).toEqual('');
    expect(fillArgumentsForPath(undefined as unknown as string, '33')).toEqual('');
    expect(fillArgumentsForPath('/path/:id/path', undefined as unknown as string)).toEqual(
      '/path//path'
    );
  });
});
