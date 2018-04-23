import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactForm from './1-React-form';

// const tableStyles = {
//   border:'1px solid red',
//   padding:'5px',
//   fontFamily:'verdana',
//   fontSize:'14px',
//   textAlign:'left'
// }

const App = () => {
  return(
    <ReactForm />
    // <table style={tableStyles}>
    //   <thead>
    //     <tr>
    //       <th>Topics</th>
    //       <th>Examples</th>
    //     </tr>      
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>Forms</td>
    //       <td><a href="" style={{color:'green'}}>Click this Link</a></td>
    //     </tr>
    //   </tbody>
    // </table>
  );
}

render(<App />, document.getElementById("root"));
