import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    this.updateTime = this.updateTime.bind(this);
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  updateTime() {
    this.setState({ date: new Date() });
  }

  render() {
    return(<div>{ this.state.date.toString() }</div>);
  }
}

export default Clock;
