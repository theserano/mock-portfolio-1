import { circInOut, motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import "./card.scss";

type Props = {
  image: string;
  title: string;
  index: number;
};

const ProjectCard = ({ image, title, index }: Props) => {
  return (
    <motion.div key={index} className="project flex flex-col gap-8">
      <motion.img
        whileHover={{
          filter: "saturate(1)",
          borderRadius: "15px",
        }}
        whileInView={{
          scale: [1, 0.9, 1],
          borderRadius: ["0px", "15px", "0px"],
        }}
        transition={{ duration: 0.3, repeat: 1, repeatDelay: 1 }}
        className="project__image"
        src={image}
        alt={title}
      />

      <motion.div className="project__bottom">
        <motion.h1 className="project__bottom__title">{title}</motion.h1>
        <motion.button
          whileHover={{ color: "#fff" }}
          className="project__bottom__btn"
        >
          see project{" "}
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              times: [0, 0.5, 1],
              duration: 2,
              repeat: Infinity,
              ease: circInOut,
            }}
          >
            <GoArrowUpRight />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
