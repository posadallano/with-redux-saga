import React from 'react';
import { connect } from 'react-redux'

let PostItem = ({ article, albums }) => {
    if (article) {
        return (
            article.map((single, index) => (
                <article key={index}>
                    <h1>{single.title}</h1>
                    <p>{single.body}</p>
                </article> 
            )) 
        )
    } 
    else if (albums) {
        return (
            albums.map((album, index) => (
                <article key={index}>
                    <h1>{album.title}</h1>
                </article> 
            )) 
        )
    }
    return null;
}

const mapStateToProps = (state) => ({
    article: state.placeholderData,
    albums: state.albumsData
})

PostItem = connect(
    mapStateToProps,
    null
)(PostItem)

export default PostItem;

