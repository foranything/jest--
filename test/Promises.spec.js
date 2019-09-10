function fetchData(isSuccess) {
  return new Promise(((resolve, reject) => {
    if (isSuccess) resolve('peanut butter');
    /* eslint-disable prefer-promise-reject-errors */
    else reject('error');
  }));
}

describe('Promise', () => {
  // 비동기 테스트 방법 1
  test('the data is peanut butter (than)', () => fetchData(true).then((data) => {
    expect(data).toBe('peanut butter');
  }));

  // 비동기 테스트 방법 2
  test('the data is peanut butter (resolve)', () => expect(fetchData(true)).resolves.toBe('peanut butter'));
  // 비동기 테스트 에러 catch
  test('the fetch fails with an error (catch)', () => fetchData(false).catch((e) => expect(e).toMatch('error')));

  // 비동기 테스트 reject
  test('the fetch fails with an error (reject)', () => expect(fetchData(false)).rejects.toMatch('error'));
});
