import { motion } from "framer-motion";
import LineHeader from "../Utility/lineHeader/LineHeader";
import "./recent.scss";
import ProjectCard from "../Utility/Card/ProjectCard";
import alana from "../../assets/alana.png";
import wohoo from "../../assets/wohoo.png";
import pagee from "../../assets/pagee.png";
import keikoko from "../../assets/keikoko.png";

type Props = {};

interface dataProps {
  [key: string]: string;
}

const data: dataProps[] = [
  {
    image: alana,
    title: "Alana - live data app",
  },
  {
    image: wohoo,
    title: "Wohoo - weather app",
  },
  {
    image: pagee,
    title: "Pagee - real estate UI kit",
  },
  {
    image: keikoko,
    title: "Keikoko - agency web",
  },
];

const Recent = ({}: Props) => {
  return (
    <motion.div className="recent">
      <motion.div className="recent__top container mx-auto px-2">
        <motion.div className="recent__top__left">
          <motion.h5>
            <LineHeader text="Recent works" />
          </motion.h5>
          <motion.h1
            whileInView={{
              scaleX: [0.5, 1.2, 1],
              originX: 0,
            }}
            transition={{duration: 1}}
          >
            Some of my favorite <br />
            projects
          </motion.h1>
        </motion.div>
        <motion.div className="recent__top__right">
          <motion.button
            whileInView={{
              rotate: [
                0, 5, 10, 15, 20, 15, 10, 5, 0, -5, -10, -15, -20, -15, -10, -5,
                0,
              ],
            }}
            whileHover={{ backgroundColor: "#079211" }}
            transition={{
              duration: 0.2,
              repeat: 1,
              repeatDelay: 1
            }}
          >
            View all projects
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div className="recent__projects container mx-auto px-2">
        {data.map((item, index) => (
          <ProjectCard index={index} image={item.image} title={item.title} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Recent;
