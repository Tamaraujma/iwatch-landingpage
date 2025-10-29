import "../globals.css";
import Image from "next/image";
import Headline from "./Headline";

const BigImg = () => {
  return (
    <div className="big-img-container">
      <Headline />
      <Image src="/navy.png" alt="Navy Apple Watch" width={486} height={681} priority style={{ objectFit: "contain" }} />
      <div className="dots">
        <div className="dot-navy"></div>
        <div className="dot-mint"></div>
        <div className="dot-ocean"></div>
      </div>
    </div>
  );
};

export default BigImg;
