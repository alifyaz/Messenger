import React from 'react'
import './Messenger.css'
import { messengerStrings } from '../../strings/MessengerStrings'
import ContactItemContainer from '../../container/ContactItemContainer'
import NewChatFormDialog from './shortSide/NewChatFormDialog'

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
            {/* <ContactItemContainer name='Ali' family='Fayazi' />
            <ContactItemContainer name='Reza' family='Gholami' />
            <ContactItemContainer name='Mohammad' family='Fatehi' />
            <ContactItemContainer name='Erfan' family='Attarri' />
            <ContactItemContainer name='Mehdi' family='Kazemi' />
            <ContactItemContainer name='Amin' family='Rezayi' /> */}

            {
              this.props.contactList.map((contact, index) => (
                <ContactItemContainer
                  key={index}
                  firstName={contact.firstName}
                  lastName={contact.lastName}
                  email={contact.email}
                  avatar={contact.avatar}
                />
              ))
            }

          </div>
          {/* <i className='material-icons' onClick={() => this.handleCreateBtnClick()}>add</i> */}
          <NewChatFormDialog />
        </div>
      </>
    );
  }
}