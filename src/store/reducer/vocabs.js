const defaultState = {
  showVocabList: [
    {
      word: 'redundant',
      meaning: '過多的，足夠的',
      synonyms: ['surfeit', 'plethora'],
      sentence: 'Skills which have been made redundant by technological advance.'
    },
  ],
  title: '内容标题',
  vocabA: [],
  vocabB: [],
  vocabC: [],
  vocabD: [],
  vocabE: [],
  vocabF: [],
  vocabG: [],
  vocabH: [],
  vocabI: [],
  vocabJ: [],
  vocabK: [],
  vocabL: [],
  vocabM: [],
  vocabN: [],
  vocabO: [],
  vocabP: [],
  vocabQ: [],
  vocabR: [],
  vocabS: [],
  vocabT: [],
  vocabU: [],
  vocabV: [],
  vocabW: [],
  vocabX: [],
  vocabY: [],
  vocabZ: [],
}

const vocabReducer = (state = defaultState, action) => {
  const target = 'vocab' + action.payload
  switch (action.type) {
    case 'DISPLAY_VOCAB':
      return Object.assign({}, state, {
        showVocabList: state[target],
      })
    case 'ADD_VOCAB':
      return Object.assign({}, state, {
        target: state[target].push(action.template),
      })
    default:
      return state
  }
}

export default vocabReducer
