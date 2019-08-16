import React from 'react'
import './App.css'
import LoginShortSide from './component/auth/login/LoginShortSide'
import SignUpShortSide from './component/auth/signUp/SignUpShortSide'
import SignUpDetailedSide from './component/auth/signUp/SingUpDetailedSide'
import LoginDetailedSide from './component/auth/login/LoginDetailedSide'
import MessengerShortSide from './component/conversation/MessengerShortSide'
import MessengerDetailedSide from './component/conversation/MessengerDetailedSide'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 'currentPageTitle' state contains one of the following three values:
      // 1. <SignUp />
      // 2. <Login />
      // 3. <Messenger />
      currentPageTitle: 'Login'
    }
  }

  // ************* TO BE ASKED *****************
  // add and remove .css files inside components
  // *******************************************
  //
  // handleChange(e) {
  //   console.log("e::", e.target.value);
  //   if (e.target.value !== "") {
  //     var test = require("./testCss.css");
  //     console.log("test in if::", test);
  //   } else {
  //     console.log("NULL value recieved");
  //     console.log("test in else::", test);
  //   }
  // }


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
            : <MessengerShortSide />,
      detailedSide:
        this.state.currentPageTitle === 'Login' ? <LoginDetailedSide />
          : this.state.currentPageTitle === 'SignUp' ? <SignUpDetailedSide />
            : <MessengerDetailedSide />
    }

    // Every page in Messenger Web App is consist of two sides:
    // 'div' element with id of "short-side" holds some abstract info
    // and the "detailed-side" div has the main content
    return (
      <div className={this.state.currentPageTitle}>
        <div className='short-side'>
          {currentPage.shortSide}
        </div>
        {/* <button onClick={() => this.handleClick()} >Toggle</button> */}
        <div className='detailed-side'>
          {currentPage.detailedSide}
        </div>
      </div>
    )
  }
}
