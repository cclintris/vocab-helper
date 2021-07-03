const defaultState = {
  alphabet: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
}

const alphabetReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_Alphabet':
      return state
    default:
      return state
  }
}

export default alphabetReducer
