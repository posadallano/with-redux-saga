import Link from 'next/link'
import { connect } from 'react-redux'

import Counter from './counter'
import Clock from './clock'

function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}

export default connect(state => state)(Page)
