import React, { Component } from "react";
import { render } from "react-dom";
// Forms
import ReactForm from "./1-React-forms";
// HOC
import ReactHOC from "./2-higher-order-components";

class App extends Component{
  state = { currentLink: 0 }
  changeLink = () => {

  }
  render(){
    return (
      <ReactForm />
      // <table>
      //   <thead>
      //     <tr>
      //       <th>Topics</th>
      //       <th>Examples</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     <tr>
      //       <td>Forms</td>
      //       <td><button onClick={()=>this.changeLink}style={{color:'green'}}>Click this Link</a></td>
      //     </tr>
      //   </tbody>
      // </table>
    );
  }
};

render(
  <App />
  , document.getElementById("root"));
