import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "../globals.css";
import "../globals.css";

const Arrows = () => {
  return (
    <div className="absolute left-0 ml-32 flex cursor-pointer items-center gap-2.5 text-2xl text-white">
      <FaArrowLeftLong className="text-2xl" />
      <p className="m-0 -mt-1 text-xl">1</p>
      <FaArrowRightLong className="text-2xl" />
    </div>
  );
};

export default Arrows;
