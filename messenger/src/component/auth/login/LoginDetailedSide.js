import React from 'react'
import { loginStrings } from '../../../strings/LoginStrings'

export default class LoginDetailedSide extends React.Component {
  render() {
    return (
      <>
        <h1 className='login-detailed-side-header'>
          {loginStrings.detailedSide.header.en}
        </h1>
        <form className='login-form'>
          <label>
            <input
              type='text'
              name='userName'
              placeholder={loginStrings.detailedSide.placeholder.userName.en}
            />
            <i className='material-icons'>person_outline</i>
          </label>
          <label>
            <input
              type='password'
              name='password'
              placeholder={loginStrings.detailedSide.placeholder.password.en}
            />
            <i className='material-icons'>lock_outline</i>
          </label>
          <a href="#forgotpass">{loginStrings.detailedSide.forgotPass.en}</a>
          <input
            type='submit'
            className='login-detailed-side-btn'
            value={loginStrings.detailedSide.btn.en}
          />
        </form>
      </>
    );
  }
}