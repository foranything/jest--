function fetchData(callback){
  callback('peanut butter');
}

describe('Callback', () => {
  test('the data is peanut butter', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done(); // 이 줄을 지울경우 fetchData()가 완료 되는 즉시(콜백을 콜 하기 전) 테스트가 끝나서 실패하는것을 볼 수 있음
    }
    fetchData(callback);
  });
});
