import React from 'react';
import { connect } from 'react-redux'

let PostItem = ({ articles }) => {
    if (articles) {
        console.log(articles);
        return (
            articles.map((single, index) => {
                if (single.text) {
                    return <article key={index}>
                        <h1>{single.title}</h1>
                        <p>{single.text}</p>
                    </article>
                }
                else {
                    return <article key={index}>
                        <h1>{single.title}</h1>
                    </article>
                }
            })
        )
    }
    return null;
}

const mapStateToProps = (state) => ({
    articles: state.placeholderData,
})

PostItem = connect(
    mapStateToProps,
    null
)(PostItem)

export default PostItem;

