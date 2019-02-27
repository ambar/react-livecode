import {useState, useMemo, useEffect} from 'react'
import isPromise from 'is-promise'
import {runInNewContext} from './runCode'

const useLiveCode = (code, scope = {}, options = {}) => {
  const [asyncValues, setValues] = useState(null)

  const {values, dispose} = useMemo(
    () => runInNewContext(code, scope, options),
    [code, ...Object.values(scope), ...Object.values(options)]
  )

  useEffect(() => dispose, [dispose])

  const isAsyncValues = isPromise(values)
  if (isAsyncValues) {
    values.then(setValues, setValues)
  }

  return isAsyncValues ? asyncValues : values
}

export default useLiveCode
