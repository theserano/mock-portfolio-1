import "./contact.scss";
import { motion } from "framer-motion";

type Props = {};

const Contact = ({}: Props) => {
  return (
    <motion.div
      whileInView={{
        borderWidth: ["5px", "30px", "5px", "30px", "5px"],
      }}
      transition={{
        delay: 1
      }}
      className="contact"
    >
      <motion.div className="contact__container container mx-auto px-2">
        <motion.div className="contact__container__left">
          <motion.h1>Have any project in mind ?</motion.h1>
          <motion.p>
            Feel free to contact me or just say friendly hello!
          </motion.p>
        </motion.div>
        <motion.div className="contact__container__right">
          <motion.button
            whileHover={{
              backgroundColor: "transparent",
              border: "1px solid #079211",
              borderRadius: "10px",
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
