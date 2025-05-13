# NFT Warranty System

This project demonstrates a decentralized warranty system using NFTs on the Ethereum Sepolia testnet.

## 📦 Features

- Smart contract written in Solidity and deployed on Sepolia
- Warranty minting functionality via frontend
- Integration with MetaMask
- Backend API to handle mint transactions
- Frontend built with React + Webpack + Babel
- Fully Dockerized for safe and isolated development

## 🚀 Smart Contract

**Deployed on Sepolia Testnet**  
`0xca83D6a6Fe45A9845946cA83aD47373f4647156d`

## 🛠️ Stack

- Solidity / Hardhat
- React / JavaScript
- Node.js / Express
- Ethers.js
- Docker

## 📂 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/diasbass/nft-warranty.git
cd nft-warranty
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```env
PRIVATE_KEY=your_private_key_without_0x
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_project_id
```

### 4. Compile and Deploy (optional)

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

### 5. Start backend and frontend (via Docker or manually)

---

## 🧪 Mint Test Instructions

- Open the frontend (usually on `http://localhost:3001`)
- Connect your MetaMask to Sepolia
- Enter your wallet address and a metadata URL
- Click "Mint Warranty NFT"
- Check the Sepolia testnet block explorer for the transaction

---

## 🔗 Links

- [Contract on Sepolia Etherscan](https://sepolia.etherscan.io/address/0xca83D6a6Fe45A9845946cA83aD47373f4647156d)
