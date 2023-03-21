import Dolar from "./images/dolar.png";
import Person from "./images/person.svg";
import Logo from "./images/logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { mdiCurrencyUsd } from "@mdi/js";
import { Icon } from "@mdi/react";

function App() {
  const handleReset = () => {
    console.log("Reset");
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
            <input placeholder="0" className="priceInput" type="text" />
          </div>
          <div className="middle">
            <p>Select Tip %</p>
            <div className="buttons">
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input placeholder="Custom" className="customInput" type="text" />
            </div>
          </div>
          <div className="bottom">
            <p>Number of People</p>
            <input placeholder="0" className="numberOfpeople" type="text" />
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
