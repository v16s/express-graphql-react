import { render } from 'react-dom'
import React, { Component } from 'react'
import { Layout, Menu, Input, Select } from 'antd'
import Dashboard from './components/Dashboard'
import './styles/index.scss'
const { Header, Footer } = Layout
const Search = Input.Search

class Index extends Component {
  render () {
    return (
      <Layout className='layout' style={{ minHeight: '100vh' }}>
        <Header style={{ backgroundColor: 'transparent' }}>
          <div className='logo'>Chainist</div>
          <Menu
            className='nav'
            mode='horizontal'
            style={{ lineHeight: '64px', width: 'auto' }}
          >
            <Menu.Item key='1'>Home</Menu.Item>
            <Menu.Item key='2'>Bots</Menu.Item>
            <Menu.Item
              key='3'
              style={{
                width: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Search
                placeholder='input search text'
                onSearch={value => console.log(value)}
              />
            </Menu.Item>
          </Menu>
        </Header>
        <Dashboard />
        <Footer style={{ textAlign: 'center' }}>Arbitrage Research</Footer>
      </Layout>
    )
  }
}

render(<Index />, document.querySelector('.app'))
