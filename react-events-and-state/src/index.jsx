import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    let text = 'Click Me.';
    const isClicked = this.state.isClicked;

    if (isClicked === true) {
      text = 'Thanks!';
    }

    const button = <button onClick={this.handleClick}>{text}</button>;

    return (
      <div>
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
