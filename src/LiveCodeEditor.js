import React from 'react'
import Editor from 'react-simple-code-editor'
import {highlight, languages} from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

const LiveCodeEditor = props => {
  return <Editor highlight={code => highlight(code, languages.js)} {...props} />
}

export default LiveCodeEditor
