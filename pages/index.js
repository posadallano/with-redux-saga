import React from 'react'
import { connect } from 'react-redux'

// import { loadData } from '../actions'
import Page from '../components/page'

class Index extends React.Component {
  // static async getInitialProps (props) {
  //   const { isServer } = props.ctx

  //   // if (!store.getState().placeholderData) {
  //   //   store.dispatch(loadData())
  //   // }

  //   return { isServer }
  // }

  render () {
    return <Page title='Next - Redux Saga - Styled Components' />
  }
}

export default connect()(Index)
