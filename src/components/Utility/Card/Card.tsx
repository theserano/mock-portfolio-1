import { motion } from "framer-motion";
import "./card.scss";

type Props = {
  image: string;
  title: string;
  text: string;
};

const Card = ({ image, title, text }: Props) => {
  return (
    <motion.div
      whileHover={{
        borderRadius: "10px",
        backgroundColor: "#050507",
      }}
      className="card flex flex-col gap-4"
    >
      <motion.div className="card__image">
        <motion.div className="card__image__main">
          <img src={image} alt="stuff" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            times: [0, 0.5, 1],
            duration: 1,
            repeat: Infinity
          }}
          className="card__image__circle"
        ></motion.div>
      </motion.div>
      <motion.h1 className="card__title">{title}</motion.h1>
      <motion.p className="card__text">{text}</motion.p>
    </motion.div>
  );
};

export default Card;
