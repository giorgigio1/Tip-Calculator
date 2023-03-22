import Dolar from "./images/dolar.png";
import Person from "./images/person.svg";
import Logo from "./images/logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { mdiCurrencyUsd } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useEffect, useRef, useState } from "react";
import { Input } from "./components/Input";

const buttons = ["5%", "10%", "15%", "25%", "50%"];

function App() {
  const [numberOfPeople, setNumberOfPeople] = useState<
    number | null | string | any
  >(null);

  const handleReset = () => {};

  const test = (e: React.ChangeEvent<HTMLInputElement> | any) => {
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
            {/* <input placeholder="0" className="priceInput" type="text" /> */}
            <Input type="number" placeholder="0" />
          </div>
          <div className="middle">
            <p>Select Tip %</p>
            <div className="buttons">
              {buttons.map((element, index) => (
                <Button key={index} children={element} />
              ))}
              {/* <input placeholder="Custom" className="customInput" type="text" /> */}
              <Input type="number" placeholder="Custom" />
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
            {/* <input
              style={{
                outline:
                  numberOfPeople && numberOfPeople.startsWith("0")
                    ? "2px solid #E17457"
                    : "none",
              }}
              onChange={test}
              placeholder="0"
              className="numberOfpeople"
              type="text"
            /> */}
            <Input
              type="number"
              placeholder="0"
              onChange={test}
              style={{
                outline:
                numberOfPeople && numberOfPeople.startsWith('0') ? "2px solid #E17457" : "",
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
              <p>0.00</p>
            </div>
          </div>
          <div className="tipAmountContent tipAmountContent2">
            <div className="textSide">
              <p>Total</p>
              <span>/ person</span>
            </div>
            <div className="valueSide">
              <FontAwesomeIcon icon={faDollarSign} size="2x" color="#26C2AE" />
              <p>0.00</p>
            </div>
          </div>
          <Button children={"RESET"} onClick={handleReset} />
        </section>
      </div>
    </div>
  );
}

export default App;
