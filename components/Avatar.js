//Next Image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.png"}
        width={437}
        height={378}
        alt=""
        className="trasnlate-z-0"
      />
    </div>
  );
};

export default Avatar;
