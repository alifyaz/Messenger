import React from 'react'
import './App.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import conversation from './reducer/Conversation'

import LoginShortSide from './component/auth/login/LoginShortSide'
import SignUpShortSide from './component/auth/signUp/SignUpShortSide'
import SignUpDetailedSide from './component/auth/signUp/SingUpDetailedSide'
import LoginDetailedSide from './component/auth/login/LoginDetailedSide'
import MessengerDetailedSide from './component/conversation/MessengerDetailedSide'
import MessengerShortSideContainer from './container/MessengerShortSideContainer'
// import theme from './config/theme'

const store = createStore(conversation, window.devToolsExtension && window.devToolsExtension())

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 'currentPageTitle' state contains one of the following three values:
      // 1. <SignUp />
      // 2. <Login />
      // 3. <Messenger />
      currentPageTitle: 'Messenger'
    }
  }
  // handleClick() {
  //   this.setState({
  //     currentPageTitle: this.state.currentPageTitle === 'SignUp'
  //       ? 'Messenger' : 'SignUp'
  //   })
  // }

  render() {
    const currentPage = {
      shortSide:
        this.state.currentPageTitle === 'Login' ? <LoginShortSide />
          : this.state.currentPageTitle === 'SignUp' ? <SignUpShortSide />
            : <MessengerShortSideContainer />,
      detailedSide:
        this.state.currentPageTitle === 'Login' ? <LoginDetailedSide />
          : this.state.currentPageTitle === 'SignUp' ? <SignUpDetailedSide />
            : <MessengerDetailedSide />
    }
    // const styles = theme[this.state.currentPageTitle]

    // Every page in Messenger Web App is consist of two sides:
    // 'div' element with id of "short-side" holds some abstract info
    // and the "detailed-side" div has the main content
    return (
      <Provider store={store}>
        <div className={this.state.currentPageTitle}>
          <div className='short-side'>
            {currentPage.shortSide}
          </div>
          {/* <button onClick={() => this.handleClick()} >Toggle</button> */}
          <div className='detailed-side'>
            {currentPage.detailedSide}
          </div>
        </div>
      </Provider>
    )
  }
}
