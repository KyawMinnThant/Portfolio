import React from "react";

const BgTitle = ({
  bgtitle,
  maintitle,
}: {
  bgtitle: string;
  maintitle: string;
}) => {
  return (
    <div className="px-6 sm:px-10 flex justify-center items-center h-40 relative">
      {/* Big outlined text */}
      <h1
        className="
          absolute
          top-[-10px] sm:top-[-15px] md:top-[-20px] lg:top-[-30px]
          font-extrabold text-transparent opacity-90
          text-[70px] sm:text-[90px] md:text-[110px] lg:text-[150px]
          select-none
          pointer-events-none
        "
        style={{ WebkitTextStroke: "1.5px #1f2937" }} // gray-800 stroke
        aria-hidden="true"
      >
        {bgtitle}
      </h1>

      {/* Real visible header */}
      <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold underline text-white">
        {maintitle}
      </h2>
    </div>
  );
};

export default BgTitle;
