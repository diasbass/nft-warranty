const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WarrantyNFT", function () {
    it("Should mint a new NFT", async function () {
        const [owner] = await ethers.getSigners();
        const WarrantyNFT = await ethers.getContractFactory("WarrantyNFT");
        const warrantyNFT = await WarrantyNFT.deploy();
        await warrantyNFT.deployed();

        const tx = await warrantyNFT.mintWarranty(owner.address, "https://example.com/metadata/1");
        await tx.wait();

        const tokenURI = await warrantyNFT.tokenURI(0);
        expect(tokenURI).to.equal("https://example.com/metadata/1");
    });
});
