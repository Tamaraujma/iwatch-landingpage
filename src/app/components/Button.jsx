import "../globals.css";

const Button = () => {
  return (
    <div className="ml-4 flex justify-start px-24 max-md:ml-0 max-md:justify-center max-md:px-8 md:ml-4 md:justify-start md:px-24">
      <button className="h-[70px] w-[250px] cursor-pointer rounded-[40px] border-4 border-white bg-transparent text-2xl text-white transition-colors duration-300 hover:bg-white hover:text-[#b6ccda]">
        Buy now
      </button>
    </div>
  );
};

export default Button;
