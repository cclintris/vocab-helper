export const displayVocab = (payload) => {
  return {
    type: 'DISPLAY_VOCAB',
    payload,
  }
}

export const addVocab = (payload) => {
  return {
    type: 'ADD_VOCAB',
    payload,
  }
}
