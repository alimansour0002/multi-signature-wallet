export const abi=[
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "signers",
        "type": "address[]"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ind",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "approved",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ind",
        "type": "uint256"
      }
    ],
    "name": "approvedBefore",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isSigner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numberOfPending",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "pending",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "approvedCounter",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "sent",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "eth",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "people",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "peopleNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_eth",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "propose",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "send",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
export const bytecode='0x60806040526000600255604051610a75380380610a7583398101604081905261002791610099565b60005b8151811015610072578060010160008084848151811061004657fe5b6020908102919091018101516001600160a01b031682528101919091526040016000205560010161002a565b5051600355610169565b80516001600160a01b038116811461009357600080fd5b92915050565b600060208083850312156100ab578182fd5b82516001600160401b03808211156100c1578384fd5b818501915085601f8301126100d4578384fd5b8151818111156100e2578485fd5b83810291506100f2848301610143565b8181528481019084860184860187018a101561010c578788fd5b8795505b83861015610136576101228a8261007c565b835260019590950194918601918601610110565b5098975050505050505050565b6040518181016001600160401b038111828210171561016157600080fd5b604052919050565b6108fd806101786000396000f3fe60806040526004361061009c5760003560e01c806381045ead1161006457806381045ead14610156578063932c8b0f1461016b578063af6e623814610180578063b46300ec146101b0578063b759f954146101b8578063c7e506ef146101cb5761009c565b806307de97351461009e5780630aa0fac9146100d457806325ff4813146100e95780635766b1a5146101165780636e4c431114610136575b005b3480156100aa57600080fd5b506100be6100b93660046106cd565b6101e0565b6040516100cb9190610885565b60405180910390f35b3480156100e057600080fd5b506100be6101f2565b3480156100f557600080fd5b506101096101043660046106f0565b6101f8565b6040516100cb9190610758565b34801561012257600080fd5b5061009c610131366004610708565b610221565b34801561014257600080fd5b50610109610151366004610737565b6103c6565b34801561016257600080fd5b506100be6103e6565b34801561017757600080fd5b506101096103f9565b34801561018c57600080fd5b506101a061019b3660046106f0565b61040e565b6040516100cb949392919061088e565b61009c610451565b61009c6101c63660046106f0565b610453565b3480156101d757600080fd5b506100be6105a6565b60006020819052908152604090205481565b60035481565b600090815260046020908152604080832033845283835281842054845290915290205460ff1690565b336000908152602081905260409020546102565760405162461bcd60e51b815260040161024d90610793565b60405180910390fd5b60028054600101905561026761069a565b5060408051608080820183526001808352600060208085018290528486018890526001600160a01b03808816606080880182905288519687018952858752868401858152878a018c815291880192835286548088018855878752975160049889027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf681019190915590517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf78201805491151560ff1992831617905591517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf882015591517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf99092018054929093166001600160a01b0319909216919091179091558354600019908101845294825286832033845283835287842054845290915294902080549094168117909355915490916103c191016105ac565b505050565b600460209081526000928352604080842090915290825290205460ff1681565b3360009081526020819052604090205490565b33600090815260208190526040902054151590565b6001818154811061041b57fe5b6000918252602090912060049091020180546001820154600283015460039093015491935060ff1691906001600160a01b031684565b565b3360009081526020819052604090205461047f5760405162461bcd60e51b815260040161024d90610763565b60015481106104a05760405162461bcd60e51b815260040161024d90610843565b600181815481106104ad57fe5b600091825260209091206001600490920201015460ff16156104e15760405162461bcd60e51b815260040161024d906107c3565b600081815260046020908152604080832033845283835281842054845290915290205460ff16156105245760405162461bcd60e51b815260040161024d906107fa565b600081815260046020908152604080832033845283835281842054845290915290205460ff1661059a57600180828154811061055c57fe5b6000918252602080832060049283020180549094019093558382528252604080822033835282845281832054835290925220805460ff191660011790555b6105a3816105ac565b50565b60025481565b600354600182815481106105bc57fe5b90600052602060002090600402016000015414156105a357600181815481106105e157fe5b906000526020600020906004020160030160009054906101000a90046001600160a01b03166001600160a01b03166108fc6001838154811061061f57fe5b9060005260206000209060040201600201549081150290604051600060405180830381858888f1935050505015801561065c573d6000803e3d6000fd5b50600180828154811061066b57fe5b60009182526020909120600490910201600101805460ff19169115159190911790555060028054600019019055565b6040518060800160405280600081526020016000151581526020016000815260200160006001600160a01b031681525090565b6000602082840312156106de578081fd5b81356106e9816108b2565b9392505050565b600060208284031215610701578081fd5b5035919050565b6000806040838503121561071a578081fd5b82359150602083013561072c816108b2565b809150509250929050565b60008060408385031215610749578182fd5b50508035926020909101359150565b901515815260200190565b6020808252601690820152756e6f7420616c6c6f77656420746f20617070726f766560501b604082015260600190565b6020808252601690820152756e6f7420616c6c6f77656420746f2070726f706f736560501b604082015260600190565b6020808252601b908201527f7472616e73616374696f6e20697320616c72656164792073656e740000000000604082015260600190565b60208082526029908201527f7369676e657220616c726561647920616772656564206f6e207468697320747260408201526830b739b0b1ba34b7b760b91b606082015260800190565b60208082526022908201527f7468657265206973206e6f207472616e73616374696f6e207769746820696e646040820152610caf60f31b606082015260800190565b90815260200190565b938452911515602084015260408301526001600160a01b0316606082015260800190565b6001600160a01b03811681146105a357600080fdfea2646970667358221220f00d626ec04f7cec37902f838f9745e4275daf3ff7094440f4d090cdc918f86064736f6c63430007000033';