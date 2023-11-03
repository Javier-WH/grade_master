export default function getInsertionObject (evalplanObject) {
  const { idEvaluationPlan, eval1, eval2, eval3, eval4, eval5, eval6, eval7, eval8, eval9, eval10 } = evalplanObject
  const insertObject = { idEvaluationPlan }

  if (eval1) {
    insertObject.eval1 = eval1
  }
  if (eval2) {
    insertObject.eval2 = eval2
  }
  if (eval3) {
    insertObject.eval3 = eval3
  }
  if (eval4) {
    insertObject.eval4 = eval4
  }
  if (eval5) {
    insertObject.eval5 = eval5
  }
  if (eval6) {
    insertObject.eval6 = eval6
  }
  if (eval7) {
    insertObject.eval7 = eval7
  }
  if (eval8) {
    insertObject.eval8 = eval8
  }
  if (eval9) {
    insertObject.eval9 = eval9
  }
  if (eval10) {
    insertObject.eval10 = eval10
  }
  return insertObject
}
