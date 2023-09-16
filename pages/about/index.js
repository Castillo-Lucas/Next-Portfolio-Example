//React Usestate
import { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

//Counter Data
const counterData = [
  { count: 10, text: "Years of experience" },
  { count: 250, text: "Satisfied clients" },
  { count: 650, text: "Finished projects" },
  { count: 8, text: "Winning awards" },
];

//Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//Counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-24 md:py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar Img*/}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[220px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full grid grid-cols-2 gap-4 md:snap-none mt-4">
        {/* Text */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="col-span-2 md:col-span-1 flex flex-col justify-center md:pl-10 md:pt-5"
        >
          <h1 className="text-2xl lg:text-5xl mb-5 ">
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </h1>
          <p className="mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0 w-[83%]">
            10 years ago, I began freelancer as a developer.Since that, I´ve
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and costumer use.
          </p>

          {/* Counter */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0">
            <div className="flex flex-1 xl:gap-x-6">
              {counterData.map((item, indexItem) => (
                <div
                  key={indexItem}
                  className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                >
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={item.count} duration={5} />+
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="col-span-2 md:col-span-1 flex flex-col w-full"
        >
          {/* List */}
          <div className="w-full flex justify-center lg:justify-start">
            <ul className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 md:mb-4 pt-2 md:pt-10">
              {aboutData.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-full after:bg-red-600 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white 
                after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="py-4 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* Title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                {/* Icons */}
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) => (
                    <div key={itemIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
