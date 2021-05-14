import React from 'react';
import ReactDOM from 'react-dom';

let count = 0;

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      color: this.newColor
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
    count++;
    console.log(count);
  }

  render() {
    let className = 'color';

    if (count > 0 && count < 3) {
      className = 'default';
    } else if (count > 2 && count < 7) {
      className = 'blue';
    } else if (count > 5 && count < 10) {
      className = 'purple';
    } else if (count > 8 && count < 13) {
      className = 'red';
    } else if (count > 11 && count < 15) {
      className = 'orange';
    } else if (count > 14 && count < 17) {
      className = 'yellow';
    } else if (count >= 18) {
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
