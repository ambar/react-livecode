import React from 'react'
import {render} from 'react-testing-library'
import chunk from 'lodash/chunk'
import LiveCode from '../src/LiveCode'

const sampleCode = `
  2 ** 3
  chunk(['a', 'b', 'c', 'd'], 2)
  new Map([['key1', 'value1'], ['key2', 'value2']])
  const never = new Promise(_ => {})
  never
`

describe('transformCode', () => {
  it('should render synchronously', () => {
    const {container} = render(
      <LiveCode autoFocus scope={{chunk}} code={sampleCode} modules={false} />
    )
    expect(
      container.querySelector('pre[class*=LiveCode]').children
    ).toMatchSnapshot()
  })
})
