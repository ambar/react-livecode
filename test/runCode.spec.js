import chunk from 'lodash/chunk'
import {runInNewContext} from '../src/runCode'

const sampleCode = `
  2 ** 3
  chunk(['a', 'b', 'c', 'd'], 2)
  new Map([['key1', 'value1'], ['key2', 'value2']])
  const never = new Promise(_ => {})
  never
`

describe('runCode', () => {
  it('should run non-module code', async () => {
    const {dispose, values} = runInNewContext(
      sampleCode,
      {chunk},
      {modules: false}
    )
    expect('chunk' in global).toBe(false)
    expect(values).toMatchObject([
      8,
      [['a', 'b'], ['c', 'd']],
      expect.any(Object),
      expect.any(Object),
    ])
    expect(document.querySelectorAll('iframe').length).toBe(1)
    dispose()
    expect(document.querySelectorAll('iframe').length).toBe(0)
  })

  it('should run module code', async () => {
    const {dispose, values} = runInNewContext(sampleCode, {chunk})
    expect('chunk' in global).toBe(false)
    // NOTE: jsdom does not support module scripts
    expect(values instanceof Promise).toBe(true)
    expect(document.querySelectorAll('iframe').length).toBe(1)
    dispose()
    expect(document.querySelectorAll('iframe').length).toBe(0)
  })
})
