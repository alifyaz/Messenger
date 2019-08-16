import React from 'react'
import './SignUp.css'
import { signUpStrings } from '../../../strings/SignUpStrings'

export default class SignUpDetailedSide extends React.Component {
  render() {
    return (
      <>
        <h1 className='sign-up-detailed-side-header'>
          {signUpStrings.detailedSide.header.en}
        </h1>
        <form className='sign-up-form'>
          <label>
            <input
              type='text'
              name='userName'
              placeholder={signUpStrings.detailedSide.placeholder.userName.en}
            />
            <i className='material-icons'>person_outline</i>
          </label>
          <label>
            <input
              type='text'
              name='email'
              placeholder={signUpStrings.detailedSide.placeholder.email.en}
            />
            <i className='material-icons'>mail_outline</i>
          </label>
          <label>
            <input
              type='password'
              name='password'
              placeholder={signUpStrings.detailedSide.placeholder.password.en}
            />
            <i className='material-icons'>lock_outline</i>
          </label>
          <label>
            <input
              type='password'
              name='retypePassword'
              placeholder={signUpStrings.detailedSide.placeholder.retypePassword.en}
            />
            <i className='material-icons'>lock_outline</i>
          </label>
          <input
            type='submit'
            className='sign-up-detailed-side-btn'
            value={signUpStrings.detailedSide.btn.en}
          />
        </form>
      </>
    );
  }
}