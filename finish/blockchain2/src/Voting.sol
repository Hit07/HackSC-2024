// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Voting {
    bool public votingStarted = false;
    string public candidate1;
    string public candidate2;

    uint public votesCandidate1;
    uint public votesCandidate2;

    // mapping(address => bool) public hasVoted;

    constructor() {
    }

    function start_voting(string memory c1, string memory c2) public {
        require(!votingStarted, "Voting has already started");
        votingStarted = true;
        candidate1 = c1;
        candidate2 = c2;
    }

    function vote(string memory candidate) public {
        require(keccak256(abi.encodePacked(candidate)) == keccak256(abi.encodePacked(candidate1)) || keccak256(abi.encodePacked(candidate)) == keccak256(abi.encodePacked(candidate2)), "Invalid candidate");
        require(votingStarted, "Voting has not started");
        // require(!hasVoted[msg.sender], "You have already voted");
        if (keccak256(abi.encodePacked(candidate)) == keccak256(abi.encodePacked(candidate1))) {
            votesCandidate1++;
        } else {
            votesCandidate2++;
        }
        // hasVoted[msg.sender] = true;
    }

    function endVoting() public {
        require(votingStarted, "Voting has not started");
        votingStarted = false;
    }

    function declareWinner() external view returns (string memory) {
        if (votesCandidate1 > votesCandidate2) {
            return candidate1;
        } else {
            return candidate2;
        }
    }
}