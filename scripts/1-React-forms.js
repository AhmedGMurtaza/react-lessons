import React, { Component } from "react";
import { render } from "react-dom";
import "../styles.css";

class ReactForm extends Component {
  state = {
    surname: "G.Murtaza",
    firstName: "M.Ahmed",
    message: "helloworld from React!"
  };
  onFormSubmit = event => {
    const { firstName, surname, message } = event.target;
    event.preventDefault();
    this.setState({
      surname: surname.value,
      firstName: firstName.value,
      message: message.value
    });
  };
  render() {
    const { firstName, surname, message } = this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="first-name">
            <input name="firstName" defaultValue={firstName} />
          </label>
          <label htmlFor="sur-name">
            <input name="surname" defaultValue={surname} />
          </label>
          <textarea
            name="message"
            placeholder="your message here.."
            defaultValue={message}
          />
          <button type="submit">Submit</button>
        </form>
        <table>
          <tbody>
            <tr>
              <td>
                <b>First Name</b>
              </td>
              <td>{firstName}</td>
            </tr>
            <tr>
              <td>
                <b>Sur Name</b>
              </td>
              <td>{surname}</td>
            </tr>
            <tr>
              <td>
                <b>Message</b>
              </td>
              <td>{message}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReactForm;
