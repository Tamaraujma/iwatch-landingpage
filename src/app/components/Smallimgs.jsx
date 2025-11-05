import Image from "next/image";
import "../globals.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Smallimgs = () => {
  return (
    <div className="mx-auto mt-8 flex max-w-[1200px] items-center justify-end gap-8 p-8 max-md:p-10 md:gap-8 md:p-8">
      <div className="absolute left-0 ml-32 flex cursor-pointer items-center gap-2.5 text-2xl text-white">
        <FaArrowLeft />
        <p className="-mt-1 text-xl">1</p>
        <FaArrowRight />
      </div>
      <div className="relative flex h-[70px] w-[131px] cursor-pointer items-center justify-center rounded-[10px] bg-[#4345589b] transition-transform duration-300 ease-in-out hover:scale-110 max-md:h-20 max-md:w-20">
        <Image
          src="/navy.png"
          alt="Navy Apple Watch"
          width={90}
          height={90}
          priority
          className="-mt-12 object-contain"
        />
      </div>
      <div className="relative flex h-[70px] w-[131px] cursor-pointer items-center justify-center rounded-[10px] bg-[#58d7c4a0] transition-transform duration-300 ease-in-out hover:scale-110 max-md:h-20 max-md:w-20">
        <Image
          src="/mint.png"
          alt="Mint Apple Watch"
          width={90}
          height={90}
          priority
          className="-mt-12 object-contain"
        />
      </div>
      <div className="relative flex h-[70px] w-[131px] cursor-pointer items-center justify-center rounded-[10px] bg-[#c8dce5aa] transition-transform duration-300 ease-in-out hover:scale-110 max-md:h-20 max-md:w-20">
        <Image
          src="/ocean.png"
          alt="Ocean Apple Watch"
          width={90}
          height={90}
          priority
          className="-mt-12 object-contain"
        />
      </div>
    </div>
  );
};

export default Smallimgs;
