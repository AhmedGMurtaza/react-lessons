import React, { Component } from 'react';
import { render } from 'react-dom';

class ReactForm extends Component{
  state = {}
  onFormSubmit = () => {

  }
  render(){
    return(
      <form
        onSubmit={this.onFormSubmit}>
        <label for="first-name">
          <input
            name="firstName"
            defaultValue="Muhammad Ahmed"
          />
        </label>
        <label for="sur-name">
          <input
            name="surName"
            defaultValue="Ghulam Murtaza"
          />
        </label>
      </form>
    );
  }
}

render(<ReactForm />, document.getElementById("root"));
