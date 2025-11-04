import Image from "next/image";
import "../globals.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Smallimgs = () => {
  return (
    <div className="small-imgs-container">
      <div className="arrow">
        <FaArrowLeft />
        <p>1</p>
        <FaArrowRight />
      </div>
      <div className="navy-background">
        <Image src="/navy.png" alt="Navy Apple Watch" width={90} height={90} priority style={{ objectFit: "contain" }} />
      </div>
      <div className="mint-background">
        <Image src="/mint.png" alt="Mint Apple Watch" width={90} height={90} priority style={{ objectFit: "contain" }} />
      </div>
      <div className="ocean-background">
        <Image src="/ocean.png" alt="Ocean Apple Watch" width={90} height={90} priority style={{ objectFit: "contain" }} />
      </div>
    </div>
  );
};

export default Smallimgs;
