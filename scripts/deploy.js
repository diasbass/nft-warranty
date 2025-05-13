const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const WarrantyNFT = await hre.ethers.getContractFactory("WarrantyNFT");
  const warrantyNFT = await WarrantyNFT.deploy();

  await warrantyNFT.waitForDeployment();

  console.log("WarrantyNFT deployed to:", await warrantyNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
