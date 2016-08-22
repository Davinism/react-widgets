import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    const newSearch = e.target.value;
    this.setState({ search: newSearch });
  }

  render() {
    let self = this;
    let names = this.props.list.filter((name) => {
      return name.includes(self.state.search);
    });

    let namesLi = names.map((name, idx) => <li key={idx}>{name}</li>);

    return(
      <div>
        <h1>Autocomplete</h1>
        <input onChange={this.updateSearch} value={this.state.search}/>
        <ul>
          {namesLi}
        </ul>
      </div>
    );
  }
}

export default Autocomplete;
