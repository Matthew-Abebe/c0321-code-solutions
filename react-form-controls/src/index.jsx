import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A email was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
        <input type="text" value={this.state.value} onChange={this.handleChange} name="emails"></input>
        </label>
        <button>Button</button>
      </form>
    );
  }
}

const newsLetterFormElement = (
  <div>
   <NewsLetterForm />
  </div>
);

ReactDOM.render(
  newsLetterFormElement,
  document.querySelector('#root')
);
