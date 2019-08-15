import { connect } from 'react-redux'

import PostItem from './post'

function Page ({
  title
}) {
  return (
    <div>
      <h1>{title}</h1>
      <PostItem />
    </div>
  )
}

export default connect(state => state)(Page)
