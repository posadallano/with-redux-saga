import { connect } from 'react-redux'

import Button from './Button';
import PostItem from './post'

function Page ({title}, props) {
  const album = 'Press to see Albums';
  const posts = 'Press to see Posts';
  
  return (
    <div>
      <h1>{title}</h1>
      <Button text={album} dataComp='album' />
      <Button text={posts} dataComp='post' />
      <PostItem />
    </div>
  )
}

export default connect(state => state)(Page)
