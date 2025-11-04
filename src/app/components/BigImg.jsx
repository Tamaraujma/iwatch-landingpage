import "../globals.css";
import Image from "next/image";
import Headline from "./Headline";
import Dots from "./Dots";

const BigImg = () => {
  return (
    <div className="big-img-container">
      <Headline />
      <Image src="/navy.png" alt="Navy Apple Watch" width={486} height={681} priority style={{ objectFit: "contain" }} />
      <Dots />
    </div>
  );
};

export default BigImg;
