# multi-signature-wallet
This is a multi-signature-wallet DApp.

Multi-signature-wallet is a crypto wallet that can be owned by more than one user. 
A user can create a multi-signature-wallet and add multiple owners for this wallet (including him/her self). Owners of wallet can create/approve transactions sent from the multi-signature wallet.

A transaction must be approved by all owners of the wallet in order to get processed and sent to the destination.
Users approve transactions by signing their approval with their private key and sending it to the smart contract.

This UI is responsible for creating wallets (deploying a smart contract wallet for users) and interacting with this
contract.

Firebase is used to store a mapping between users and their wallets.

Frontend: Next.js
Blockchain: Solidity
