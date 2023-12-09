export default function getInsertionObject (evalplanObject) {
  const { idEvaluationPlan, eval1, eval2, eval3, eval4, eval5, eval6, eval7, eval8, eval9, eval10 } = evalplanObject

  const insertObject = { idEvaluationPlan }

  if (eval1) {
    insertObject.eval1 = eval1
  } else {
    insertObject.eval1 = null
  }
  if (eval2) {
    insertObject.eval2 = eval2
  } else {
    insertObject.eval2 = null
  }
  if (eval3) {
    insertObject.eval3 = eval3
  } else {
    insertObject.eval3 = null
  }
  if (eval4) {
    insertObject.eval4 = eval4
  } else {
    insertObject.eval4 = null
  }
  if (eval5) {
    insertObject.eval5 = eval5
  } else {
    insertObject.eval5 = null
  }
  if (eval6) {
    insertObject.eval6 = eval6
  } else {
    insertObject.eval6 = null
  }
  if (eval7) {
    insertObject.eval7 = eval7
  } else {
    insertObject.eval7 = null
  }
  if (eval8) {
    insertObject.eval8 = eval8
  } else {
    insertObject.eval8 = null
  }
  if (eval9) {
    insertObject.eval9 = eval9
  } else {
    insertObject.eval9 = null
  }
  if (eval10) {
    insertObject.eval10 = eval10
  } else {
    insertObject.eval10 = null
  }
  return insertObject
}
