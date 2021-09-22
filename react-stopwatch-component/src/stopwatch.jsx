import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <div id="stopwatch"></div>
        <i className="fas fa-play fa-2x"></i>
      </div>
    );
  }
}

export default Stopwatch;
