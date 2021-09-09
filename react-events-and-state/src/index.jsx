import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const button = document.getElementById('button');

    this.setState({ isClicked: true });

    if (this.state.isClicked === true) {
      button.textContent = 'Thanks!';
    } else {
      button.textContent = 'Click Me.';
    }
  }

  render() {
    return (
    <button id="button" onClick={this.handleClick}>Click Me.</button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
