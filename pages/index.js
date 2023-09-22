//Next Image
import Image from "next/image";

//Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//Framer Motion
import { motion } from "framer-motion";

//Variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col md:justify-center pt-32 md:pt-10 xl:text-left h-full container mx-auto">
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into {""}{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="m max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis cupiditate, accusamus ducimus quos maiores id incidunt
            sunt distinctio et expedita.
          </motion.p>
          {/* Mobile Button */}
          <button className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </button>

          {/* Desktop Button */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* BG Image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* Particles */}
        <div>
          <ParticlesContainer />
        </div>

        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full  absolute -bottom-32 lg:bottom-0 lg:right-[-53%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
