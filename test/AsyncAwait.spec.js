// eslint-disable-next-line consistent-return
function fetchData(isSuccess) {
  if (isSuccess) return 'peanut butter';
  // eslint-disable-next-line no-undef
  fake();
}
describe('AsyncAwait', () => {
  test('the data is peanut butter', async () => {
    const data = await fetchData(true);
    expect(data).toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    try {
      await fetchData(false);
    } catch (e) {
      expect(e.name).toMatch('ReferenceError');
    }
  });
});
