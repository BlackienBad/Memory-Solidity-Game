# Memory Solidity Game (with doges)

![Gif](https://media.giphy.com/media/LIYHrTkmsQIpqul8dT/giphy.gif)

Developed using:
-[Ganache](https://www.trufflesuite.com/ganache) to simulate a local blockchain
-[Truffle](https://www.trufflesuite.com/) to compile and migrate the smart contracts
-[Solidity](https://docs.soliditylang.org/) as a compiler for the smart contracts
-[Web3](https://web3js.readthedocs.io) to connect the front-end to the blockchain
-[React](https://it.reactjs.org/) for the front-end
-[Mocha](https://mochajs.org/) for testing (not implemented yet)
-[OpenZeppelin](https://openzeppelin.com/) for the library

I used the library OpenZeppelin to develop an ERC721 token (in Solidity) in a few lines of code, after that I used Truffle to compile and migrate (to Ganache) the smart contract, Web3 was then used to connect React with Ganache through [Metamask](https://metamask.io/)
