/** @jsx jsx */
import {jsx} from '@emotion/core'
import React, {useState} from 'react'
import prettyFormat from 'pretty-format'
import dedent from 'dedent'
import isPromise from 'is-promise'
import useLiveCode from './useLiveCode'
import LiveCodeEditor from './LiveCodeEditor'

const inspectPromise = {
  test: isPromise,
  serialize(array, config, indentation, depth, refs, printer) {
    // TODO: inspect async value
    return 'Promise'
  },
}

const safeTry = (fn, fallback) => {
  try {
    return fn()
  } catch (e) {
    return fallback(e)
  }
}

const prettyPrint = obj =>
  prettyFormat(obj, {
    min: true,
    printFunctionName: true,
    plugins: [inspectPromise],
  })

const LiveCode = ({
  code: initialCode = '',
  scope = {},
  split = 'horizontal',
  autoFocus = false,
  modules = true,
  ...nativeProps
}) => {
  const [code, setCode] = useState(() => dedent(initialCode))
  const isVertical = split === 'vertical'

  const serialize = ret => {
    // module script loading
    if (ret == null) {
      return ' '
    }

    // evaluation ok
    if (Array.isArray(ret)) {
      return ret.length
        ? ret.map((line, i) => <div key={i}>&rsaquo; {prettyPrint(line)}</div>)
        : ' '
    }

    // evaluation error
    return <div>&rsaquo; {prettyPrint(ret)}</div>
  }

  const values = useLiveCode(code, scope, {modules})

  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        margin: '1em auto',
        maxWidth: '100vw',
        maxHeight: '100vh',
        fontSize: '0.85em',
        lineHeight: '1.45',
        borderRadius: '3px',
        boxShadow: '0 1px 5px rgba(0,0,0,.1)',
        fontFamily: '"Fira code", "Fira Mono", Menlo, Consolas, monospace',
        flexDirection: isVertical ? 'column' : 'row',
      }}
      {...nativeProps}
    >
      <LiveCodeEditor
        autoFocus={autoFocus}
        value={code || ' '}
        onValueChange={code => setCode(code)}
        padding={10}
        css={{
          width: isVertical ? '100%' : '50%',
          minHeight: '5em',
          color: '#222',
          backgroundColor: '#fafafa',
          outline: 'none',
          fontSize: 'inherit !important',
          overflow: 'auto',
          borderRadius: isVertical ? '0 3px 3px 0' : '3px 0 0 3px',
          textarea: {
            outline: 'none',
          },
          '.token': {
            backgroundColor: 'inherit!important',
          },
        }}
      />
      <pre
        css={{
          width: isVertical ? '100%' : '50%',
          margin: '0',
          padding: '10px',
          fontFamily: 'inherit',
          fontWeight: 300,
          color: '#eee',
          backgroundColor: '#282c34',
          overflow: 'auto',
          WebkitOverflowScrolling: 'auto',
          borderRadius: isVertical ? '0 0 3px 3px' : '0 3px 3px 0',
          boxSizing: 'border-box',
        }}
      >
        {safeTry(() => serialize(values), serialize)}
      </pre>
    </div>
  )
}

export default LiveCode
