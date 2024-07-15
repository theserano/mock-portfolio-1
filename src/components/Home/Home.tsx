import { motion } from "framer-motion";
import { LuDownload } from "react-icons/lu";
import "./home.scss";
import { useEffect, useRef, useState } from "react";

type Props = {};

const Home = ({}: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(650);
  const [mainWidth, setMainWidth] = useState(textWidth);
  const [isHovered, setIsHovered] = useState(false);

  const updateWidth = () => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {setMainWidth(textWidth)}, [textWidth])

  return (
    <motion.div className="home container mx-auto px-2">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="home__header"
      >
        Hello, I'm Alif Reza
      </motion.h1>
      <motion.div
        ref={textRef}
        className="home__title"
        style={{
          border: "5px solid white",
          borderStyle: "none solid none none",
          overflow: "hidden",
        }}
        animate={{
          width: [0, mainWidth, mainWidth, mainWidth, 0],
        }}
        transition={{
          times: [0, 0.25, 0.5, 0.75, 1],
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "circInOut",
          repeatDelay: 2,
        }}
      >
        Product designer
      </motion.div>
      <motion.p
        className="home__text"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        I'm from Singapore and I have been working as a Product Designer for
        more than 7 years. I've worked for a Hanziree company Pabloo as a
        Product Designer and Front-end Developer for 3 years.
      </motion.p>
      <motion.div className="flex flex-wrap gap-8">
        <motion.button whileHover={{ scaleX: 1.1 }} className="email_me">
          Email me
        </motion.button>
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="flex gap-2 items-center download__cv"
        >
          <motion.span
            animate={{
              opacity: isHovered ? 1 : 0.5,
            }}
            className="download__cv__span"
          >
            <LuDownload />
          </motion.span>
          <motion.p
            style={{cursor: "pointer"}}
            animate={{
              scale: isHovered ? 1.05 : 1,
              opacity: isHovered ? 1 : 0.5,
            }}
            className="download__cv__p"
          >
            Download CV
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
