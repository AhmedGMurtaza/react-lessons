import React, { Component } from "react";
import { Motion, spring } from "react-motion";

const listStyles = {
  backgroundColor: "orange",
  padding: "5px",
  cursor:"pointer",
  listStyle:'none'
};

const styles = {
  color:'white'
};

const data = [
  {
    title: "First",
    desc: "helloworld here helloworld here helloworld here"
  },
  {
    title: "Second",
    desc: "helloworld here helloworld here helloworld here"
  },
  {
    title: "Third",
    desc: "helloworld here helloworld here helloworld here"
  }
];

class Slider extends Component {
  state = { openItem: 0 };

  openTab = id => {
    this.setState(prevState => {
      return {
        openItem: id
      };
    });
  };

  render() {
    const { openItem } = this.state;
    return (
      <div>
        {data.map((item, index) => 
          {
            return(<div styles={listStyles} onClick={()=>this.openTab(index)}>
              <div>
                <h3 style={styles}>{item.title}</h3>
                <Motion style={{opacity: spring(openItem === index ? 1 : 0)}}>
                  {
                    (value)=> (
                      <p style={{...value,display:openItem === index ? 'block' : 'none'}}>
                        {item.desc}
                      </p>)
                  }
                </Motion>
              </div>
            </div>);
          }
        )}
      </div>
    );
  }
}

export default Slider;
