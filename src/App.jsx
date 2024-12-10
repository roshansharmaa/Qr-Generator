import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [inp, setinp] = useState("");
  let link = "https://roshan-sharmaa.netlify.app/";
  const [qrCode, setQrCode] = useState(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`
  );

  let output = () => {
    if (inp.trim() === "") {
      inp = "https://roshan-sharmaa.netlify.app/";
      alert("Enter Some Text");
      return;
    }
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp}`;
    document.querySelector(".qrcd").src = api;

    let newele = document.createElement("h4");
    let divis = document.querySelector(".status");
    // newele.append('QR code generated')
    newele.innerText = "QR code Generated!!";
    divis.append(newele);

    setTimeout(() => {
      newele.innerText = "";
    }, 6000);
  };
  return (
    <>
      <div className="container">
        <h2>Qr Generator</h2>

        <input
          type="text"
          placeholder="Enter Some Text"
          className="inpt"
          value={inp}
          onChange={(e) => {
            setinp(e.target.value);
          }}
        />

        <img src={qrCode} alt="Qr" className="qrcd" />

        <div className="status"></div>
        <div className="grp">
          <button onClick={output}>Generate</button>
          <a href={qrCode} download>
            <button>
              <i className="fa-solid fa-cloud-arrow-down"></i>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
