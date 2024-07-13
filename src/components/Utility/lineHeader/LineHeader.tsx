import "./lineHeader.scss";
import { motion } from "framer-motion";

interface lineHeaderTypes {
  text: string;
}

const LineHeader = ({ text }: lineHeaderTypes) => {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: [0, 1],
      }}
      transition={{ delay: 1 }}
      className="line_header"
    >
      <span className="line_header_line"></span>
      <span className="line_header_text">{text}</span>
    </motion.div>
  );
};

export default LineHeader;
