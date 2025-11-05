import "../globals.css";
import Image from "next/image";
import Headline from "./Headline";
import Dots from "./Dots";

const BigImg = () => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-8 px-4 py-8 text-center md:py-12">
      <Headline />
      <div className="flex items-center justify-center">
        <Image
          src="/navy.png"
          alt="Navy Apple Watch"
          width={486}
          height={681}
          priority
          className="h-auto max-w-full object-contain"
        />
      </div>
      <Dots />
    </div>
  );
};

export default BigImg;
