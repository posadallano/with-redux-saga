import React from 'react';
import { connect } from 'react-redux'

let PostItem = ({ article }) => (
    article.map((single, index) => (
        <article key={index}>
            <h1>{single.title}</h1>
            <p>{single.body}</p>
        </article>
    ))
)

const mapStateToProps = (state) => ({
    article: state.placeholderData,
})

PostItem = connect(
    mapStateToProps,
    null
)(PostItem)

export default PostItem;

