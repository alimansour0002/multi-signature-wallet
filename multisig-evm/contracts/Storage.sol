// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

import "hardhat/console.sol";
contract Storage {
    mapping(address => uint256) public people;
    trans[] public pending;
    uint256 public numberOfPending = 0;
    uint256 public peopleNumber;
    mapping(uint =>mapping(uint=>bool))public approved;
    struct trans {
        uint256 approvedCounter;
        bool sent;
        uint256 eth;
        address payable to;
    }
    constructor(address[] memory signers) public payable {
        for (uint256 i = 0; i < signers.length; i++) {
            people[signers[i]] = i + 1;
        }
        peopleNumber = signers.length;
    }

    function check(uint256 ind) internal {
        if (pending[ind].approvedCounter == peopleNumber) {
            pending[ind].to.transfer(pending[ind].eth);
            pending[ind].sent = true;
            numberOfPending -= 1;
        }
    }

    function approve(uint256 ind) public payable {
        require(people[msg.sender] != 0, "not allowed to approve");
        require(ind < pending.length, "there is no transaction with index");
        require(pending[ind].sent == false, "transaction is already sent");
        require(
            approved[ind][people[msg.sender]] == false,
            "signer already agreed on this transaction"
        );
        if ( approved[ind][people[msg.sender]] == false) {
            pending[ind].approvedCounter += 1;
            approved[ind][people[msg.sender]] = true;
        }
        check(ind);
    }

    function propose(uint256 _eth, address payable _to)public
    {
        require(people[msg.sender] != 0, "not allowed to propose");
        numberOfPending += 1;
        trans memory newTrans = trans(1, false, _eth, _to);
        pending.push(trans(1, false, _eth, _to));
        approved[pending.length - 1][people[msg.sender]]=true;
        check(pending.length - 1);
    }

    fallback() external payable {}

    function getIndex() external view returns (uint256) {
        return people[msg.sender];
    }

    function send() public payable {}
    function approvedBefore(uint ind)public view returns(bool)
    {
        return approved[ind][people[msg.sender]];
    }
    function isSigner()public view returns(bool)
    {
        return people[msg.sender]>0;
    }
}
