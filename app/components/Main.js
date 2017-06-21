import React from "react";

// very basic component to get started
const Main = () => (
  render: function() {

    return (

      <div className="form">
        <div>
          <h2><What is your Quote?</strong></h2>
          <p>
            <a href="#/Child1" className="btn btn-primary btn-lg">Show Child #1</a>
            <a href="#/Child2" className="btn btn-primary btn-lg">Show Child #2</a>
          </p>
        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>
 		<button id="update"> Darth Vadar invades! </button>
      </div>
    );
 });

export default Main;
