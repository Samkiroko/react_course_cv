import React, { Component } from 'react';

class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comments: '',
      topic: 'react',
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.username} ${this.state.comments}${this.state.comments}`
    );
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="">Comments</label>
          <textarea
            name=""
            id=""
            cols="10"
            rows="2"
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form1;
