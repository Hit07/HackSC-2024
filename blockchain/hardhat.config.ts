import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.PRIVATE_KEY || !process.env.API_URL) {
  throw new Error("Please set your PRIVATE_KEY and API_URL in a .env file");
}

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};

export default config;