import Images from "./Components/Image.js";
import NavBar from "./Components/NavBar.js";
import MemoryDoge from './abis/MemoryDoge.json';
import Web3 from 'web3';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [token, setToken] = useState('');
  const [account, setAccount] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [tokenURI, setTokenURI] = useState('');
  useEffect(() => {
		loadWeb3()
		loadBlockchainData()
		images = shuffle(images);
	},[]);
  	var images = ["/images/cheeseburger.png","/images/fries.png","/images/hotdog.png","/images/ice-cream.png","/images/milkshake.png","/images/pizza.png","/images/cheeseburger.png","/images/fries.png","/images/hotdog.png","/images/ice-cream.png","/images/milkshake.png","/images/pizza.png"];
	const shuffle = (array) => {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex -= 1;
		  temporaryValue = array[currentIndex];
		  array[currentIndex] = array[randomIndex];
		  array[randomIndex] = temporaryValue;
		}
		return array;
	  }

	const loadWeb3 = async () => {
		if (window.ethereum) {
		  window.web3 = new Web3(window.ethereum)
		  await window.ethereum.enable()
		}
		else if (window.web3) {
		  window.web3 = new Web3(window.web3.currentProvider)
		}
		else {
		  window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
		}
	  }
	  
	  const loadBlockchainData = async () => {
		const web3 = window.web3
		const accounts = await web3.eth.getAccounts()
		setAccount(accounts[0])
	
		// Load smart contract
		const networkId = await web3.eth.net.getId()
		const networkData = MemoryDoge.networks[networkId]
		if(networkData) {
		  const abi = MemoryDoge.abi
		  const address = networkData.address
		  const token = new web3.eth.Contract(abi, address)
		  setToken(token)
		  const totalSupply = await token.methods.totalSupply().call()
		  setTotalSupply(totalSupply)
		  // Load Tokens
		  let balanceOf = await token.methods.balanceOf(accounts[0]).call()
		  for (let i = 0; i < balanceOf; i++) {
			let id = await token.methods.tokenOfOwnerByIndex(accounts[0], i).call()
			let tokenURI = await token.methods.tokenURI(id).call()
			setTokenURI({
			  tokenURI: [...tokenURI, tokenURI]
			})
		  }
		} else {
		  alert('Smart contract not deployed to detected network.')
		}
	  }
  return (
    <div className="App">
	  <NavBar />
	  <br />
	  <div className='d-flex justify-content-center'>
      	<Images images={images} token={token} account={account} tokenURIs={tokenURI}/>
	  </div>
    </div>
  );
}

export default App;
