const contractAddress = "0xca83D6a6Fe45A9845946cA83aD47373f4647156d";

const abi = [
  "function mintWarranty(address to, string memory tokenURI) public returns (uint256)",
  "function tokenCounter() public view returns (uint256)",
  "function ownerOf(uint256 tokenId) public view returns (address)",
  "function tokenURI(uint256 tokenId) public view returns (string)"
];

module.exports = { contractAddress, abi };
