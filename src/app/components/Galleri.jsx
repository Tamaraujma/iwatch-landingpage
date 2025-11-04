import Headline from "./Headline";
import BigImg from "./BigImg";
import Smallimgs from "./Smallimgs";
import Image from "next/image";

const Galleri = () => {
  return (
    <div className="galleri">
      <Headline />
      <BigImg />
      <Smallimgs />
    </div>
  );
};

export default Galleri;
