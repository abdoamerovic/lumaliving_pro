export default function Specification({
  specification,
}: {
  specification: {
    Dimensions: string;
    Materials: string[];
    Care: string;
  };
}) {
   return (
    <div className=" max-w-7xl p-12">
      <div className="text-[#8b8888] text-sm lg:text-base w-full md:w-1/2 font-bold ">
        <div className="flex flex-row  py-3  gap-8 md:gap-14">
        <h2>Dimensions</h2>
        <p className=" justify-center text-[#353535]">{specification.Dimensions}</p></div>
        <hr / >
        <div className="flex flex-row  py-3 gap-14 md:gap-18">
        <h2>Materials</h2>
        <p className=" justify-center text-[#383737]">{specification.Materials.join(", ")}</p></div>
        <hr />
        <div className="flex flex-row  py-3 gap-18 md:gap-26">
        <h2>Care</h2>
        <p className=" text-[#383737]">{specification.Care}</p></div>
        <hr />
      </div>
    </div>
  );
}