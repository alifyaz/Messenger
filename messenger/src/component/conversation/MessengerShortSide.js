import React from 'react'
import './Messenger.css'
import { messengerStrings } from '../../strings/MessengerStrings'
import ContactItem from './shortSide/ContactItem';

export default class MessengerShortSide extends React.Component {
  render() {
    return (
      <>
        <div className='search-container'>
          <i className='material-icons'>menu</i>
          <label>
            <input
              type='text'
              name='search'
              placeholder={messengerStrings.shortSide.placeholder.search.en}
            />
          </label>
        </div>
        <div className='scrollbar-hider'>
          <div className='contact-item-container'>
            <ContactItem name='Ali' />
            <ContactItem name='Reza' />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />

          </div>
        </div>
      </>
    );
  }
}