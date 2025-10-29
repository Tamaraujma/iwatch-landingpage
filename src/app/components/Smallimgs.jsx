import Image from "next/image";
import "../globals.css";
import Arrows from "./Arrows";

const Smallimgs = () => {
  return (
    <div className="small-imgs-container">
      <Arrows />
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
