import React, { useState, useEffect } from 'react'
import '../style/Home.css'
import { Layout, NavMenu, Menu } from 'tea-component'
import { useSelector } from 'react-redux'
import VocabDisplayer from '../../components/template/VocabDisplayer'
import AddVocab from '../../components/template/AddVocab'
import DailyHelper from '../../components/template/DailyHelper'

const { Header, Body, Sider, Content } = Layout

function Home(props) {
  const whitelist = [
    '/A',
    '/B',
    '/C',
    '/D',
    '/E',
    '/F',
    '/G',
    '/H',
    '/I',
    '/J',
    '/K',
    '/L',
    '/M',
    '/N',
    '/O',
    '/P',
    '/Q',
    '/R',
    '/S',
    '/T',
    '/U',
    '/V',
    '/W',
    '/X',
    '/Y',
    '/Z',
  ]

  const [selected, setSelected] = useState(null)

  const getMenuItemProps = (id) => ({
    selected: selected === id,
    onClick: () => {
      setSelected(id)
      if (id === '錄入新單字') {
        id = 'addvocab'
      }
      if (id === '每日單字') {
        id = 'dailyhelper'
      }
      props.router.push('/' + id)
    },
  })

  const alphabets = useSelector((state) => state.alphabetReducer.alphabet)
  const title = useSelector((state) => state.vocabReducer.title)

  return (
    <Layout className="Home" style={{ height: '100vh', width: '100vw' }}>
      <Header className="header">
        <NavMenu
          left={
            <>
              <NavMenu.Item type="logo">
                <img
                  src="https://via.placeholder.com/32.png?text=LOGO"
                  alt="logo"
                />
              </NavMenu.Item>
              <NavMenu.Item>总览</NavMenu.Item>
            </>
          }
        />
      </Header>
      <Body>
        <Sider>
          <Menu collapsable theme="dark" title="Vocabs A~Z">
            {alphabets.map((alpha) => (
              <Menu.Item
                title={alpha}
                {...getMenuItemProps(alpha)}
                key={alpha}
              />
            ))}
          </Menu>
        </Sider>
        <Content>
          <Content.Header title={title} />
          <Content.Body>
            {whitelist.indexOf(props.location.pathname) !== -1 ? (
              <VocabDisplayer />
            ) : props.location.pathname === '/addvocab' ? (
              <AddVocab />
            ) : (
              <DailyHelper />
            )}
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  )
}

export default Home
