import React from 'react'
import { connect } from 'react-redux'

import Page from '../components/page'

class Index extends React.Component {
  render () {
    return <Page title='Next - Redux Saga - Styled Components' />
  }
}

export default connect()(Index)
