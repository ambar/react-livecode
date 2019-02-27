import transformCode from '../src/transformCode'

describe('transformCode', () => {
  it('should add `onexpression`', () => {
    expect(
      transformCode(`
        2 ** 3
        chunk(['a', 'b', 'c', 'd'], 2)
        new Map([['key1', 'value1'], ['key2', 'value2']])
        const never = new Promise(_ => {})
        never
    `)
    ).toMatchSnapshot()
  })
})
