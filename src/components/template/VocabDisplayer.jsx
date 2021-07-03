import React from 'react'
import '../style/VocabDisplayer.css'
import { Card, H3, Tag } from 'tea-component'
import { useSelector } from 'react-redux'

function VocabDisplayer() {
  const showVocabList = useSelector((state) => state.vocabReducer.showVocabList)
  return (
    <>
      {showVocabList
        ? showVocabList.map((template) => (
            <Card bordered={false} key={template.word}>
              <Card.Header>
                <H3>{template.word}</H3>
              </Card.Header>
              <Card.Body title={template.meaning}>
                {template.sentence}
                <br />
                {template.synonyms
                  ? template.synonyms.map((word) => (
                      <Tag theme="success" key={word}>
                        {word}
                      </Tag>
                    ))
                  : null}
              </Card.Body>
            </Card>
          ))
        : 'No word yet ? Add some, go learn!'}
    </>
  )
}

export default VocabDisplayer
