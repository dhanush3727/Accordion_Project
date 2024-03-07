import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerated = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        name="qr-coce"
        placeholder="Enter your value here"
        value={input}
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateCode}
      >
        Generate
      </button>
      <div>
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </div>
  );
};

export default QRCodeGenerated;
