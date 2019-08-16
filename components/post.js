import React from 'react';
import { connect } from 'react-redux'

let PostItem = ({ articles, albums }) => {
    if (articles) {
        return (
            articles.map((single, index) => (
                <article key={index}>
                    <h1>{single.title}</h1>
                    <p>{single.body}</p>
                </article> 
            )) 
        )
    } 
    if (albums) {
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
    articles: state.placeholderData,
    albums: state.albumsData
})

PostItem = connect(
    mapStateToProps,
    null
)(PostItem)

export default PostItem;

