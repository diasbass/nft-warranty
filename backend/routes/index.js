const express = require("express");
const router = express.Router();
const { ethers, isAddress } = require("ethers");
const { contractAddress, abi } = require("../contractData");
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const wallet = new ethers.Wallet(
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
  provider
);
const contract = new ethers.Contract(contractAddress, abi, wallet);

router.post("/mint", async (req, res) => {
  const { to, tokenURI } = req.body;
  if (!to || !isAddress(to)) {
    return res.status(400).json({ success: false, error: "Invalid Ethereum address." });
  }
  try {
    const tx = await contract.mintWarranty(to, tokenURI);
    const receipt = await tx.wait();
    const tokenId = await contract.tokenCounter() - 1n;
    res.json({ success: true, tokenId: tokenId.toString() });
  } catch (err) {
    console.error("Erro no contrato:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;


router.get("/warranty/:id", async (req, res) => {
  try {
    const tokenId = req.params.id;
    const owner = await contract.ownerOf(tokenId);
    const uri = await contract.tokenURI(tokenId);

    res.json({ tokenId, owner, tokenURI: uri });
  } catch (err) {
    console.error("Erro ao buscar NFT:", err);
    res.status(500).json({ error: "NFT not found or invalid tokenId" });
  }
});
