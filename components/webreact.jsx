import React from 'react';

class ReactPotato extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPotato(this.props.currentUserId);
  }

  render() {
    return (
      <div className='potato-div'>
        <span className='potato-text'> Picture of your potato:
          <img className="potato-pic" src={this.props.potato.imageUrl}/>
        </span>
      </div>
    )
  }
}

export default ReactPotato;
