import React, { useState, useEffect } from 'react'
import '../style/AddVocab.css'
import { Form, Input, Tag, Button, Card } from 'tea-component'

function AddVocab() {
  const [tags, setTags] = useState([])

  //   useEffect(() => {
  //     console.log(tags)
  //   })

  return (
    <Card>
      <Card.Body title="加入新單字">
        <Form layout="default" hideLabel={false}>
          <Form.Item label="新單字">
            <Input placeholder="添加新單字" size="l" />
          </Form.Item>
          <Form.Item label="單字解釋">
            <Input placeholder="單字什麼意思" size="l" />
          </Form.Item>
          <Form.Item label="我的速記法">
            <Input placeholder="該怎麼記" size="l" />
          </Form.Item>
          <Form.Item label="同義詞">
            <Input
              size="l"
              placeholder="按下 enter 生成新單字標籤"
              onKeyDown={(e) =>
                e.keyCode === 13 &&
                e.currentTarget.value.trim() &&
                setTags([
                  ...tags,
                  { id: Date.now(), synonym: e.currentTarget.value.trim() },
                ])
              }
            />
          </Form.Item>
          <Tag.Group style={{ display: 'block', marginBottom: '20px' }}>
            {tags.map(({ synonym, id }) => (
              <Tag
                theme="success"
                key={id}
                onClose={() => setTags(tags.filter((tag) => tag.id !== id))}
                style={{ marginRight: '15px' }}
              >
                {synonym}
              </Tag>
            ))}
          </Tag.Group>
          <Form.Action>
            <Button type="weak">加入新單字</Button>
          </Form.Action>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddVocab
