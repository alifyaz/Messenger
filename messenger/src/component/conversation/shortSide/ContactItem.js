import React from 'react'
import '../Messenger.css'

export default class ContactItem extends React.Component {
  render() {
    return (
      <div className='contact-item'>
        <svg width="42" height="42">
          <circle cx="21" cy="21" r="20" />
        </svg>
        <img src="favicon.ico" alt='avatar' />
        <div className="contact-item-details-container">
          <div className="contact-item-user-time-container">
            <span className="contact-item-user">
              {this.props.name !== undefined ? this.props.name : 'Erfan'}
            </span>
            <span className="contact-item-time">12.29.18</span>
          </div>
          <div className="contact-item-desc-unseen-container">
            <span className="contact-item-desc">the last message sent message message message message message
                                message message</span>
            <span className="contact-item-unseen">10</span>
          </div>
        </div>
      </div>
    )
  }
}