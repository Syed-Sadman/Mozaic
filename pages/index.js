import Card from "../components/products/Card";
import Link from "next/link";

export default function Home() {
  const prodInfo = [
    {
      prodID: 1,
      prodName: "Avalanche Majors",
      imgSrc: "/assets/icons/ico.avalanchemajor.svg",
      position: 29,
      currentDeposit: 3946.31,
      maxCapacity: 15500.0,
      currentProjectYield: 11.56,
      priceChange: 2.8,
    },
    {
      prodID: 2,
      prodName: "T-YVUSDC- P-ETH",
      imgSrc: "/assets/icons/ico.T-YVUSDC.svg",
      position: 12,
      currentDeposit: 6632.31,
      maxCapacity: 12240.0,
      currentProjectYield: 27.53,
      priceChange: 1.6,
    },
    {
      prodID: 3,
      prodName: "T-ETH-C",
      imgSrc: "/assets/icons/ico.T-ETH-C.svg",
      position: 20,
      currentDeposit: 4632.31,
      maxCapacity: 13500.0,
      currentProjectYield: 21.34,
      priceChange: 1.3,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="page-title">
          <h1>Products</h1>
        </div>

        <div className="card-container">
          {prodInfo.map((product) => (
            <Card {...product} key={product.prodID} />
          ))}
        </div>
      </div>
    </>
  );
}
