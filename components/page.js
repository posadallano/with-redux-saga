import { connect } from 'react-redux'

import Button from './Button';
import PostItem from './post'

function Page ({title}) {
  return (
    <div>
      <h1>{title}</h1>
      <Button />
      <PostItem />
    </div>
  )
}

export default connect(state => state)(Page)
