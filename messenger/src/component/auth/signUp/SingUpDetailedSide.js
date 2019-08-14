import React from 'react'
import './SignUp.css'
import { signUpStrings } from '../../../strings/SignUpStrings'

export default class SignUpDetailedSide extends React.Component {
  render() {
    return (
      <>
        <h1 className='detailed-side-header'>
          {signUpStrings.detailedSide.header.en}
        </h1>
        <form>
          <label>
            <input
              type='text'
              name='userName'
              value=''
              onChange={this.handleChange}
              placeholder='Username'
            />
            <i className='material-icons'>person_outline</i>
          </label>
          <label>
            <input
              type='text'
              name='email'
              value=''
              onChange={this.handleChange}
              placeholder='E-mail'
            />
            <i className='material-icons'>phone_iphone</i>
          </label>
          <label>
            <input
              type='password'
              name='password'
              value=''
              onChange={this.handleChange}
              placeholder='Password'
            />
            <i className='material-icons'>lock_outline</i>
          </label>
          <label>
            <input
              type='password'
              name='retypePassword'
              value=''
              onChange={this.handleChange}
              placeholder='Retype Password'
            />
            <i className='material-icons'>lock_outline</i>
          </label>
          <input
            type='submit'
            className='detailed-side-btn'
            value={signUpStrings.detailedSide.btn.en}
          />
        </form>
      </>
    );
  }
}