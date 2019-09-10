// 테스트 대상
function forEach(items, callback) {
  for (let index = 0; index < items.length; index += 1) {
    callback(items[index]);
  }
}

it('mock property', () => {
  // mock 함수를 선언함
  const mockCallback = jest.fn((x) => 42 + x);

  // 함수를 실행 하는 도중에 여러가지 정보를 mock함수의 property에 저장한다.
  forEach([0, 1], mockCallback);


  // mock 함수의 프로퍼티에 저장된 여러가지 프로퍼티들

  // The mock function is called twice
  expect(mockCallback.mock.calls.length).toBe(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

it('Mock Return Values', () => {
  const myMock = jest.fn();
  expect(myMock()).toBe(undefined);

  // 여러번 실행 되었을 때, 결과값을 지정해 줌
  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);

  expect(myMock()).toBe(10);
  expect(myMock()).toBe('x');
  expect(myMock()).toBe(true);
  expect(myMock()).toBe(true);
});
