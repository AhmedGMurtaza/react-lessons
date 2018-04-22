import React from 'react';
import { render } from 'react-dom';

const styles = { 
  background:'gray',
  color:'black'
}

class ContentToggle extends React.Component {
  state = { isOpen: this.props.isOpen };

  componentWillReceiveProps(nextProps) {
     if (nextProps.isOpen != null) {
       this.setState({ isOpen: nextProps.isOpen });
     }
   }

   handleClick = () => {
     this.setState({ isOpen: !this.state.isOpen }, () => {
       if (this.props.onToggle) {
 
this.props.onToggle(this.state.isOpen);
       }
     });
   };

   render() {
     let summaryClassName = "content-toggle-summary";

     if (this.state.isOpen) {
       summaryClassName += " content-toggle-summary-open";
     }

     return (
       <div {...this.props} className="content-toggle">
         <button onClick={this.handleClick} className={summaryClassName}>
           {this.props.summary}
         </button>
         <div className="content-toggle-details" 
         style={styles}>
           {this.state.isOpen && this.props.children}
         </div>
       </div>
     );
   }
 }

 class App extends React.Component {
   state = {
     allOpen: true,
     tacos: [
       { id: 0, name: "Carnitas", src: "tacos/carnitas.png" },
       { id: 1, name: "Pollo", src: "tacos/pollo.png" },
       { id: 2, name: "Asada", src: "tacos/asada.png" }
     ]
   };

   openAll = () => {
     this.setState({ allOpen: true });
   };

   closeAll = () => {
     this.setState({ allOpen: false });
   };

   render() {
     return (
       <div>
         {this.state.allOpen ? (
           <button onClick={this.closeAll}>Close All</button>
         ) : (
           <button onClick={this.openAll}>Open All</button>
         )}
         <div>
           {this.state.tacos.map(taco => (
             <ContentToggle
               key={taco.name}
               style={{ width: 300 }}
               summary={taco.name}
               isOpen={this.state.allOpen}
             >
               <div
                 style={{
                   height: 200,
                   background: `url(${taco.src})`,
                   backgroundSize: "cover"
                 }}
               />
             </ContentToggle>
           ))}
         </div>
       </div>
     );
   }
 }

render(<App />, document.getElementById("root"));
