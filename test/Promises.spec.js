function fetchData(isSuccess){
  return new Promise(function (resolve, reject){
    if (isSuccess) resolve('peanut butter');
    else reject('error')
  });
}

describe('Promise', () => {
  test('the data is peanut butter (than)', () => { //비동기 테스트 방법 1
    return fetchData(true).then(data => {
      expect(data).toBe('peanut butter');
    });
  });

  test('the data is peanut butter (resolve)', () => { //비동기 테스트 방법 2
    return expect(fetchData(true)).resolves.toBe('peanut butter');
  });

  test('the fetch fails with an error (catch)', () => { //비동기 테스트 에러 catch
    return fetchData(false).catch(e => expect(e).toMatch('error'));
  });

  test('the fetch fails with an error (reject)', () => { //비동기 테스트 reject
    return expect(fetchData(false)).rejects.toMatch('error')
  });
});