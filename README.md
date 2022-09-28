# multi-signature-wallet
This is a multi-signature-wallet DApp.

Multi-signature-wallet is a crypto wallet owned by more than one user, users can
create/approve transactions sent from the multi-signature wallet.

Transaction must be approved by all owners of the wallet in order to get sent.
Users aprrove transactions by signing message and send it to the smart contract.


A user can create a multi-signature-wallet and add multiple owners for this wallet.
This UI is responsible for creating wallets (deploying a smart contract wallet for users) and interacting with this
contract.
Firebase is used to store a mapping between users and their wallets.


