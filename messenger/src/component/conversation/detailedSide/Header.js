import React from 'react'

export default class Header extends React.Component {
  render() {
    return <div className='header'>
      {
        this.props.avatar !== '' ?
          <img src={this.props.avatar} alt='avatar' /> : null
      }
      <div className='header-user'>{this.props.firstName} {this.props.lastName}</div>
    </div>
  }
}
