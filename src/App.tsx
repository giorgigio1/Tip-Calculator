import "./App.css";
import Logo from "./images/logo.svg";
import { Button } from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Input } from "./components/Input";

const buttons = ["5", "10", "15", "25", "50"];

function App() {
  const [bill, setBill] = useState<any>("");
  const [tip, setTip] = useState<any>("");
  const [numberOfPeople, setNumberOfPeople] = useState<any>("");
  const [selectedButton, setSelectedButton] = useState<any>(null);

  const tipAmount = (bill * tip) / 100 / numberOfPeople;
  const total = bill / numberOfPeople + tipAmount;

  const handleReset = () => {
    setBill("");
    setTip("");
    setNumberOfPeople("");
  };

  const hanleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target.value.length < 3) {
      setTip(e.target.value);
    }
    setSelectedButton(null);
  };

  return (
    <div className="App">
      <figure className="logoFigure">
        <img className="logo" src={Logo} alt="" />
      </figure>
      <div className="main">
        <section className="left">
          <div className="top">
            <p>Bill</p>
            <Input
              type="number"
              placeholder="0"
              value={bill}
              onChange={(e) => {
                return e.target.value.length < 7 && setBill(e.target.value);
              }}
            />
          </div>
          <div className="middle">
            <p>Select Tip %</p>
            <div className="buttons">
              {buttons.map((number, index) => (
                <Button
                  key={index}
                  children={`${number}%`}
                  onClick={() => {
                    setTip(number);
                    setSelectedButton(number);
                  }}
                  style={
                    {
                      backgroundColor:
                        number === selectedButton ? "#26C2AE" : "",
                    } as React.CSSProperties
                  }
                />
              ))}
              <Input
                type="number"
                placeholder="Custom"
                value={selectedButton ? "" : tip}
                onChange={hanleCustomChange}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="numberZero">
              <p>Number of People</p>
              <p
                style={
                  {
                    display:
                      numberOfPeople && numberOfPeople.startsWith("0")
                        ? "block"
                        : "none",
                  } as React.CSSProperties
                }
              >
                Can't be zero
              </p>
            </div>
            <Input
              type="number"
              placeholder="0"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              style={
                {
                  outline:
                    numberOfPeople && numberOfPeople.startsWith("0")
                      ? "2px solid #E17457"
                      : "",
                } as React.CSSProperties
              }
            />
          </div>
        </section>
        <section className="right">
          <div className="tipAmountContent">
            <div className="textSide">
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <div className="valueSide">
              <FontAwesomeIcon icon={faDollarSign} size="2x" color="#26C2AE" />
              <p>
                {Number.isNaN(tipAmount) || !isFinite(tipAmount)
                  ? "0.00"
                  : tipAmount.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="tipAmountContent tipAmountContent2">
            <div className="textSide">
              <p>Total</p>
              <span>/ person</span>
            </div>
            <div className="valueSide">
              <FontAwesomeIcon icon={faDollarSign} size="2x" color="#26C2AE" />
              <p>
                {Number.isNaN(total) || !isFinite(total)
                  ? "0.00"
                  : total.toFixed(2)}
              </p>
            </div>
          </div>
          <Button
            children={"RESET"}
            onClick={handleReset}
            style={{
              backgroundColor:
                bill !== "" || tip !== "" || numberOfPeople !== ""
                  ? "#26C2AE"
                  : "",
            }}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
