import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";
import MM1 from "./MM1.png";
import MM2 from "./MetaMask_Fox.svg.png";
import "./App.css";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
      if(window.ethereum) {
        setIsWalletInstalled(true);
      }
    },[]);

  function connectWallet() {
    window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then((accounts) => {
        setAccount(accounts[0]);
        // alert(typeof(accounts));
      })
      .catch((error) => {
        alert("Something went wrong! Please try again");
      });
  }

  if(account === null) {
    return(
      <div className="App">
        {
          isWalletInstalled ? (
            <button onClick={connectWallet}>
              Connect metamask <img src={MM2} alt="Metamask Image"/>
              
            </button>
          ) : (
            <p>Metamask wallet not installed properly</p>
          )
        }
      </div>
    );
  }
  
  return(
    <div className="App">
      <p><b>Connected as: </b>{account}</p>
      
      {/* <p>Connected as: {account.map((acc) => <i>{acc}</i>)}</p> */}
    </div>
  );
}

export default App;
