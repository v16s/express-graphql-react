import React, { Component } from 'react'
import { Layout, Row } from 'antd'
export default class Dashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ticker: undefined
    }
    this.getTicker = this.getTicker.bind(this)
  }
  getTicker (pair, symbol) {
    this.setState({ ticker: undefined }, () => {})
  }

  render () {
    return <Layout.Content style={{ padding: '0 50px' }} />
  }
}
