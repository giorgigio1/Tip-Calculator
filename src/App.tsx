import Logo from "./images/logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Input } from "./components/Input";

const buttons = ["5", "10", "15", "25", "50"];
const limit = 7;
const customLimit = 3;

function App() {
  const [bill, setBill] = useState<any>("");
  const [tip, setTip] = useState<any>("");
  const [numberOfPeople, setNumberOfPeople] = useState<any>("");

  const tipAmount = (bill * tip) / 100 / numberOfPeople;
  const total = bill / numberOfPeople + tipAmount;

  const handleReset = (e: any) => {
    setBill("");
    setTip("");
    setNumberOfPeople("");
  };

  const handleNumberOfPeople = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ) => {
    setNumberOfPeople(e.target.value);
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
              onChange={(e: any) => {
                setBill(e.target.value);
                setBill(e.target.value.slice(0, limit));
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
                  onClick={() => setTip(number)}
                />
              ))}
              <Input
                type="number"
                placeholder="Custom"
                value={tip}
                onChange={(e: any) => {
                  setTip(e.target.value);
                  setTip(e.target.value.slice(0, customLimit));
                }}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="numberZero">
              <p>Number of People</p>
              <p
                style={{
                  display:
                    numberOfPeople && numberOfPeople.startsWith("0")
                      ? "block"
                      : "none",
                }}
              >
                Can't be zero
              </p>
            </div>
            <Input
              type="number"
              placeholder="0"
              value={numberOfPeople}
              onChange={handleNumberOfPeople}
              style={{
                outline:
                  numberOfPeople && numberOfPeople.startsWith("0")
                    ? "2px solid #E17457"
                    : "",
              }}
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
                  : Number(tipAmount.toString().slice(0, limit)).toFixed(2)}
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
                  : Number(total.toString().slice(0, limit)).toFixed(2)}
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
