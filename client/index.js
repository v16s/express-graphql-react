import React from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

export default class Index extends React.Component {
  render () {
    return <div>Hey</div>
  }
}
render(<Index />, document.querySelector('.app'))
