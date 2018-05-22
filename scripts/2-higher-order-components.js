import React, { Component } from "react";
import PropTypes from "prop-types";

class FetchItems extends Component {
  constructor() {
    super();
  }
  state = {
    data: []
  };
  fetchHere = url => {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open("GET", url);
      req.onload = function() {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = function() {
        reject(Error(req.responseText));
      };
      req.send();
    });
  };
  componentDidMount() {
    this.fetchHere("https://restcountries.eu/rest/v2/all").then(countries =>
      this.setState({
        data: countries
      })
    );
  }
  
  decorateItems = data => {
    if (typeof data !== "array") {
      return null;
    }
    const countries = JSON.parse(data);
    console.log(countries.map(country => <li>{country}</li>));
    return countries.map(country=><li>{country}</li>);
  }
  render() {
    return <ul></ul>;
  }
}

export default FetchItems;
