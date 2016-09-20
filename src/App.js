import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogData from './BlogData';


// var Tags = React.createClass({
//   createTag: function() {
//     return (<div>Hi Lewis</div>)
//   },
//
//   render: function(){
//     return
//     (
//       <div>
//         <h1>Tags</h1>
//         <div>hi {this.createTag()}</div>
//       </div>
//     )
//   }
// })

var Tags = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Tags</h1>
      </div>
    );
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="tagbox col s12">
              <p>This div is 12-columns wide</p>
              <Tags />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
