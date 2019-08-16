import { connect } from 'react-redux';
import { loadMoreData, loadData } from '../actions';

let Button = ({dispatch, text, dataComp}) => {   
   const handleLoadData = () => {
      if (dataComp === 'album') {
         dispatch(loadMoreData())
      }
      if (dataComp === 'post') {
         dispatch(loadData())
      }
   }
      return (
         <div>
            <button onClick={handleLoadData}>{text}</button>
         </div>
      );
}

Button = connect()(Button);
export default Button;