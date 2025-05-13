import React, { useState } from "react";

function App() {
  const [to] = useState("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  const [tokenURI, setTokenURI] = useState("https://example.com/nft/1");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    if (!to || !to.startsWith("0x") || to.length !== 42) {
      alert("Invalid Ethereum address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/mint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to, tokenURI }),
      });
      const data = await res.json();

      if (data.success) {
        const detailsRes = await fetch(`http://localhost:3000/api/warranty/${data.tokenId}`);
        const details = await detailsRes.json();
        setResult({ ...data, ...details });
      } else {
        setResult(data);
      }
    } catch (error) {
      setResult({ success: false, error: error.message });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Warranty NFT Minter</h1>
      <div>
        <label>To Address:</label>
        <input
          type="text"
          value={to}
          readOnly
          style={{ width: "100%", backgroundColor: "#eee" }}
        />
      </div>
      <div>
        <label>Token URI:</label>
        <input
          type="text"
          value={tokenURI}
          onChange={(e) => setTokenURI(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <button onClick={handleMint} disabled={loading}>
        {loading ? "Minting..." : "Mint Warranty NFT"}
      </button>
      {result && result.success && (
        <div style={{ marginTop: "1rem" }}>
          <p><strong>✅ Token minted successfully!</strong></p>
          <p><strong>Token ID:</strong> {result.tokenId}</p>
          <p><strong>Owner:</strong> {result.owner}</p>
          <p><strong>Token URI:</strong> <a href={result.tokenURI} target="_blank" rel="noreferrer">{result.tokenURI}</a></p>
        </div>
      )}
      {result && !result.success && (
        <div style={{ marginTop: "1rem", color: "red" }}>
          <p>❌ Error: {result.error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
