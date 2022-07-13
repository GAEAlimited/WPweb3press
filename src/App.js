import React, { Fragment, useEffect, useState } from "react"

// Message //
import MazeHeader from "./components/MazeHeader/MazeHeader"
import Message from "./components/Message"
// contracts
// import TokenFarm from "./web/TokenFarm.json"
// import DaiToken from "./web/DaiToken.json"
// import DappToken from "./web/DappToken.json"

import Web3 from "web3"
console.log(process.env.NODE_ENV)
const App = () => {
  const [account, setAccount] = useState(0x0)
  const [balance, setBalance] = useState(null)

  const connectAccount = async () => {
    const accounts = await window.web3.eth.requestAccounts()
    if (accounts[0]) {
      let balance = await window.web3.eth.getBalance(accounts[0])
      balance = window.web3.utils.fromWei(balance, "Ether")
      setBalance(balance)
    }
    setAccount(accounts[0])
  }

  async function loadWeb3() {
    if (window.ehtereum) {
      window.web3 = new Web3(window.ehtereum)
      await window.ehtereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert("Please install MetaMask!!")
    }
  }

  useEffect(() => {
    loadWeb3()
  }, [])
  return (
    <Fragment>
      <MazeHeader />
      <div style={{ marginTop: 20 }}>
        <h1>Connect Your Metamask Wallet</h1>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={connectAccount}>Connect Account</button>
          <div>Account: {account}</div>
          <div>
            Balance: {balance ? balance : "_"}
            <strong style={{ marginLeft: 6 }}>ETH</strong>
          </div>
        </div>
      </div>
      <Message />
    </Fragment>
  )
}

export default App
