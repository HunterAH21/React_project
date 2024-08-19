import React from 'react';
import ReactDOM from 'react-dom';

import APP from './api';
class Reactstate extends React.Component{
  render(){
    return (
      <>
        <APP />
      </>
    );
  }
}
ReactDOM.render(<Reactstate />, document.getElementById('root'));