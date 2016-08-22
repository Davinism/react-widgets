import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };

    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(index, e) {
    this.setState({index: index});
  }

  render() {
    const currentTab = this.props.tabs[this.state.index];

    const currentArticle = (
      <article>{currentTab.content}</article>
    );

    return (
      <div>
        <Header
          tabs={this.props.tabs}
          index={this.state.index}
          eventTrigger={this.updateIndex}/>
        {currentArticle}
      </div>
    );
  }
}

export default Tabs;
