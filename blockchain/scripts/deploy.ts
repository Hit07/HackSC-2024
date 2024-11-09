import { ethers } from "hardhat";

async function main () {
    // We get the contract to deploy
    const vote = await ethers.deployContract("Voting");

    console.log('Deploying Contract...');
    //Program waits until counter is deployed before moving onto next line of code
    await vote.waitForDeployment();

    //prints the countract's target, its address on the blockchain
    console.log(`Voting deployed to: ${vote.target}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });