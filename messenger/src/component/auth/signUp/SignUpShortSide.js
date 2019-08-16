import React from 'react'
import './SignUp.css'
import { signUpStrings } from '../../../strings/SignUpStrings'

export default class SignUpShortSide extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1 className='sign-up-short-side-header'>
            {signUpStrings.shortSide.header.en}
          </h1>
          <p className='sign-up-short-side-text'>
            {signUpStrings.shortSide.text.en}
          </p>
        </div>
        <div className="sign-up-short-side-btn">
          <a href="#x">
            {signUpStrings.shortSide.btn.en}
          </a>
        </div>
      </>
    )
  }
}
