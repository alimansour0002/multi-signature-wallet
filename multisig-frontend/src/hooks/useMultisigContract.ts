import { useEffect, useState } from 'react';
import { useContract, useSigner } from 'wagmi';
import { abi } from '../utils/config';
import { ethers } from 'ethers'

export const useMultisigContract = (contractAddress:string) => {
    const { data: signer } = useSigner();

     const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/q0UwFZaYbgjra7FFAMMv24rCpn-vpGCB")

    const contract = useContract({
        addressOrName: contractAddress,
        contractInterface: abi,
        signerOrProvider: signer,
    });

    if (!signer) return null;



    return contract;
}