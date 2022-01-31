import Modal from "./Modal";
import { useState } from "react";
// import arrow from "../../../public/assets/icons/caret-down-solid.svg";
const WithdrawModal = ({ closeModal }) => {
  const availableToken = [
    {
      id: 1,
      name: "LINK",
      imgSrc: "/assets/icons/tokens/ico.token.link.svg",
    },
    {
      id: 2,
      name: "AAVE",
      imgSrc: "/assets/icons/tokens/ico.token.aave.svg",
    },
    {
      id: 3,
      name: "COMP",
      imgSrc: "/assets/icons/tokens/ico.token.comp.svg",
    },
    {
      id: 4,
      name: "MKR",
      imgSrc: "/assets/icons/tokens/ico.token.mkr.svg",
    },
    {
      id: 5,
      name: "UNI",
      imgSrc: "/assets/icons/tokens/ico.token.uni.svg",
    },
    {
      id: 6,
      name: "SNX",
      imgSrc: "/assets/icons/tokens/ico.token.snx.svg",
    },
    {
      id: 7,
      name: "SUSHI",
      imgSrc: "/assets/icons/tokens/ico.token.sushi.svg",
    },
    {
      id: 8,
      name: "YFI",
      imgSrc: "/assets/icons/tokens/ico.token.yfi.svg",
    },
  ];

  const [showList, setShowList] = useState(false);

  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const [token, setToken] = useState(1);
  const [amount, setAmount] = useState(0);
  const handleInput = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };

  //Syed Sadman Sabbir

  const [pipt, setPipt] = useState(0);

  const piptHandle = (e) => {
    setPipt(e.target.value);
  };
  // Syed Sadman Sabbir
  const handleTokenSelection = () => {
    setShowList(!showList);
  };

  return (
    <>
      <Modal title="Withdraw" closeModal={closeModal} w="40%">
        <div className="withdraw">
          {/* Sadman Sabbir  */}

          <h5 className="withModalText">
            Remove liquidity in one trasaction. Your PIPT will automatically
            swap to one of the underlying pool token
          </h5>

          <label className="fs-s tc-s" htmlFor="pipt">
            Pipt amount
            {/* <label className="fs-s tc-s" id="slip">
              Slippage <p className="slipnext">0.6%</p>
            </label> */}
          </label>

          <input
            className="fs-xl ff-2 tc-p"
            id="pipt"
            onChange={piptHandle}
            value={pipt}
            type="number"
          />

          {/* Sadman Sabbir  */}

          <label className="fs-s tc-s" id="padtitle" htmlFor="withdraw">
            Enter amount
          </label>
          <div className="flexdisp">
            <input
              className="fs-xl ff-2 tc-p ab"
              id=" withdraw"
              onChange={handleInput}
              value={amount}
              type="number"
            />
            <div onClick={handleTokenSelection} className="selected-token">
              <img src={availableToken[token].imgSrc} alt="" />
              <p>{availableToken[token].name}</p>
              <span className="custom-arrow"></span>
            </div>
            {showList && (
              <div className="selector-dropdown">
                {availableToken.map((token) => (
                  <div
                    className="option"
                    onClick={() => {
                      setToken(token.id);
                      handleTokenSelection();
                    }}
                    key={token.id}
                  >
                    <img src={token.imgSrc} alt="" />
                    <p>{token.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="btnWallet">Connect Wallet</button>
        </div>
      </Modal>

      <style jsx>
        {`
          input {
            background-color: rgba(255, 255, 255, 0.048);
            border: none;
            width: 100%;
            height: 70px;
            padding-left: 30px;
            box-sizing: border-box;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input:focus-visible {
            outline-offset: 0;
            outline: none;
          }
          .flexdisp {
            display: flex;
            align-items: end;
          }
          .selected-token {
            padding: 8px 16px;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.048);
            width: fit-content;
            cursor: pointer;

            border-radius: 0.5rem; /// sss
          }

          .selected-token img {
            margin-right: 8px;
          }

          .selector-dropdown {
            position: absolute;
            width: 50px;
          }

          .option {
            display: flex;
            padding: 8px 16px;
            align-items: center;
          }

          .option img {
            margin-right: 8px;
          }

          // syed sadman sabbir

          .withModalText {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            color: #9d9d98;
            padding: 1rem 0 1rem 0;
          }
          #padtitle {
            margin: 5px 0 5px 0;
          }
          .tc-s {
            color: white;
          }
          #slip {
            margin-left: 55%;
          }
          .slipnext {
            background: rgba(255, 187, 0, 0.2);
            border-radius: 10px;

            width: 36px;
            height: 24px;
            padding: 0 1rem 0 1rem;
            color: #ffbb00;
            //font styles
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 10px;
            display: inline-block;
            /* identical to box height */
          }

          .btnWallet {
            width: 100%;
            padding: 14px 0 14px 0;
            margin-right: 20px;
            margin-top: 80px;
            color: #292630;
            font-size: 14px;
            font-weight: bold;
            background: linear-gradient(95.03deg, #ffbb00 0%, #ff9900 100.65%)
                padding-box,
              linear-gradient(95.26deg, #ffeeb8 5.57%, rgba(0, 0, 0, 0) 97.7%)
                border-box;
            border: 1px solid transparent;
            border-radius: 55px;
            transition: transform 2s;
            cursor: pointer;
            transition: all 0.25s ease-in-out;
          }
          //custom arrow
          .custom-arrow {
            border: solid white;
            margin: 0 0 5px 10px;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
          }

          // syed sadman sabbir
        `}
      </style>
    </>
  );
};

export default WithdrawModal;
