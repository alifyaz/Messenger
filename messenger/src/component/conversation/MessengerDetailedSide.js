import React from 'react'
import HeaderContainer from '../../container/HeaderContainer'
import ChatBoxContainer from '../../container/ChatBoxContainer'
import FooterContainer from '../../container/FooterContainer'

export default class MessengerDetailedSide extends React.Component {
  render() {
    return <>
      <HeaderContainer />
      <ChatBoxContainer />
      <FooterContainer />
    </>
  }
}