import React from 'react';
import { connect } from 'react-redux';
import { loadMoreData, loadData } from '../actions';

let Button = ({dispatch}) => {
   
   const handleLoadData = () => {
      dispatch(loadMoreData())
   }
   return (
      <button onClick={handleLoadData}>Press to see posts</button>
   );

}

Button = connect()(Button);
export default Button;