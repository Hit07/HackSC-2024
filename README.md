# Welcome to building your first Web3 dApp @ HackSC-2024! 💻 ⭐️ 🥳


## Initial Setup 
Navigate to frontend folder in terminal

Run `npm install`

Run `npm install ethers@5`

Run `npm run start` to view current frontend of our page

## Writing our Smart Contract
 
 Navigate to the blockchain/contracts folder in terminal

 Open the **Voting.sol** file

 Add the following lines of the code at the top of the file to specify which version of Solidity we are using:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
```


## Contract Initialization

Set up our initial contract by giving it a name

Add `contract Voting {` to the file (this contract is called Voting)

Add our **state variables** to the file: 

```solidity 
    bool public votingStarted = false;
    string public candidate1;
    string public candidate2;

    uint public votesCandidate1= 0;
    uint public votesCandidate2 = 0;
```

State variables are valuables whose values are permanently stored in a contract storage rather than a specific function.


Add our **events** to the file:

```solidity
event VotingStarted(string candidate1, string candidate2);

event Voted(string candidate);

event VotingEnded();
```

**Events** are a mechanism that allow smart contracts to emit logs when certain actions occur. Thus, when a change in our smart contract occurs, like voting has started, a vote occurred, or voting has ended, we will emit an event to the frontend or any other entity that may be listening for such events.


Add an empty constructor to the file since our smart contract doesn't need any initial arguments before being deployed: 

```solidity
constructor() {
}
```

## Start Voting Function
Add the following start voting function to the file:

```solidity

function start_voting(string memory c1, string memory c2) public {
        require(!votingStarted, "Voting has already started");
        votingStarted = true;
        candidate1 = c1;
        candidate2 = c2;
        votesCandidate1 = 0;
        votesCandidate2 = 0;

        emit VotingStarted(c1, c2);
    }

```

The **require** function ensures that user's input is valid and that voting hasn't already started.

Then we set the votingStarted state variable to true.

Then, we update our candidate1 and candidate2 state variable to be the user's input.

We also initialize our state variables for votes for each candidate to be 0.

Lastly, we emit the VotingStarted event passing in the two candidate names as parameters.















