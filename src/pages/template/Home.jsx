import React, { useState, useEffect } from 'react'
import '../style/Home.css'
import { Layout, NavMenu, Menu } from 'tea-component'
import { useSelector } from 'react-redux'

const { Header, Body, Sider, Content } = Layout

function Home() {
  const [selected, setSelected] = useState(null)

  const getMenuItemProps = (id) => ({
    selected: selected === id,
    onClick: () => setSelected(id),
  })

  const alphabets = useSelector((state) => state.alphabetReducer.alphabet)

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
          <Content.Header></Content.Header>
          <Content.Body></Content.Body>
        </Content>
      </Body>
    </Layout>
  )
}

export default Home
