import transformCode from './transformCode'

const createContext = () => {
  const iframe = document.createElement('iframe')
  iframe.hidden = true
  return {
    run(fn) {
      iframe.onload = () => {
        fn(iframe.contentWindow)
      }
      document.body.appendChild(iframe)
    },
    dispose() {
      iframe.remove()
    },
  }
}

/**
 * Create an `iframe` to compile and run code
 */
export const runInNewContext = (code, scope = {}, {modules = true} = {}) => {
  let ctx
  let dispose = () => {
    if (ctx) {
      ctx.dispose()
    }
  }

  const run = callback => {
    const [expressionStatements, newCode] = transformCode(code)
    ctx = createContext()
    ctx.run(global => {
      const values = []
      let expCount = 0
      Object.assign(global, scope, {
        __onexpression__: r => {
          values.push(r)
          expCount += 1
          if (expCount === expressionStatements) {
            callback(null, values)
          }
        },
      })

      // https://mdn.io/ErrorEvent
      // https://mdn.io/GlobalEventHandlers/onerror#Notes
      global.addEventListener('error', e => {
        e.preventDefault()
        callback(e.error || new Error(e.message)) // Safari returns null
      })

      const {document} = global
      const script = document.createElement('script')
      if (modules) {
        script.type = 'module'
      }
      script.textContent = newCode
      document.body.appendChild(script)
      script.remove()
    })
  }

  // async
  if (modules) {
    const promisify = fn =>
      new Promise((resolve, reject) =>
        fn((err, data) => (err ? reject(err) : resolve(data)))
      )
    return {values: promisify(run), dispose}
  }

  // sync
  let values
  try {
    run((err, data) => (values = err || data))
  } catch (err) {
    values = err
  }
  return {values, dispose}
}
