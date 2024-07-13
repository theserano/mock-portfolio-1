import Card from "../Utility/Card/Card";
import LineHeader from "../Utility/lineHeader/LineHeader";
import "./services.scss";
import { motion } from "framer-motion";
import Frame from "../../assets/Frame.svg";
import Code from "../../assets/code.svg";
import Copyright from "../../assets/copy.svg";
import { useEffect, useRef, useState } from "react";

type Props = {};

const Services = ({}: Props) => {

  const [screenWidth, setScreenWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const width = divRef.current?.offsetWidth;
    
    if(width === 304 || width === 204){
      setScreenWidth(width);
    }
    
  }, [])

  return (
    <motion.div className="services container mx-auto px-2">
      <motion.div className="services__top flex justify-between items-center">
        <motion.h1
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          className="services__top__header"
        >
          7+ years experience working
        </motion.h1>
        <motion.div className="services__top__right flex flex-col gap-4">
          <LineHeader text="Services" />
          <motion.p
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
          >
            Discover the best services I offer, designed to ensure the success
            of your project.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div className="services__bottom flex justify-between items-center">
        <motion.div
          ref={divRef}
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
        >
          <Card
            image={Frame}
            title="Product Design"
            text="I offer innovative and attention-grabbing product design services. From initial ideation to implementation."
          />
        </motion.div>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: screenWidth === 304 || screenWidth === 204 ? 0 : 0.5,
          }}
        >
          <Card
            image={Code}
            title="Frontend developer"
            text="Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS."
          />
        </motion.div>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: screenWidth === 304 || screenWidth === 204 ? 0 : 1,
          }}
        >
          <Card
            image={Copyright}
            title="Brand Strategy"
            text="I help design strong and captivating brand strategies. Through thorough research and market analysis."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
