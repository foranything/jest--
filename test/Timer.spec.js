/* eslint-disable no-console */
function timerGame(callback) {
  console.log('Ready....go!');
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback();
  }, 1000);
}

jest.useFakeTimers(); // setTimeout, setInterval, clearTimeout, clearInterval 함수를 mock 함수로 사용 가능하게 함

test('waits 1 second before ending the game', () => {
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
