import React from "react";

// very basic component to get started
const Main = () => (
  render: function() {

    return (

      <div className="form">
        <div>
          <h2><What is your Quote?</strong></h2
        </div>

        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>
 		<button id="update"> </button>
      </div>
    );
 });

export default Main;
