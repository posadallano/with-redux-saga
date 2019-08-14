import { connect } from 'react-redux'

import Clock from './clock'

function Page ({
  lastUpdate,
  light,
  title
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
    </div>
  )
}

export default connect(state => state)(Page)
