import { useEffect, useState } from 'react';
import { useContract, useSigner } from 'wagmi';
import { abi } from '../utils/config';
import { ethers } from 'ethers'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';

export const useMultisigContract = (contractAddress:string) => {
    const { data: signer } = useSigner();
    const [contract,setContract]=useState(null);
     const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/q0UwFZaYbgjra7FFAMMv24rCpn-vpGCB")
     console.log('he',contractAddress)
    useEffect(()=>{
        if(!signer||(!contractAddress)){
            if(contract){
                setContract(null);
            }
            return};
        let _contract;
        try{
            _contract = new ethers.Contract(contractAddress,abi,provider);
            console.log('contract',contract);
            setContract(_contract);    
        }catch{
                _contract=null;
            }
    },[signer,contractAddress])
    
    if (!signer) return null;
    // console.log('contract',contract);
    return contract;
}