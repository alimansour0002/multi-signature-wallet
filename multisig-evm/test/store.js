const { expect } = require('chai')
const { ethers } = require('hardhat')
describe("Testing the Storage Contract", function () {
    this.timeout(60000);
    let Storage;
    let stor;
    it("should set the number to another number", async () => {

        const [owner,hamouda,hasan] = await hre.ethers.getSigners();
        Storage = await ethers.getContractFactory("Storage");
        
        const overrides = {
            value: ethers.utils.parseEther("2033")
        }

        stor = await Storage.deploy([owner.address,hamouda.address], overrides);

        console.log("Your contract is deployed! Here is its address " + stor.address);
        console.log( 'test',owner.address);
        await stor.propose(1,"0x5FbDB2315678afecb367f032d93F642f64180aa3");
        await stor.propose(1,"0x5FbDB2315678afecb367f032d93F642f64180aa3");
        console.log('1',await stor.approvedBefore(0),await stor.connect(hamouda).approvedBefore(0),await stor.connect(hasan).isSigner());
        console.log('heyy',await stor.approved(0,1),await stor.approved(0,2),(await stor.pending(0)).sent);
        await stor.connect(hamouda).approve(0);
        console.log('heyy',(await stor.pending(1)).sent,(await stor.pending(0)).sent);
        // console.log(s);
        // expect(await hasan.getBalance()).to.equal(parseInt());
        // expect(num).to.equal(parseInt(2));
    })

})