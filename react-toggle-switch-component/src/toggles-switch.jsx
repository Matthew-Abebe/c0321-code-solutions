import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const toggleSwitch = document.getElementById('toggle-switch');
    const cirlce = document.getElementById('circle');
    const label = document.getElementById('label');

    if (this.state.toggle === false) {
      this.setState({ toggle: true });
      toggleSwitch.classList.remove('Off');
      toggleSwitch.classList.add('On');
      cirlce.classList.remove('Off');
      cirlce.classList.add('On');
      label.textContent = 'On';
    } else {
      this.setState({ toggle: false });
      toggleSwitch.classList.remove('On');
      toggleSwitch.classList.add('Off');
      cirlce.classList.remove('On');
      cirlce.classList.add('Off');
      label.textContent = 'Off';
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div onClick={(this.handleClick)} id="toggle-switch">
            <div id="circle"></div>
          </div>
          <span id="label"></span>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
