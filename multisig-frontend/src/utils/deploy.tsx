import { ethers } from "ethers";
import { abi, bytecode } from "./config";
export const deploy = async (signers,owner: ethers.Signer) =>
{
    console.log('ew',signers,owner);
    const Storage = new ethers.ContractFactory(abi,bytecode,owner);
    
    const overrides = {
        value: ethers.utils.parseEther("0")
    }
    
    const stor = await Storage.deploy(signers);
    console.log("Your contract is deployed! Here is its address " + stor.address);
    await owner.provider?.waitForTransaction(stor.deployTransaction.hash, 1);
    return stor.address;
}
