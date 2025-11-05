const Dots = () => {
  return (
    <div className="absolute top-1/2 right-16 flex -translate-y-1/2 flex-col gap-4">
      <div className="h-6 w-6 cursor-pointer rounded-full border-2 border-white bg-[#404354] transition-transform duration-300 ease-in-out hover:scale-110"></div>
      <div className="h-6 w-6 cursor-pointer rounded-full border-2 border-white bg-[#58d7c4] transition-transform duration-300 ease-in-out hover:scale-110"></div>
      <div className="h-6 w-6 cursor-pointer rounded-full border-2 border-white bg-[#c8dce5] transition-transform duration-300 ease-in-out hover:scale-110"></div>
    </div>
  );
};

export default Dots;
