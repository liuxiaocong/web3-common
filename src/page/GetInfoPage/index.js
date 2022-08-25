import React from 'react';

function GetInfo() {
  const [chainId, setChainId] = React.useState("")
  const [account, setAccount] = React.useState("")
  const [netVersion, setNetVersion] = React.useState("")
  const method = {
    getAccount: "eth_requestAccounts",
    getChainId: "eth_chainId",
    getNetVersion: "net_version"
  };
  const getInfo = async () => {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
      try {
        const accounts = await ethereum.request({ method: method.getAccount });
        const cid = await ethereum.request({ method: method.getChainId });
        const nv = await ethereum.request({ method: method.getNetVersion });
        setAccount(accounts?.[0])
        setChainId(cid);
        setNetVersion(nv)
        
      } catch (e) {
        console.log(e);
      }
    } else {
      console.error("please install MetaMask");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Info from metamask</h1>
        <button onClick={getInfo}>Get Info From MetaMask</button>
        <h2>Info</h2>
        <p>ChainId: {chainId}</p>
        <p>Account: {account}</p>
        <p>NetVersion: {netVersion}</p>
      </header>
    </div>
  );
}

export default GetInfo;
