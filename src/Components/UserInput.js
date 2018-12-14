import React, {Component} from 'react';
import './UserInput.scss';

class UserInput extends Component {
  handleChange = event => this.props.handleChange(this.props.id, event.target.value);
  
  render() {
    return (
      <div>
        <input id={this.props.id} type="text" onChange={this.handleChange} value={this.props.username} className='form-control'/>
      </div>
    );
  }
}

export default UserInput;