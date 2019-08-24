import React from 'react'
import Header from './detailedSide/Header'
import Footer from './detailedSide/Footer';
import ChatBox from './detailedSide/ChatBox';

export default class MessengerDetailedSide extends React.Component {
  render() {
    return <>
      <Header />
      <ChatBox />
      <Footer />
    </>
  }
}