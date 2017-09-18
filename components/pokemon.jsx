import React from 'react';
import Request from 'superagent';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      errors: '',
      name: '',
      type1: '',
      type2: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.resetState = this.resetState.bind(this);
  }


  handleChange(e) {
    e.preventDefault();
    this.setState({searchQuery: e.target.value})
  }

  search(e) {
    e.preventDefault();
    this.resetState();
    let apiUrl = `http://pokeapi.co/api/v2/pokemon/${this.state.searchQuery}`;
    Request.get(apiUrl).then((response, err) => {
      this.setState({
        name: response.body.forms[0].name,
        type1: response.body.types[0].type.name,
       })
       if (response.body.types[1]) {
         this.setState({
           type2: response.body.types[1].type.name
          })
       }
    }).catch( err => {
      this.setState({errors: 'Pokemon not found :('})
    })
  }

  resetState() {
    this.setState({
      errors: '',
      name: '',
      type1: '',
      type2: ''
    })
  }

  render() {
    return (
      <div>
        <span>Search for a Pokemon!</span>
        <br></br>
        <input ref='query'className='search-input' placeholder='type here' value={this.state.searchQuery} onChange={this.handleChange}></input>
        <button onClick={this.search}>Search</button>
        <div>
          <h3>Search Results</h3>
          <span>{this.state.name}</span>
          <br></br>
          <span>Type 1: {this.state.type1}</span>
          <br></br>
          {
            (this.state.type2 == '') ? null :
              <span>Type 2: {this.state.type2}</span>
          }
        </div>
        <span>{this.state.errors}</span>
      </div>
    )
  }
}



export default Pokemon;
