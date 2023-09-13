//Next Image
import Image from "next/image";

//Next Link
import Link from "next/link";

//Icon
import { HiArrowDownRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[135px] h-[135px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={105}
          height={117}
          alt=""
          className="animate-spin-slow max-w-[105] max-h-[117]"
        />

        <HiArrowDownRight className="absolute text-4xl -rotate-45 group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
