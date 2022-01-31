import Link from "next/link";

import ProgressBar from "../common/ProgressBar";
import Separator from "../common/Separator";
import DepositSummary from "./DepositSummary";

const Card = ({
  prodID,
  prodName,
  imgSrc,
  position,
  currentDeposit,
  maxCapacity,
  currentProjectYield,
  priceChange,
}) => {
  const productHandler = () => {
    console.log("Going to product ", prodID);
  };

  return (
    <>
      <Link href={`/products/${prodID}`}>
        <div
          onClick={productHandler}
          id="prod-card"
          className="bg-darker darker-shadow"
        >
          <div className="card-title">
            <div className="corner-img">
              <img src="/assets/icons/ico.scale.svg" alt="" />
            </div>
            <div className="title-container">
              <img src={imgSrc} alt="" />
              <h3 className="proCh">{prodName}</h3>
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-container">
              <img src="/assets/icons/ico.currencies.svg" alt="" />
              <div className="value-display">
                <div className="sshape"></div>
                <section>
                  <p className="subtitle">Current Projected Yield (APY)</p>
                  <p className="num1">{currentProjectYield}%</p>
                </section>
              </div>
              <div className="value-display">
                <div className="sshape"></div>
                <section>
                  <p className="subtitle">24h price change</p>
                  <p className="num1">{priceChange}%</p>
                </section>
              </div>
              <div className="spacer">
                <DepositSummary maxCap={maxCapacity} currDep={currentDeposit} />
              </div>
              <Separator />
              <div className="position-counter">
                <p>YOUR POSITION</p>
                <p>{position}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <style jsx>
        {`
          .spacer {
            margin-top: 24px;
            margin-bottom: 24px;
          }
          .proCh {
            width: 10ch;
          }
        `}
      </style>
    </>
  );
};

export default Card;
