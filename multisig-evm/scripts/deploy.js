const { ethers } = require('hardhat')

const deploy = async () =>
{
    const [owner] = await hre.ethers.getSigners();
    Storage = await ethers.getContractFactory("Storage");
    
    const overrides = {
        value: ethers.utils.parseEther("0.1")
    }

    stor = await Storage.deploy([owner.address,"0x526D896c8e572831c54FF688CA49594d72108A01"], overrides);
    console.log("Your contract is deployed! Here is its address " + stor.address)
   
}

deploy().catch((err)=>{
console.log(err);
})