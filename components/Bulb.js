//Next Image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="hidden lg:flex absolute -left-[9%] -bottom-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src={"/bulb.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;
