import React from 'react'
import './Login.css'
import { loginStrings } from '../../../strings/LoginStrings'

export default class LoginShortSide extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1 className='login-short-side-header'>
            {loginStrings.shortSide.header.en}
          </h1>
          <p className='login-short-side-text'>
            {loginStrings.shortSide.text.en}
          </p>
        </div>
        <div className="login-short-side-btn">
          <a onClick={this.onOfferButtonClick} href="#x">
            {loginStrings.shortSide.btn.en}
          </a>
        </div>
      </>
    );
  }
}