import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const previousClicks = this.state.clicks;
    const newClicks = previousClicks + 1;
    this.setState({ clicks: newClicks });
  }

  render() {
    let className = 'color';

    if (this.state.clicks > 0 && this.state.clicks < 3) {
      className = 'default';
    } else if (this.state.clicks > 2 && this.state.clicks < 6) {
      className = 'blue';
    } else if (this.state.clicks > 5 && this.state.clicks < 9) {
      className = 'purple';
    } else if (this.state.clicks > 8 && this.state.clicks < 12) {
      className = 'red';
    } else if (this.state.clicks > 11 && this.state.clicks < 15) {
      className = 'orange';
    } else if (this.state.clicks > 14 && this.state.clicks < 18) {
      className = 'yellow';
    } else if (this.state.clicks >= 18) {
      className = 'white';
    } else {
      className = 'default';
    }
    return <button onClick={this.handleClick} className={className}>Hot Button</button>;
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);

export default HotButton;
