import recast from 'recast'

const transform = ast => {
  const b = recast.types.builders
  let expressionStatements = 0
  const newAst = {
    ...ast,
    body: ast.body.map(node => {
      if (node.type === 'ExpressionStatement') {
        expressionStatements += 1
        return b.expressionStatement(
          b.callExpression(b.identifier('__onexpression__'), [node.expression])
        )
      }
      return node
    }),
  }
  return [expressionStatements, newAst]
}

const transformCode = code => {
  const [expressionStatements, newAst] = transform(recast.parse(code).program)
  return [expressionStatements, recast.print(newAst).code]
}

export default transformCode
