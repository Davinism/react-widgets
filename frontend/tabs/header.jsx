import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const headers = this.props.tabs.map(tab => (
      <div onClick={(e) => this.props.eventTrigger(tab.index, e)}
        key={tab.index}
        className={tab.index === this.props.index ? "selected" : ""}>
        <h1>{tab.title}</h1>
      </div>
    ));


    return (
      <div>
        {headers}
      </div>
    );
  }
}

export default Header;
